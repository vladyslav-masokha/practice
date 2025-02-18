import { Link } from 'react-router-dom'
import { Film } from '../IFilm.ts'
import styles from './filmCard.module.scss'

const FilmCard: React.FC<{ films: Film[] }> = ({ films }) => {
	return (
		<>
			{films.length > 0 ? (
				films.map(film => (
					<Link to={`/${film.id}`} className={styles.card} key={film.id}>
						<img
							className={styles.cardImage}
							src={film.image}
							alt={film.title}
							loading='lazy'
						/>

						<div className={styles.cardInfo}>
							<h3 className={styles.title}>{film.title}</h3>
						</div>
					</Link>
				))
			) : (
				<p className={styles.not_films}>Фільми не знайдені!</p>
			)}
		</>
	)
}

export { FilmCard }
