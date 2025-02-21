import React from 'react';
import { TextField, Button, Box, Alert } from '@mui/material';
import styles from '../UserProfile.module.scss';
import { EditFormProps } from "../props/EditFormProps.ts";

const EditForm: React.FC<EditFormProps> = ({
    user, handleInputChange, handleSave, errorMessage,
    successMessage, newEmail, setNewEmail, newPassword, setNewPassword,
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
            />
            <TextField
                label="Пошта"
                name="email"
                value={newEmail}
                onChange={(event) => setNewEmail(event.target.value)}
                fullWidth
                margin="normal"
                type="email"
            />
            <TextField
                label="Пароль"
                name="password"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
                fullWidth
                margin="normal"
                type="password"
            />
            <Button
                variant="contained"
                onClick={() => handleSave(newEmail)}
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