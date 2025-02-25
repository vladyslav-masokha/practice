import { FilterAlt } from '@mui/icons-material'
import React, { useState } from 'react'
import styles from './Filter.module.scss'
import { useFilterLogic } from './filterLogic/useFilterLogic.ts'
import { FilterBody } from "./components/FilterBody.tsx";
import { FilterProps } from "./props/FilterProps.ts";
import { availableGenres } from "./availables/availableGenres.ts";
import { availableAgeRatings } from "./availables/availableAgeRatings.ts";

const Filter: React.FC<FilterProps> = ({ films, setFilteredProducts }) => {
	const [openFilter, setOpenFilter] = useState(false)
	const [yearFilter, setYearFilter] = useState<[number, number] | null>(null)
	const [genreFilter, setGenreFilter] = useState<string | null>(null);
	const [ageFilter, setAgeFilter] = useState<string | null>(null);

	const applyFilters = useFilterLogic(
		films, setFilteredProducts, yearFilter,
		genreFilter, ageFilter
	)

	const openFilterFunction = () => setOpenFilter(!openFilter)
	const logicOpenFilter = openFilter
		? `${styles.filterBlock} ${styles.visible}`
		: `${styles.filterBlock}`

	return (
		<div className={styles.filter}>
			<div className={styles.filterBody}>
				<button className={styles.filterBtn} onClick={openFilterFunction}>
					<FilterAlt />
					Фільтр
				</button>

				<FilterBody
					logicOpenFilter={logicOpenFilter}
					openFilterFunction={openFilterFunction}
					setYearFilter={setYearFilter}
					setGenreFilter={setGenreFilter}
					setAgeFilter={setAgeFilter}
					applyFilters={applyFilters}
					availableGenres={availableGenres}
					availableAgeRatings={availableAgeRatings}
				/>
			</div>
		</div>
	)
}

export { Filter }