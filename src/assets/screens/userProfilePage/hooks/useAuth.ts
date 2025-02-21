import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {IAuthUser} from "./IAuthUser.ts";

const useAuth = () => {
    const auth = getAuth();
    const [user, setUser] = useState<IAuthUser | null>(null);
    const [email, setEmail] = useState<string>('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser({
                    uid: authUser.uid,
                    displayName: authUser.displayName,
                    email: authUser.email,
                });
                setEmail(authUser.email || '');
            } else {
                setUser(null);
                setEmail('');
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return { user, email, setUser, setEmail };
};

export { useAuth };