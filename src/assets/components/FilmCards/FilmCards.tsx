import React from "react";
import { IFilm } from '../../interfaces/IFilm.ts'
import { FilmCard } from './components/FilmCard.tsx'
import styles from './FilmCards.module.scss'

const FilmsCards: React.FC<{ data: IFilm[] }> = ({ data }) => {
	return (
		<div className={styles.cards}>
			{data.length > 0 && <FilmCard data={data} />}
		</div>
	)
}

export { FilmsCards }
