import { useState } from 'react';
import { useTitleLogic } from '../../globalLogics/useTitleLogic.tsx';
import { Header } from '../../ui/Header/Header';
import { Footer } from '../../ui/footer/Footer';
import styles from './UserProfile.module.scss';
import { useAuth } from './hooks/useAuth.ts';
import { useNavigate } from 'react-router-dom'; // Імпорт useNavigate
import Avatar from 'react-avatar';
import { HelpMessage } from '../../components/HelpMessage/HelpMessage.tsx';

const UserProfilePage = () => {
	useTitleLogic({ namePage: 'Профіль', id: null });

	const { user } = useAuth();
	const [isEditing, setIsEditing] = useState(false);
	const navigate = useNavigate();

	console.log(isEditing);

	const handleEditClick = () => {
		setIsEditing(true);
		navigate('/edit-profile');
	};

	return (
		<>
			<Header />

			<div className={styles.profile}>
				<div className="wrapper">
					{user ? (
						<div className={styles.userBody}>
							<div className={styles.userImg}>
								{user.photoURL ? (
									<img loading="lazy" src={user.photoURL} alt={user.displayName || 'User photo'} />
								) : (
									<Avatar name={user.displayName || user.email || ''} size="100" round={true} />
								)}
								<h2>{user.displayName}</h2>
							</div>

							<div className={styles.userInfo}>
								<p>Пошта: {user.email}</p>
								<p>Пароль: ********</p>
								<button onClick={handleEditClick} className={styles.editButton}>
									Редагувати
								</button>
							</div>
						</div>
					) : (
						<HelpMessage message={'Ви не авторизовані!'} status="error" />
					)}
				</div>
			</div>

			<Footer />
		</>
	);
};

export { UserProfilePage };