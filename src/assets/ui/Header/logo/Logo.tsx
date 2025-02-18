import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<div className={styles.headerLogo}>
			<Link to='/' className={styles.logo}>
				Nightflex
			</Link>
			<span className={styles.subLogo}>Кінотеатр твоєї мрії</span>
		</div>
	)
}

export { Logo }
