import React from 'react'
import { Auth, GoogleAuthProvider, OAuthProvider, signInWithPopup } from 'firebase/auth'

interface handleUserNameChangeProps {setUserName: (userName: string) => void}
interface handleEmailChangeProps {setEmail: (email: string) => void}
interface handlePasswordChangeProps {setPassword: (password: string) => void}

const handleUserNameChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	{ setUserName }: handleUserNameChangeProps
) => setUserName(e.target.value)

const handleEmailChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	{ setEmail }: handleEmailChangeProps
) => setEmail(e.target.value)

const handlePasswordChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	{ setPassword }: handlePasswordChangeProps
) => setPassword(e.target.value)

const handleGoogleSignIn = async (auth: Auth) => {
	const provider = new GoogleAuthProvider()
	await signInWithPopup(auth, provider)
}

const handleAppleSignIn = async (auth: Auth) => {
	const appleProvider = new OAuthProvider('apple.com');
	await signInWithPopup(auth, appleProvider)
}

export {
	handleEmailChange,
	handleGoogleSignIn,
	handlePasswordChange,
	handleUserNameChange,
	handleAppleSignIn
}
