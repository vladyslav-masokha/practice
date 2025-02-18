import { useEffect, useState } from 'react'
import { Film } from './components/IFilm.ts'

const useFetchData = (url: string) => {
	const [data, setData] = useState<Film[]>([])
	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setData(data))
			.catch(error => console.error('Error fetching data:', error))
	}, [url])
	return data
}

export { useFetchData }
