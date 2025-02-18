import {Link} from "react-router-dom";
import {Typography} from "@mui/material";
import styles from '../Footer.module.scss'

const Contacts = () => {
    return (
        <Typography variant='body2' color='text.secondary' align='center'>
            <Link to='/about' className={styles.link}>
                <span>{">"}</span> Контакти <span>{"<"}</span>
            </Link>
        </Typography>
    )
}

export { Contacts }
