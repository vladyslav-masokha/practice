import React from 'react'
import { Apple as AppleIcon } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Auth } from 'firebase/auth'
import styles from '../Form.module.scss'
import { handleAppleSignIn } from '../logic/AuthLogic'

interface SignInWithAppleProps {
    auth: Auth
}

const SignInWithApple: React.FC<SignInWithAppleProps> = ({ auth }) => {
    return (
        <Button
            className={styles.signInGoogle}
            variant='contained'
            color='primary'
            startIcon={<AppleIcon />}
            onClick={() => handleAppleSignIn(auth)}
        >
            Увійти через Apple
        </Button>
    )
}

export { SignInWithApple }
