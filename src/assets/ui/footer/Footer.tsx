import { Copyright } from './copyright/Copyright'
import styles from './Footer.module.scss'
import {Contacts} from "./copyright/Contacts.tsx";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.footerBody}>
					<Copyright />
					<Contacts />
				</div>
			</div>
		</footer>
	)
}

export { Footer }
