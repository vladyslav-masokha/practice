import { Close, FilterAlt } from '@mui/icons-material'
import { Dispatch, SetStateAction, useState } from 'react'
import { Film } from '../IFilm.ts'
import styles from './Filter.module.scss'
import { YearFilter } from './year/YearFilter.tsx'
import { ButtonApplyFilter } from './applyFilter/ButtonApplyFilter'
import { useFilterLogic } from './applyFilter/useFilterLogic'

interface FilterProps {
	films: Film[]
	setFilteredProducts: Dispatch<SetStateAction<Film[]>>
}

const Filter: React.FC<FilterProps> = ({ films, setFilteredProducts }) => {
	const [openFilter, setOpenFilter] = useState(false)
	const [yearFilter, setYearFilter] = useState<[number, number] | null>(null)

	const applyFilters = useFilterLogic(
		films,
		setFilteredProducts,
		yearFilter
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

				<div className={logicOpenFilter}>
					<button className={styles.closeFilter} onClick={openFilterFunction}>
						<Close />
					</button>

					<YearFilter setYearFilter={setYearFilter} applyFilters={applyFilters} />

					<ButtonApplyFilter
						applyFilters={applyFilters}
						openFilterFunction={openFilterFunction}
					/>
				</div>
			</div>
		</div>
	)
}

export { Filter }
