import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'firebase/auth';

interface AuthEffectsProps {
    email: string;
    password: string;
    user: User | null | undefined;
    setErrorMessage: (message: string | null) => void;
    setSuccessMessage: (message: string | null) => void;
}

const AuthEffects: React.FC<AuthEffectsProps> = ({ user, setErrorMessage, setSuccessMessage }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.emailVerified) {
            setSuccessMessage('Реєстрація успішна!');
            setErrorMessage(null);
            navigate('/');
        } else if (user && !user.emailVerified) {
            setSuccessMessage('Перевірте свою пошту для підтвердження.');
            setErrorMessage(null);
        }
    }, [user, navigate, setErrorMessage, setSuccessMessage]);

    return null;
};

export { AuthEffects };