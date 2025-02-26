import React from 'react'
import { Link } from 'react-router-dom'
import { useTitleLogic } from '../../globalLogics/useTitleLogic.tsx'
import styles from './HelpMessage.module.scss'
import { HelpMessageProps } from "./props/HelpMessageProps.ts";

const HelpMessage: React.FC<HelpMessageProps> = ({ message, status }) => {
    useTitleLogic({ namePage: message, id: null })

    return (
        <div className={styles.helpMessagePage}>
            <div className='wrapper'>
                <h1 className={styles.helpMessage}>
                    {status === 'error' ?
                        <p className={styles.statusCode}>404</p> :
                        status === 'loading' ?
                        <p className={styles.statusCode}>202</p> :
                    null}
                    {message}
                </h1>
                <Link to='/' className={styles.homeLink}>
                    {'>'} Головна {'<'}
                </Link>
            </div>
        </div>
    )
}

export { HelpMessage }
