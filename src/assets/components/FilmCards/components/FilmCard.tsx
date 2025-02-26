import React from "react";
import { Link } from 'react-router-dom'
import { IFilm } from '../../../interfaces/IFilm.ts'
import styles from '../FilmCards.module.scss'
import { ErrorPage } from "../../../screens/errorPage/ErrorPage.tsx";

const FilmCard: React.FC<{ data: IFilm[] }> = ({ data }) => {
	return (
		<>
			{data.length > 0 ? (
				data.map(film => (
					<Link to={`/${film.imdbID}`} className={styles.card} key={film.imdbID}>
						<img
							className={styles.cardImage}
							src={film.img}
							alt={film.title}
							loading='lazy'
						/>

						<div className={styles.cardInfo}>
							<h3 className={styles.title}>{film.title}</h3>
							<p className={styles.year}>{film.year}</p>
						</div>
					</Link>
				))
			) : (
				<ErrorPage />
			)}
		</>
	)
}

export { FilmCard }
