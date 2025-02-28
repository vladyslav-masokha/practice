import sqlite3 from 'sqlite3';
import { IFilm } from './assets/interfaces/IFilm';

const db = new sqlite3.Database('films.db', (err) => {
    if (err) console.error('Помилка підключення до бази даних SQLite:', err);
    else console.log('Успішне підключення до бази даних SQLite');
});

export const createFilmsTable = (): void => {
    const request = `
        CREATE TABLE IF NOT EXISTS films (
            title TEXT NOT NULL,
            imdbID TEXT PRIMARY KEY,
            year INTEGER,
            country TEXT,
            duration TEXT,
            ageRating TEXT,
            premiere TEXT,
            genre TEXT,
            img TEXT,
            description TEXT,
            link TEXT,
            actors TEXT,
            directors TEXT,
            rating REAL
        )
    `;
    db.run(request, (err) => {
        if (err) console.error('Помилка під час створення таблиці фільмів:', err);
    });
};

export const getAllFilms = (): Promise<IFilm[]> => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM films', [], (err, rows: any[]) => {
            if (err) {
                reject(err);
                return;
            }
            const films: IFilm[] = rows.map(row => ({
                ...row,
                premiere: row.premiere ? JSON.parse(row.premiere) : null,
                genre: row.genre ? JSON.parse(row.genre) : null
            }));
            resolve(films);
        });
    });
};

export const getFilmById = (imdbID: string): Promise<IFilm | null> => {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM films WHERE imdbID = ?', [imdbID], (err, row: any) => {
            if (err) {
                reject(err);
                return;
            }
            if (!row) {
                resolve(null);
                return;
            }
            const film: IFilm = {
                ...row,
                premiere: row.premiere ? JSON.parse(row.premiere) : null,
                genre: row.genre ? JSON.parse(row.genre) : null
            };
            resolve(film);
        });
    });
};

export const addFilmsFromJson = (films: IFilm[]): Promise<void> => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            const stmt = db.prepare(`
                INSERT OR IGNORE INTO films 
                (imdbID, title, year, country, duration, ageRating, premiere, genre, description, img, link, actors, directors, rating)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `);

            films.forEach(film => {
                const imdbID = film.imdbID
                stmt.run([
                    imdbID,
                    film.title,
                    film.year,
                    film.country,
                    film.duration,
                    film.ageRating,
                    JSON.stringify(film.premiere),
                    JSON.stringify(film.genre),
                    film.description,
                    film.img,
                    film.link,
                    film.actors,
                    JSON.stringify(film.directors),
                    film.rating
                ]);
            });

            stmt.finalize((err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    });
};

export const deleteFilmById = (imdbID: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM films WHERE imdbID = ?', [imdbID], (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
};

export const updateFilmById = (imdbID: string, film: Partial<IFilm>): Promise<void> => {
    return new Promise((resolve, reject) => {
        const fields = Object.keys(film)
            .map(key => `${key} = ?`)
            .join(', ');
        const values = Object.values(film).map(value =>
            typeof value === 'object' && value !== null ? JSON.stringify(value) : value
        );

        const query = `UPDATE films SET ${fields} WHERE imdbID = ?`;
        db.run(query, [...values, imdbID], (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
};

export const closeDb = (): void => {
    db.close((err) => {
        if (err) {
            console.error('Помилка під час закриття бази даних:', err);
        }
    });
};

createFilmsTable();
export { db };