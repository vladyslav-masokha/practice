import { IAuthUser } from "./IAuthUser.ts";
import React from "react";

export const handleEditClick = (setIsEditing: React.Dispatch<React.SetStateAction<boolean>>) => setIsEditing(true);

export const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    user: IAuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<IAuthUser | null>>
) => {
    const { name, value } = event.target;

    if (user) {
        setUser({ ...user, [name]: value });
    }
};

export const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<File | null>>
) => {
    if (event.target.files && event.target.files.length > 0) {
        setImage(event.target.files[0]);
    }
};