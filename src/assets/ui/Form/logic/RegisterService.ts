import {
	AuthError,
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile,
	sendEmailVerification,
	User,
} from 'firebase/auth';
import { RegisterErrorMessages } from '../errorMessages/RegisterErrorMessages';

type SetState<T> = (state: T) => void;

const sendVerificationEmail = async (user: User, setErrorMessage: SetState<string | null>) => {
	try {
		await sendEmailVerification(user);
	} catch (error) {
		const { code, message } = error as AuthError;
		RegisterErrorMessages(setErrorMessage, code, message);
	}
};

const handleRegister = (
	userName: string,
	email: string,
	password: string,
	setUserName: SetState<string>,
	setEmail: SetState<string>,
	setPassword: SetState<string>,
	setSuccessMessage: SetState<string | null>,
	setErrorMessage: SetState<string | null>
) => {
	const auth = getAuth();
	if (!userName.trim()) {
		setErrorMessage("Невірне ім'я користувача!");
		return;
	}

	createUserWithEmailAndPassword(auth, email, password)
		.then(async (userCredential) => {
			const user = userCredential.user;
			await updateProfile(user, { displayName: userName });

			await sendVerificationEmail(user, setErrorMessage); // Відправити лист

			setSuccessMessage('Реєстрація майже завершена. Перевірте свою пошту для підтвердження.');
			setErrorMessage('');

			setUserName('');
			setEmail('');
			setPassword('');
		})
		.catch((error: AuthError) => {
			const { code, message } = error;
			RegisterErrorMessages(setErrorMessage, code, message);
		});
};

export { handleRegister, sendVerificationEmail };