// filterLogic/useFilterLogic.ts
import React, {useCallback} from 'react';
import {IFilm} from "../../../interfaces/IFilm.ts";

export const useFilterLogic = (
	data: IFilm[],
	setFilteredProducts: React.Dispatch<React.SetStateAction<IFilm[]>>,
	yearFilter: [number, number] | null,
	genreFilter: string | null,
	ageFilter: string | null,
	// searchQuery: string,
	// sortBy: 'popularity' | 'releaseDate' | 'rating' | null
) => {
	return useCallback(() => {
		let filteredData = data;

		// Пошук
		// if (searchQuery) {
		// 	filteredData = filteredData.filter(
		// 		(item) =>
		// 			item.actors.some((actor) => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
		// 			item.directors.some((director) => director.toLowerCase().includes(searchQuery.toLowerCase()))
		// 	);
		// }

		// Фільтрація за жанром
		if (genreFilter) {
			filteredData = filteredData.filter((item) => item.genre.includes(genreFilter));
		}

		// Фільтрація за віком
		if (ageFilter) {
			filteredData = filteredData.filter((item) => item.ageRating === ageFilter);
		}

		// Сортування
		// if (sortBy) {
		// 	filteredData = [...filteredData].sort((a, b) => {
		// 		if (sortBy === 'popularity') {
		// 			return b.popularity - a.popularity;
		// 		} else if (sortBy === 'releaseDate') {
		// 			return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
		// 		} else if (sortBy === 'rating') {
		// 			return b.rating - a.rating;
		// 		}
		// 		return 0;
		// 	});
		// }

		setFilteredProducts(filteredData);
	}, [data, setFilteredProducts, yearFilter, genreFilter, ageFilter]);
};