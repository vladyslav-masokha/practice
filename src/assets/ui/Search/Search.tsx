import React, { useState, useEffect } from 'react';
import { useFetchData } from '../../globalLogics/useFetchData.ts'
import { IFilm } from '../../interfaces/IFilm.ts'
import styles from './Search.module.scss';
import {Link} from "react-router-dom";
import {HelpMessage} from "../../components/HelpMessage/HelpMessage.tsx"; // Імпортуємо файл стилів

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredFilms, setFilteredFilms] = useState<IFilm[]>([]);
    const filmsDBUrl = 'http://localhost:3001/api/films/';
    const { data, loading, error } = useFetchData<IFilm>(filmsDBUrl);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            const filtered = data.filter((film) =>
                film.title.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            setFilteredFilms(filtered);
        }
    }, [searchTerm, data]);

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
    };

    if (loading) return <HelpMessage message={'Завантаження..'} status='loading' />;
    if (error) return <HelpMessage message={error} status='loading' />;
    if (!data) return <div>Дані не знайдено!</div>;

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