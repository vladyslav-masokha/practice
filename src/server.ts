import express from 'express';
import cors from 'cors';
import { getAllFilms, addFilmsFromJson, getFilmById, deleteFilmById, updateFilmById } from './db';
import { IFilm } from './assets/interfaces/IFilm';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// GET /api/films
app.get('/api/films', async (_req, res) => {
    try {
        const films = await getAllFilms();
        res.json(films);
    } catch (error) {
        console.error('Ошибка при получении фильмов:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// GET /api/films/:imdbID
app.get('/api/films/:imdbID', async (req, res) => {
    try {
        const imdbID = req.params.imdbID;
        const film = await getFilmById(imdbID);
        if (film) {
            res.json(film);
        } else {
            res.status(404).json({ error: 'Фильм не найден' });
        }
    } catch (error) {
        console.error('Ошибка при получении фильма:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// POST /api/films
app.post('/api/films', async (req, res) => {
    console.log('req.body:', req.body); // Добавьте эту строку
    try {
        console.log('req.body:', req.body); // Добавьте эту строку
        const films: IFilm[] = req.body.map((film: IFilm) => ({
            ...film,
            imdbID: film.imdbID || uuidv4() // Генерируем imdbID
        }));
        await addFilmsFromJson(films);
        res.status(201).json({ message: 'Фильмы успешно добавлены', films });
    } catch (error) {
        console.error('Ошибка при добавлении фильмов:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// DELETE /api/films/:imdbID
app.delete('/api/films/:imdbID', async (req, res) => {
    try {
        const imdbID = req.params.imdbID;
        await deleteFilmById(imdbID);
        res.status(200).json({ message: `Фильм с imdbID ${imdbID} успешно удален` });
    } catch (error) {
        console.error('Ошибка при удалении фильма:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// PUT /api/films/:imdbID
app.put('/api/films/:imdbID', async (req, res) => {
    try {
        const imdbID = req.params.imdbID;
        const filmData: Partial<IFilm> = req.body;
        await updateFilmById(imdbID, filmData);
        res.status(200).json({ message: `Фильм с imdbID ${imdbID} успешно обновлен` });
    } catch (error) {
        console.error('Ошибка при обновлении фильма:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});