import { IAuthUser } from "./IAuthUser.ts";
import React from "react";
import {getAuth, updateProfile, updateEmail, sendEmailVerification } from "firebase/auth";

const handleSaveClick = async (user: IAuthUser | null, newEmail: string | null, setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>, setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
    if (!user) {
        setErrorMessage('Користувач не авторизований.');
        return;
    }

    const auth = getAuth();
    if (!auth.currentUser) {
        console.error("Користувач не авторизований для оновлення профілю.");
        setErrorMessage("Помилка оновлення профілю: користувач не авторизований.");
        return;
    } else {
        try {
            if (newEmail && newEmail !== user.email) {
                await sendEmailVerification(auth.currentUser);

                setErrorMessage("На вашу нову пошту відправлено лист з підтвердженням. Будь ласка, перевірте свою пошту та підтвердіть email.");
                return;
            } else if (newEmail && newEmail === user.email) {
                console.log("Email не змінився, пропускаємо оновлення.");
            }

            await updateProfile(auth.currentUser, {displayName: user.displayName});
            if (newEmail && newEmail !== user.email) {
                await updateEmail(auth.currentUser, newEmail);
                setSuccessMessage('Email успішно оновлено!');
            }

        } catch (emailError: any) {
            console.error("Помилка оновлення email:", emailError);
            setErrorMessage("Помилка оновлення email: " + emailError.message);
            return;
        }
    }
};

export { handleSaveClick };