import React, { useState } from 'react'
import styles from './Form.module.scss'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { handlePasswordBlur } from './handleBlurLogic/HandlePasswordBlur'
import { HelperTextPasswordLogic } from './helperLogic/HelperTextPasswordLogic'
import { handleEmailChange, handlePasswordChange } from './logic/AuthLogic'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormBodyProps } from "./props/FormBodyProps.ts";
import { EmailField } from "./components/EmailField.tsx";

const FormBody: React.FC<FormBodyProps> = ({
	email, password, setEmail,
	setPassword, isEmailValid, isPasswordValid,
	setIsEmailValid, setIsPasswordValid,
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		handleEmailChange(e, { setEmail })

	const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		handlePasswordChange(e, { setPassword })

	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = (event: { preventDefault: () => void }) => event.preventDefault();

	return (
		<div className={styles.formFlex}>
			<EmailField
				email={email} isEmailValid={isEmailValid}
				setIsEmailValid={setIsEmailValid} handleEmailInputChange={handleEmailInputChange} />

			<TextField
				required
				id='outlined-password-input'
				label='Пароль'
				type={showPassword ? 'text' : 'password'}
				autoComplete='current-password'
				value={password}
				error={!isPasswordValid}
				helperText={HelperTextPasswordLogic(isPasswordValid)}
				onChange={handlePasswordInputChange}
				onBlur={() => handlePasswordBlur(password, setIsPasswordValid)}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</div>
	)
}

export { FormBody }
