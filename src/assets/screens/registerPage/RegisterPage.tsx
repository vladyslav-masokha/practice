import { TextField, Typography } from '@mui/material';
import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MessagesLogic } from '../../globalLogics/messagesLogic.tsx';
import { useTitleLogic } from '../../globalLogics/useTitleLogic.tsx';
import styles from '../../ui/Form/Form.module.scss';
import { FormBody } from '../../ui/Form/FormBody';
import { AuthBtnRegister } from '../../ui/Form/buttons/AuthBtnRegister';
import { SignInWithGoogle } from '../../ui/Form/buttons/AuthBtnSignInWithGoogle';
import { handleUserNameBlur } from '../../ui/Form/handleBlurLogic/HandleUserNameBlur';
import { helperTextUserNameLogic } from '../../ui/Form/helperLogic/HelperTextUserNameLogic';
import { handleUserNameChange } from '../../ui/Form/logic/AuthLogic';
import { handleRegister } from '../../ui/Form/logic/RegisterService';
import { HomeButton } from '../../ui/HomeButton/HomeButton.tsx';
import { AuthEffects } from '../../ui/Form/components/AuthEffects.tsx';

const RegisterPage = () => {
	const auth = getAuth();
	const [user] = useAuthState(auth);
	const [userName, setUserName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [isUserNameValid, setIsUserNameValid] = useState<boolean>(true);
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
	const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
	const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);

	useTitleLogic({ namePage: 'Реєстрація', id: null });

	const handleRegisterClick = () => {
		handleRegister(
			userName,
			email,
			password,
			setUserName,
			setEmail,
			setPassword,
			setSuccessMessage,
			setErrorMessage
		);
	};

	const messageProps = { successMessage, errorMessage };
	const btnRegisterProps = {
		handleRegisterClick,
		isUserNameValid,
		isEmailValid,
		isPasswordValid,
	};

	const formProps = {
		email,
		password,
		setEmail,
		setPassword,
		isUserNameValid,
		isEmailValid,
		isPasswordValid,
		setIsEmailValid,
		setIsPasswordValid,
	};

	useEffect(() => {
		if (user) {
			setIsEmailVerified(user.emailVerified);
		}
	}, [user]);

	return (
		<form className={styles.form}>
			<div className="wrapper">
				<Typography className={styles.title}>Реєстрація</Typography>
				<MessagesLogic {...messageProps} />

				<div className={styles.formBody}>
					<TextField
						required
						type="text"
						id="outlined-basic-1"
						label="Ім'я користувача"
						variant="outlined"
						value={userName}
						error={!isUserNameValid}
						helperText={helperTextUserNameLogic(isUserNameValid)}
						onBlur={() => handleUserNameBlur(userName, setIsUserNameValid)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleUserNameChange(e, { setUserName })
						}
					/>
					<FormBody {...formProps} />
					<AuthBtnRegister {...btnRegisterProps} />
					<SignInWithGoogle auth={auth} />

					<HomeButton />

					<AuthEffects
						email={email}
						password={password}
						user={user}
						setErrorMessage={setErrorMessage}
						setSuccessMessage={setSuccessMessage}
					/>
					{user && !isEmailVerified && (
						<Typography variant="body2" color="error">
							Будь ласка, підтвердіть вашу електронну пошту.
						</Typography>
					)}
				</div>
			</div>
		</form>
	);
};

export { RegisterPage };