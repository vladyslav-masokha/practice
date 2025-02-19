import {Link} from "react-router-dom";
import styles from './HomeButton.module.scss'

const HomeButton = () => {
    return (
        <Link to='/' className={styles.link}>{'> '}На головну{' <'}</Link>
    )
}

export {HomeButton}