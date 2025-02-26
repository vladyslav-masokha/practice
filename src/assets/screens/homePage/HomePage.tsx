import { useState } from 'react'
import { Footer } from '../../ui/footer/Footer'
import styles from './HomePage.module.scss'
import { HeaderTitle } from "../../ui/HeaderTitile/HeaderTitle.tsx";
import { FilmsCards } from "../../components/FilmCards/FilmCards.tsx";
import { Filter } from "../../components/Filter/Filter.tsx";
import { Ad } from "../../components/Ad/Ad";
import { IFilm } from "../../interfaces/IFilm.ts";
import { useFetchData } from "../../globalLogics/useFetchData.ts";
import { HelpMessage } from "../../components/HelpMessage/HelpMessage.tsx";

const HomePage = () => {
	const filmsDBUrl = 'http://localhost:3001/api/films';
	const { data, loading, error } = useFetchData<IFilm[]>(filmsDBUrl);

	const [filteredProducts, setFilteredProducts] = useState<IFilm[]>([])

	if (loading) return <HelpMessage message={'Завантаження..'} status='loading' />;
	if (error) return <HelpMessage message={error} status='loading' />;
	if (!data) return <div>Дані не знайдено!</div>;

	return (
		<>
			<HeaderTitle />

			<div className={styles.home}>
				<div className='wrapper'>
					<div className={styles.homeBody}>
						<div className={styles.aside}>
							<Filter
								data={data}
								setFilteredProducts={setFilteredProducts}
							/>

							<Ad />
						</div>
						<FilmsCards data={filteredProducts} />
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export { HomePage };