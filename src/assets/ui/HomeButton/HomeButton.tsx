import {Link} from "react-router-dom";
import styles from './HomeButton.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons/faHouse";

const HomeButton = () => {
    return (
        <Link to='/' className={styles.link}>
            <FontAwesomeIcon icon={faHouse} />
        </Link>
    )
}

export {HomeButton}