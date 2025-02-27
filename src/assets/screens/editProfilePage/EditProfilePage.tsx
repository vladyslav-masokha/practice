import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, User, updateProfile, updateEmail, sendEmailVerification } from 'firebase/auth';
import { EditForm } from './components/EditForm.tsx';
import styles from './EditProfilePage.module.scss';
import { useNavigate } from 'react-router-dom';
import { IAuthUser } from '../userProfilePage/hooks/IAuthUser.ts';

const EditProfilePage: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IAuthUser>({ photoURL: null, uid: '', displayName: null, email: null });
    const [newEmail, setNewEmail] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (authUser: User | null) => {
            if (authUser) {
                setUser({
                    photoURL: authUser.photoURL,
                    uid: authUser.uid,
                    displayName: authUser.displayName,
                    email: authUser.email,
                });
                setNewEmail(authUser.email);
                setIsEmailVerified(authUser.emailVerified);
            } else {
                navigate('/login');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleSave = async () => {
        try {
            const auth = getAuth();
            if (auth.currentUser) {
                if (user.displayName !== auth.currentUser.displayName || user.photoURL !== auth.currentUser.photoURL) {
                    await updateProfile(auth.currentUser, {
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    });
                }
                if (newEmail && newEmail !== auth.currentUser.email) {
                    if (isEmailVerified) {
                        await updateEmail(auth.currentUser, newEmail);
                        setSuccessMessage('Електронна пошта успішно змінена.');
                    } else {
                        await sendEmailVerification(auth.currentUser);
                        setSuccessMessage('Лист для підтвердження надіслано на нову електронну пошту.');
                        setErrorMessage(null);
                        return;
                    }
                }
                setSuccessMessage('Дані успішно збережено');
                setErrorMessage(null);
                navigate('/profile');
            }
        } catch (error) {
            console.error('Помилка збереження даних', error);
            setErrorMessage('Помилка збереження даних');
            setSuccessMessage(null);
        }
    };

    const handleVerifyEmail = async () => {
        const auth = getAuth();
        if (auth.currentUser) {
            await auth.currentUser.reload();
            setIsEmailVerified(auth.currentUser.emailVerified);
            if (auth.currentUser.emailVerified) {
                setSuccessMessage('Електронна пошта підтверджена!');
            } else {
                setErrorMessage('Електронна пошта ще не підтверджена.');
            }
        }
    };

    return (
        <div className={styles.editProfilePage}>
            <div className="wrapper">
                <h2>Редагування профілю</h2>
                <EditForm
                    user={user}
                    handleInputChange={handleInputChange}
                    handleSave={handleSave}
                    errorMessage={errorMessage}
                    successMessage={successMessage}
                    newEmail={newEmail}
                    setNewEmail={setNewEmail}
                />
                <button onClick={handleVerifyEmail}>Перевірити підтвердження</button>
            </div>
        </div>
    );
};

export { EditProfilePage };