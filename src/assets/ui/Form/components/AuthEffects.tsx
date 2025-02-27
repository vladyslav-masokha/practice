import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { redirectAfterTimeoutLogic } from '../../../globalLogics/redirectAfterTimeoutLogic.ts'
import { User} from 'firebase/auth';

interface AuthEffectsProps {
    email: string;
    password: string;
    user: User | null | undefined;
    setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
    setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthEffects: React.FC<AuthEffectsProps> = ({
    email, password, user,
    setErrorMessage, setSuccessMessage,
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        setErrorMessage(null);
        setSuccessMessage(null);
    }, [email, password, setErrorMessage, setSuccessMessage]);

    useEffect(() => {
        if (user) {
            setSuccessMessage("Ви успішно увійшли!");
            setErrorMessage(null);
            redirectAfterTimeoutLogic({ user, navigate });
        }
    }, [user, navigate, setSuccessMessage]);

    return null;
};

export { AuthEffects }