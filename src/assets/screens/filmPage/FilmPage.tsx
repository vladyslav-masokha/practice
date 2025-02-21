import { useParams } from 'react-router-dom'
import { useTitleLogic } from '../../logics/titleLogic.tsx'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import { useFetchDataFilms } from '../../logics/useFetchDataFilms.ts'
import styles from './FilmPage.module.scss'

const FilmPage = () => {
	const { id } = useParams<{ id: string }>()
	const filmsData = './films.json'

	const data = useFetchDataFilms(filmsData)
	const film = data.find(film => film.imdbID === id)

	useTitleLogic({ namePage: film ? film.title : '', id: +id })

	return (
		<>
			<Header />

			<div className={styles.filmPage}>
				<div className='wrapper'>
					{film ? (
						<div className={styles.film}>
							<div className={styles.filmBody}>
								<img
									className={styles.cardImage}
									src={film.img}
									alt={film.title}
									loading='lazy'
								/>

								<div className={styles.filmInfo}>
									<h3 className={styles.title}>{film.title}</h3>
									<p className={styles.year}>Рік випуску: {film.year || "Немає даних"}</p>
									<p className={styles.country}>Країна: {film.country || "Немає даних"}</p>
									<p className={styles.duration}>Тривалість: {film.duration || "Немає даних"}</p>
									<p className={styles.ageRating}>Вікове обмеження: {film.ageRating || "Немає даних"}</p>
									<p className={styles.premiere}>Прем'єра: {film.premiere.USA || "Немає даних"} (США), {film.premiere.UKR || "Немає даних"} (Україна)</p>
									<p className={styles.genre}>Жанр: {film.genre.join(", ")}</p>
								</div>
							</div>

							<p>{film.description}</p>

							<iframe name="playerfr" id="playerfr" loading="lazy" scrolling="no"
									src={film.link} frameBorder="0" width="100%" height="500px"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"></iframe>
						</div>
					) : (
						<p>
							Фільм з id <b>{id}</b> не знайдено
						</p>
					)}
				</div>
			</div>

			<Footer/>
		</>
	)
}

export {FilmPage}
