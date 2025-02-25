import { useParams } from 'react-router-dom'
import { useTitleLogic } from '../../globalLogics/useTitleLogic.tsx'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import { useFetchData } from '../../globalLogics/useFetchData.ts'
import styles from './FilmPage.module.scss'
import { IFilm } from "../../interfaces/IFilm.ts";
import {ErrorPage} from "../errorPage/ErrorPage.tsx";

const FilmPage = () => {
	const { id } = useParams<{ id: string }>()
	const filmsData = './films.json'

	const data: IFilm[] = useFetchData(filmsData)
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
									<p className={styles.ageRating}>Вікове
										обмеження: {film.ageRating || "Немає даних"}</p>
									<p className={styles.premiere}>Прем'єра: {film.premiere.USA || "Немає даних"} (США), {film.premiere.UKR || "Немає даних"} (Україна)</p>
									<p className={styles.genre}>Жанр: {film.genre.join(", ")}</p>
								</div>
							</div>

							<p>{film.description}</p>

							<iframe width="560" height="315"
									src={film.link}
									title="YouTube video player" frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen></iframe>
						</div>
					) : (
						<ErrorPage />
					)}
				</div>
			</div>

			<Footer/>
		</>
	)
}

export {FilmPage}
