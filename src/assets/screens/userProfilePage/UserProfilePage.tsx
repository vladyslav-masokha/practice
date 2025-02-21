import React, { useState, useEffect } from 'react';
import { useTitleLogic } from '../../logics/titleLogic.tsx';
import { Header } from '../../ui/Header/Header';
import { Footer } from '../../ui/footer/Footer';
import styles from './UserProfile.module.scss';
import { useAuth } from './hooks/useAuth.ts';
import { handleEditClick, handleChange } from './hooks/userProfileLogic.ts'; // Видалили handleImageChange
import { handleSaveClick } from './hooks/handleSaveClick.ts';
import { EditForm } from "./components/EditForm.tsx";
import { ErrorPage } from "../errorPage/ErrorPage.tsx";
import Avatar from 'react-avatar'; // Імпортуємо react-avatar

const UserProfilePage = () => {
	useTitleLogic({ namePage: 'Профіль', id: null });

	const { user, email: userEmail, setUser, setEmail } = useAuth();
	const [newEmail, setNewEmail] = useState(user?.email || '');
	const [newPassword, setNewPassword] = useState(user?.password || '');
	const [isEditing, setIsEditing] = useState(false);
	const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);


	useEffect(() => {
		if (user && userEmail) setEmail(userEmail);
		if (user) {
			setNewEmail(user.email || '');
		}
	}, [setEmail, user, userEmail]);


	const handleSave = async () => {
		try {
			await handleSaveClick(user, newEmail, newPassword, setErrorMessage, setSuccessMessage);
			if (!errorMessage) {
				setIsEditing(false);
			}
		} catch (error) {
			console.error("Помилка збереження профілю:", error);
			setErrorMessage("Помилка збереження профілю. Спробуйте пізніше!.");
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(event, user, setUser);
	};


	return (
		<>
			<Header />

			<div className={styles.profile}>
				<div className='wrapper'>
					{user ? (
						<div>
							{isEditing ? (
								<EditForm
									user={user}
									handleInputChange={handleInputChange}
									handleSave={handleSave}
									errorMessage={errorMessage}
									successMessage={successMessage}
									newEmail={newEmail}
									setNewEmail={setNewEmail}
									newPassword={newPassword}
									setNewPassword={setNewPassword}
								/>
							) : (
								<div className={styles.userBody}>
									<div className={styles.userImg}>
										<Avatar
											name={user.displayName || user.email || ''}
											size="100"
											round={true}
										/>
										<h2>{user.displayName}</h2>
									</div>

									<div className={styles.userInfo}>
										<p>Пошта: {user.email}</p>
										<p>Пароль: ********</p>
										<button onClick={() => handleEditClick(setIsEditing)} className={styles.editButton}>Редагувати</button>
									</div>
								</div>
							)}
						</div>
					) : (
						<ErrorPage />
					)}
				</div>
			</div>

			<Footer />
		</>
	);
};

export { UserProfilePage };