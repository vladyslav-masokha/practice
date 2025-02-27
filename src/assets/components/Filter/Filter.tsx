import { FilterAlt } from '@mui/icons-material';
import React, { useState } from 'react';
import styles from './Filter.module.scss';
import { useFilterLogic } from './filterLogic/useFilterLogic.ts';
import { FilterBody } from './components/FilterBody.tsx';
import { FilterProps } from './props/FilterProps.ts';
import { availableGenres } from './availables/availableGenres.ts';
import { availableAgeRatings } from './availables/availableAgeRatings.ts';

const Filter: React.FC<FilterProps> = ({ data, setFilteredProducts }) => {
	const [openFilter, setOpenFilter] = useState(false);
	const [yearFilter, setYearFilter] = useState<[number, number] | null>(null);
	const [genreFilter, setGenreFilter] = useState<string | null>(null);
	const [ageFilter, setAgeFilter] = useState<string | null>(null);
	// const [searchQuery, setSearchQuery] = useState<string>(''); // Додано стан для пошуку
	// const [sortBy, setSortBy] = useState<'popularity' | 'releaseDate' | 'rating' | null>(null); // Додано стан для сортування

	const applyFilters = useFilterLogic(
		data,
		setFilteredProducts,
		yearFilter,
		genreFilter,
		ageFilter,
		// searchQuery, // Передаємо пошуковий запит
		// sortBy // Передаємо критерій сортування
	);

	const openFilterFunction = () => setOpenFilter(!openFilter);
	const logicOpenFilter = openFilter
		? `${styles.filterBlock} ${styles.visible}`
		: `${styles.filterBlock}`;

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
					// searchQuery={searchQuery} // Передаємо пошуковий запит в FilterBody
					// setSearchQuery={setSearchQuery} // Передаємо функцію для зміни пошукового запиту
					// sortBy={sortBy} // Передаємо критерій сортування
					// setSortBy={setSortBy} // Передаємо функцію для зміни критерію сортування
				/>
			</div>
		</div>
	);
};

export { Filter };