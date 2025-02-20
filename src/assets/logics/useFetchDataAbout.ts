import { useEffect, useState } from 'react'

const useFetchDataAbout = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setData(data))
			.catch(error => console.error('Помилка отримання данних:', error));
	}, [url]);
	return data;
}

export { useFetchDataAbout }
