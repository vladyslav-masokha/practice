import { useEffect, useState } from 'react'
import { Footer } from '../../ui/footer/Footer'
import { useFetchData } from '../../globalLogics/useFetchData.ts'
import styles from './HomePage.module.scss'
import { HeaderTitle } from "../../ui/HeaderTitile/HeaderTitle.tsx";
import { FilmsCards } from "../../components/FilmCards/FilmCards.tsx";
import { Filter } from "../../components/Filter/Filter.tsx";
import { Ad } from "../../components/Ad/Ad";
import { IFilm } from "../../interfaces/IFilm.ts";

const HomePage = () => {
	const [films, setFilms] = useState<IFilm[]>([])
	const [filteredProducts, setFilteredProducts] = useState<IFilm[]>([])
	const animalsData = './films.json'
	const data: IFilm[] = useFetchData(animalsData)

	useEffect(() => {
		setFilms(data)
		setFilteredProducts(data)
	}, [data])

	return (
		<>
			<HeaderTitle />

			<div className={styles.home}>
				<div className='wrapper'>
					<div className={styles.homeBody}>
						<div className={styles.aside}>
							<Filter
								films={films}
								setFilteredProducts={setFilteredProducts}
							/>

							<Ad />
						</div>
						<FilmsCards films={filteredProducts} />
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export { HomePage }
