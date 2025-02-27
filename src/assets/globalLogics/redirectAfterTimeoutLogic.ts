import { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const redirectAfterTimeoutLogic = ({ user, navigate }: { user: User | null | undefined, navigate: ReturnType<typeof useNavigate> }) => {
	setTimeout(() => {
		if (user) navigate('/');
	}, 1000);
};

export { redirectAfterTimeoutLogic };