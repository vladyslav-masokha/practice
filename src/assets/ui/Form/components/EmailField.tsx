import React from 'react'
import { helperTextEmailLogic } from "../helperLogic/HelperTextEmailLogic.ts";
import { handleEmailBlur } from "../handleBlurLogic/HandleEmailBlur.ts";
import { TextField } from "@mui/material";
import { EmailFieldProps } from "../props/EmailFieldProps.ts";

const EmailField: React.FC<EmailFieldProps> = ({ email, isEmailValid, setIsEmailValid, handleEmailInputChange }) => {
    return (
        <TextField
            required
            type='email'
            id='outlined-basic'
            label='Електрона пошта'
            variant='outlined'
            value={email}
            error={!isEmailValid}
            helperText={helperTextEmailLogic(isEmailValid)}
            onChange={handleEmailInputChange}
            onBlur={() => handleEmailBlur(email, setIsEmailValid)}
        />
    );
};

export { EmailField };