import styles from './HeaderTitle.module.scss'
import {Logo} from "../Header/logo/Logo.tsx";
import {Navigation} from "../Header/Navigation/Navigation.tsx";

const HeaderTitle = () => {
    return (
        <header className={styles.headerTitle}>
            <div className={styles.bg}></div>
            <div className='wrapper'>
                <div className={styles.headerTitleBody}>
                    <Logo />
                    <Navigation />
                </div>

                <h1>«Відкрийте для себе світ кіно - дивіться найкращі фільми та серіали в будь-який час!».</h1>
            </div>
        </header>
    )
}

export { HeaderTitle }
