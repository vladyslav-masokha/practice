interface EmailFieldProps {
    email: string;
    isEmailValid: boolean;
    setIsEmailValid: (email: boolean) => void;
    handleEmailInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

export type { EmailFieldProps };