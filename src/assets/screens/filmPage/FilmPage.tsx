import { useParams } from 'react-router-dom'
import { useTitleLogic } from '../../globalLogics/useTitleLogic.tsx'
import { Header } from '../../ui/Header/Header'
import { Footer } from '../../ui/footer/Footer'
import styles from './FilmPage.module.scss'
import {IFilm} from "../../interfaces/IFilm.ts";
import { useFetchData } from "../../globalLogics/useFetchData.ts";
import { HelpMessage } from "../../components/HelpMessage/HelpMessage.tsx";

const FilmPage = () => {
	const { id } = useParams<{ id: string }>();
	const filmsDBUrl = `http://localhost:3001/api/films/${id}`;
	const { data, loading, error } = useFetchData<IFilm>(filmsDBUrl);

	useTitleLogic({ namePage: data ? data.title : 'Помилка', id: id ? +id : null });

	if (loading) return <HelpMessage message={'Завантаження..'} status='loading' />;
	if (error) return <HelpMessage message={error} status='loading' />;
	if (!data) return <div>Дані не знайдено!</div>;

	return (
		<>
			<Header />

			<div className={styles.filmPage}>
				<div className='wrapper'>
					<div className={styles.film}>
						<div className={styles.filmBody}>
							<img
								className={styles.cardImage}
								src={data.img}
								alt={data.title}
								loading='lazy'
							/>

							<div className={styles.filmInfo}>
								<h3 className={styles.title}>{data.title}</h3>
								<p className={styles.year}>Рік випуску: {data.year || "Немає даних"}</p>
								<p className={styles.country}>Країна: {data.country || "Немає даних"}</p>
								<p className={styles.duration}>Тривалість: {data.duration || "Немає даних"}</p>
								<p className={styles.ageRating}>Вікове
									обмеження: {data.ageRating || "Немає даних"}</p>
								{data.premiere && data.premiere.length > 0 && (
									<div>
										<h3>Premieres:</h3>
										<ul>
											{data.premiere.map((p) => (
												<li key={p.country}>{p.country}: {p.date}</li>
											))}
										</ul>
									</div>
								)}
								{data.genre && data.genre.length > 0 && (
									<div>
										<h3>Genres:</h3>
										<ul>
											{data.genre.map((g) => (
												<li key={g}>{g}</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</div>

						<p>{data.description}</p>

						<iframe width="560" height="315"
								src={data.link}
								title="YouTube video player" frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen></iframe>
					</div>
				</div>
			</div>

			<Footer/>
		</>
	)
}

export {FilmPage}
