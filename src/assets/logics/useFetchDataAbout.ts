import { useEffect, useState } from 'react'
import {IAbout} from "../components/IAbout.ts";

const useFetchDataAbout = (url: string) => {
	const [data, setData] = useState<IAbout[]>([])
	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setData(data))
			.catch(error => console.error('Помилка отримання данних:', error));
	}, [url]);
	return data;
}

export { useFetchDataAbout }
