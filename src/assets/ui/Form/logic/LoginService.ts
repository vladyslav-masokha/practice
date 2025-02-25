import { AuthError, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { LoginErrorMessages } from '../errorMessages/LoginErrorMessage'

type SetState<T> = (state: T) => void

const handleLogin = (
	email: string,
	password: string,
	setEmail: SetState<string>,
	setPassword: SetState<string>,
	setSuccessMessage: SetState<string | null>,
	setErrorMessage: SetState<string | null>
): Promise<void> => {
	return new Promise<void>((resolve, reject) => { // Create a new Promise
		const auth = getAuth();

		setErrorMessage(null);

		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				setSuccessMessage('Авторизація пройшла успішно!');
				setEmail('');
				setPassword('');
				resolve();
			})
			.catch((error: AuthError) => {
				const { code, message } = error;
				LoginErrorMessages(setErrorMessage, code, message);
				reject(error);
			});
	});
};

export { handleLogin }
