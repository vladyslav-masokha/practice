import { FilterAlt } from '@mui/icons-material'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Film } from '../IFilm.ts'
import styles from './Filter.module.scss'
import { useFilterLogic } from './applyFilter/useFilterLogic'
import {FilterBody} from "./FilterBody.tsx";

interface FilterProps {
	films: Film[]
	setFilteredProducts: Dispatch<SetStateAction<Film[]>>
}

const Filter: React.FC<FilterProps> = ({ films, setFilteredProducts }) => {
	const [openFilter, setOpenFilter] = useState(false)
	const [yearFilter, setYearFilter] = useState<[number, number] | null>(null)
	const [genreFilter, setGenreFilter] = useState<string | null>(null);

	const availableGenres = ["Фантастика", "Жахи", "Бойовик", "Пригоди", "Мелодрама"];

	const applyFilters = useFilterLogic(
		films,
		setFilteredProducts,
		yearFilter,
		genreFilter
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
					applyFilters={applyFilters}
					availableGenres={availableGenres}
				/>
			</div>
		</div>
	)
}

export { Filter }
