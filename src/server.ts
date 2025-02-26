import express from 'express';
import cors from 'cors';
import { getAllFilms, addFilmsFromJson, getFilmById, deleteFilmById, updateFilmById } from './db';
import { IFilm } from './assets/interfaces/IFilm';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/films', async (_req, res) => {
    try {
        const films = await getAllFilms();
        res.json(films);
    } catch (error) {
        console.error('Помилка під час отримання фільмів: ', error);
        res.status(500).json({ error: 'Помилка сервера!' });
    }
});

app.get('/api/films/:imdbID', async (req, res) => {
    try {
        const imdbID = req.params.imdbID;
        const film = await getFilmById(imdbID);

        if (film) res.json(film);
        else res.status(404).json({ error: 'Фільм не знайдено!' });
    } catch (error) {
        console.error('Помилка під час отримання фільмів: ', error);
        res.status(500).json({ error: 'Помилка сервера!' });
    }
});

app.post('/api/films', async (req, res) => {
    try {
        const films: IFilm[] = req.body.map((film: IFilm) => ({
            ...film,
            imdbID: film.imdbID || uuidv4()
        }));

        await addFilmsFromJson(films);
        res.status(201).json({ message: 'Фільми успішно додано!', films });
    } catch (error) {
        console.error('Помилка під час додавання фільмів:', error);
        res.status(500).json({ error: 'Помилка сервера!' });
    }
});

app.delete('/api/films/:imdbID', async (req, res) => {
    try {
        const imdbID = req.params.imdbID;
        await deleteFilmById(imdbID);
        res.status(200).json({ message: `Фильм с imdbID ${imdbID} успешно удален` });
    } catch (error) {
        console.error('Ошибка при удалении фильма:', error);
        res.status(500).json({ error: 'Помилка сервера!' });
    }
});

app.put('/api/films/:imdbID', async (req, res) => {
    try {
        const imdbID = req.params.imdbID;
        const filmData: Partial<IFilm> = req.body;
        await updateFilmById(imdbID, filmData);
        res.status(200).json({ message: `Фільм з ID ${imdbID} успішно оновлено` });
    } catch (error) {
        console.error('Помилка під час оновлення фільму:', error);
        res.status(500).json({ error: 'Помилка сервера' });
    }
});

app.listen(PORT, () => console.log(`Сервер запущено на порту ${PORT}`));