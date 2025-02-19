import React, { useState, useEffect } from 'react';
import {Film} from '../IFilm'
import { v4 as uuidv4 } from 'uuid';
import styles from './Search.module.scss';
import {Link} from "react-router-dom";

interface OMDbMovie {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
}

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Film[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const searchMovies = async () => {
            setError(null); // Очищаємо помилку перед новим запитом
            if (searchTerm) {
                try {
                    const response = await fetch(
                        `https://www.omdbapi.com/?s=${searchTerm}&apikey=9c12760d`
                    );

                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    const data = await response.json();

                    if (data.Search) {
                        setSearchResults(
                            data.Search.map((movie: OMDbMovie) => ({
                                title: movie.Title,
                                year: movie.Year,
                                poster: movie.Poster,
                            }))
                        );
                    } else {
                        setSearchResults([]);
                    }
                } catch (err: any) {
                    setError(err.message);
                    console.error("Помилка пошуку:", err);
                    setSearchResults([]);
                }
            } else {
                setSearchResults([]);
            }
        };

        searchMovies();
    }, [searchTerm]);

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

            <ul className={styles['search-results']}>
                {searchResults.map((movie) => (
                    <li key={uuidv4()} className={styles['search-item']}>
                        <Link to={`/film/${movie.imdbID}`}>
                            <h3 className={styles['search-title']}>{movie.title}</h3>
                            <p className={styles['search-year']}>{movie.year}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export {Search}