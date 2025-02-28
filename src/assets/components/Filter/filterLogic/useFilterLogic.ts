import React, {useCallback} from 'react';
import { IFilm } from "../../../interfaces/IFilm.ts";

export const useFilterLogic = (
	data: IFilm[],
	setFilteredProducts: React.Dispatch<React.SetStateAction<IFilm[]>>,
	yearFilter: [number, number] | null,
	genreFilter: string | null,
	ageFilter: string | null,
) => {
	return useCallback(() => {
		let filteredData = data;

		if (genreFilter) {
			filteredData = filteredData.filter((item) => item.genre.includes(genreFilter));
		}

		if (ageFilter) {
			filteredData = filteredData.filter((item) => item.ageRating === ageFilter);
		}

		setFilteredProducts(filteredData);
	}, [data, setFilteredProducts, yearFilter, genreFilter, ageFilter]);
};