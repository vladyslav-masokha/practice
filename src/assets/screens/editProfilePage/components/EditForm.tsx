import React from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import styles from '../EditProfilePage.module.scss'
import { EditFormProps } from "../../userProfilePage/props/EditFormProps.ts";
import { InputStyles } from "../../userProfilePage/styles/InputStyles.ts";

const EditForm: React.FC<EditFormProps> = ({
    user,
    handleInputChange,
    handleSave,
    errorMessage,
    successMessage,
    newEmail,
    setNewEmail,
}) => {
    return (
        <Box className={styles.editForm}>
            <TextField
                label="Ім'я користувача"
                name="displayName"
                value={user.displayName || ''}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={InputStyles}
            />
            <TextField
                label="Пошта"
                name="email"
                value={newEmail !== null ? newEmail : ''}
                onChange={(event) => setNewEmail(event.target.value)}
                placeholder={newEmail !== null ? newEmail : 'Пошта'}
                fullWidth
                margin="normal"
                type="email"
                sx={InputStyles}
            />
            <Button
                variant="contained"
                onClick={() => handleSave(newEmail !== null ? newEmail : '')}
                sx={{ mt: 2 }}
                className={styles.saveButton}
            >
                Зберегти
            </Button>

            {errorMessage && (<Alert severity="error" sx={{ mt: 2 }}>{errorMessage}</Alert>)}
            {successMessage && (<Alert severity="success" sx={{ mt: 2 }}>{successMessage}</Alert>)}
        </Box>
    );
};

export { EditForm };