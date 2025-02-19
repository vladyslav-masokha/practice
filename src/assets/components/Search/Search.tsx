import React, { useState, useEffect } from 'react';
import { Film } from '../IFilm';
import { v4 as uuidv4 } from 'uuid';
import styles from './Search.module.scss'
import { Link } from "react-router-dom";

const FILMS_DATA_URL = '/films.json';

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Film[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [moviesData, setMoviesData] = useState<Film[]>([]);

    useEffect(() => {
        const loadMoviesData = async () => {
            try {
                const response = await fetch(FILMS_DATA_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMoviesData(data);
            } catch (error) {
                console.error("Помилка завантаження даних:", error);
                setError("Помилка завантаження даних");
            }
        };

        loadMoviesData();
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const filteredMovies = moviesData.filter(movie =>
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredMovies);
        } else {
            setSearchResults([]);
        }
    }, [searchTerm, moviesData]);

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Пошук фільму.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <ul className={styles.searchResults}>
                {searchResults.map((movie) => (
                    <li key={uuidv4()} className={styles.searchItem}>
                        <Link to={`/film/${movie.imdbID}`}>
                            <h3 className={styles.searchTitle}>{movie.title}</h3>
                            <p className={styles.searchYear}>{movie.year}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { Search };