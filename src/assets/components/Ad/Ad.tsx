import styles from './Ad.module.scss';
import { useFetchData } from '../../globalLogics/useFetchData.ts';
import { IGIFS } from '../../interfaces/IGIFS.ts';

const Ad = () => {
    const aboutData = '/gifs.json';
    const { data, loading, error } = useFetchData<IGIFS[]>(aboutData);

    if (loading) return <div>Завантаження...</div>;
    if (error) return <div>{error}</div>;
    if (!data) return <div>Дані не знайдено!</div>;

    return (
        <div className={styles.ad}>
            {data.map((item) => (
                <img key={item.gif} src={item.gif} alt="advertisment" />
            ))}
        </div>
    );
};

export { Ad };