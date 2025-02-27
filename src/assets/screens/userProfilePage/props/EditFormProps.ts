import {IAuthUser} from "../hooks/IAuthUser.ts";
import React from "react";

interface EditFormProps {
    user: IAuthUser,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSave: (newEmail: string | null) => Promise<void>,
    errorMessage: string | null,
    successMessage: string | null,
    newEmail: string | null,
    setNewEmail: React.Dispatch<React.SetStateAction<string | null>>,
}

export type {EditFormProps};