import { useParams } from 'react-router-dom'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import { useFetchData } from '../../useFetchData'
import styles from './FilmPage.module.scss'

const FilmPage = () => {
	const { id } = useParams<{ id: string }>()
	const filmsData = './films.json'

	const data = useFetchData(filmsData)
	const film = data.find(film => film.imdbID === id)

	useTitleLogic({ namePage: film ? film.title : '', id: +id })

	return (
		<>
			<Header />

			<div className={styles.filmPage}>
				<div className='wrapper'>
					{film ? (
						<div className={styles.film}>
							<img
								className={styles.cardImage}
								src={film.img}
								alt={film.title}
								loading='lazy'
							/>

							<div className={styles.filmInfo}>
								<h3 className={styles.title}>{film.title}</h3>
							</div>

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
