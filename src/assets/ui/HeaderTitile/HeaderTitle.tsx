import styles from './HeaderTitle.module.scss'
import {Logo} from "../Header/logo/Logo.tsx";
import {Navigation} from "../Header/Navigation/Navigation.tsx";
import {Search} from "../../components/Search/Search.tsx";

const HeaderTitle = () => {
    return (
        <header className={styles.headerTitle}>
            <div className='wrapper'>
                <div className={styles.headerTitleBody}>
                    <Logo />
                    <Navigation />
                </div>

                <h1>«Відкрийте для себе світ кіно - дивіться найкращі фільми та серіали в будь-який час!».</h1>

                <Search />
            </div>
        </header>
    )
}

export { HeaderTitle }
