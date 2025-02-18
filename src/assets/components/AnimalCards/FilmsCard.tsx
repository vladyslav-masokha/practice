import { Film } from '../IFilm.ts'
import { FilmCard } from './FilmCard.tsx'
import styles from './filmCard.module.scss'

const FilmsCards: React.FC<{ films: Film[] }> = ({ films }) => {
	return (
		<div className={styles.cards}>
			{films.length > 0 && <FilmCard films={films} />}
		</div>
	)
}

export { FilmsCards }
