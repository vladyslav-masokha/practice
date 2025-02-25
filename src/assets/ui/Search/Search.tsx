import React, { useState, useEffect } from 'react';
import { useFetchData } from '../../globalLogics/useFetchData.ts'
import { IFilm } from '../../interfaces/IFilm.ts'
import styles from './Search.module.scss';
import {Link} from "react-router-dom"; // Імпортуємо файл стилів

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const films: IFilm[] = useFetchData('/films.json');
    const [filteredFilms, setFilteredFilms] = useState<IFilm[]>([]);

    useEffect(() => {
        if (films) {
            const filtered = films.filter((film: { title: string; }) =>
                film.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredFilms(filtered);
        }
    }, [searchTerm, films]);

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Пошук фільму..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={handleChange}
            />

            {filteredFilms.length > 0 && searchTerm !== "" ? (
                <ul className={styles.searchResults}>
                    {filteredFilms.map(film => (
                        <li key={film.imdbID} className={styles.searchResultsItem}>
                            <Link to={`/${film.imdbID}`}>
                                {film.title}
                                <span> ({film.year}) </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                searchTerm !== "" && <p className={styles.error}>Фільм не знайденно.</p>
            )}
        </div>
    );
};

export {Search};