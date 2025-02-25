import styles from './Ad.module.scss'
import { useFetchData } from "../../globalLogics/useFetchData.ts";
import { IGIFS } from "../../interfaces/IGIFS.ts";

const Ad = () => {
    const aboutData = '/gifs.json';
    const data: IGIFS[] = useFetchData(aboutData)

    return (
        <div className={styles.ad}>
            {data.map((item) => (<img key={item.gif} src={item.gif} alt="advertisment"/>))}
        </div>
    )
}

export { Ad }