import { useEffect, useState } from 'react'
import { Film } from '../components/IFilm.ts'

const useFetchDataFilms = (url: string) => {
	const [data, setData] = useState<Film[]>([])
	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setData(data))
			.catch(error => console.error('Помилка отримання данних:', error))
	}, [url])
	return data
}

export { useFetchDataFilms }
