import {IAuthUser} from "../hooks/IAuthUser.ts";
import React from "react";

interface EditFormProps {
    user: IAuthUser;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSave: (newEmail: string) => Promise<void>;
    errorMessage: string | null;
    successMessage: string | null;
    newEmail: string;
    setNewEmail: React.Dispatch<React.SetStateAction<string>>;
}

export type { EditFormProps };