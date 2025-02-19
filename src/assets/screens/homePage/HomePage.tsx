import { useEffect, useState } from 'react'
import { Film } from '../../components/IFilm.ts'
import { Footer } from '../../ui/footer/Footer'
import { useFetchData } from '../../useFetchData'
import styles from './HomePage.module.scss'
import {HeaderTitle} from "../../ui/HeaderTitile/HeaderTitle.tsx";
import {FilmsCards} from "../../components/FilmCards/FilmsCard.tsx";
import {Filter} from "../../components/Filter/Filter.tsx";

const HomePage = () => {
	const [films, setFilms] = useState<Film[]>([])
	const [filteredProducts, setFilteredProducts] = useState<Film[]>([])
	const animalsData = './films.json'
	const data = useFetchData(animalsData)

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
						<Filter
							films={films}
							setFilteredProducts={setFilteredProducts}
						/>
						<FilmsCards films={filteredProducts} />
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export { HomePage }
