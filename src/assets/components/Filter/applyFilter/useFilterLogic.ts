import { Dispatch, SetStateAction, useCallback } from 'react'
import { Film } from '../../IFilm.ts'

const useFilterLogic = (
	films: Film[],
	setFilteredProducts: Dispatch<SetStateAction<Film[]>>,
	yearFilter: [number, number] | null
) => {
	const applyFilters = useCallback(() => {
		console.log(films.length)
		if (films.length === 0) return


		let filteredProducts = films

		if (yearFilter !== null) {
			filteredProducts = filteredProducts.filter(film => {
				return film.year >= yearFilter[0] && film.year <= yearFilter[1]
			})
		}
		setFilteredProducts(filteredProducts)
	}, [
		films,
		setFilteredProducts,
		yearFilter
	])

	return applyFilters
}

export { useFilterLogic }
