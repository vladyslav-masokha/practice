import React from "react";
import { Film } from '../../interfaces/IFilm.ts'
import { FilmCard } from './components/FilmCard.tsx'
import styles from './FilmCards.module.scss'

const FilmsCards: React.FC<{ films: Film[] }> = ({ films }) => {
	return (
		<div className={styles.cards}>
			{films.length > 0 && <FilmCard films={films} />}
		</div>
	)
}

export { FilmsCards }
