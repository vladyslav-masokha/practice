import { Dispatch, SetStateAction, useCallback } from 'react'
import { Film } from '../../../interfaces/IFilm.ts'

const useFilterLogic = (
	films: Film[],
	setFilteredProducts: Dispatch<SetStateAction<Film[]>>,
	yearFilter: [number, number] | null,
	genreFilter: string | null,
	ageFilter: string | null
) => {
	return useCallback(() => {
		if (films.length === 0) return

		let filteredProducts = films

		if (yearFilter !== null) {
			filteredProducts = filteredProducts.filter(film => {
				return film.year >= yearFilter[0] && film.year <= yearFilter[1]
			})
		}

		if (genreFilter !== null) {
			filteredProducts = filteredProducts.filter(product => {
				return product.genre.includes(genreFilter);
			});
		}

		if (ageFilter !== null) {
			filteredProducts = filteredProducts.filter(product => {
				return product.ageRating === ageFilter;
			});
		}

		setFilteredProducts(filteredProducts)
	}, [films, setFilteredProducts, yearFilter, genreFilter, ageFilter ])
}

export { useFilterLogic }
