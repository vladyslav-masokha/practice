interface FormBodyProps {
    email: string
    password: string
    setEmail: (email: string) => void
    setPassword: (password: string) => void
    isEmailValid: boolean
    isPasswordValid: boolean
    setIsEmailValid: (email: boolean) => void
    setIsPasswordValid: (password: boolean) => void
}

export type { FormBodyProps };