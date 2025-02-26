import { Link } from "react-router-dom";
import styles from './HomeButton.module.scss'
import { House as HouseIcon } from "@mui/icons-material";

const HomeButton = () => {
    return (
        <Link to='/' className={styles.link}>
            <HouseIcon />
        </Link>
    )
}

export {HomeButton}