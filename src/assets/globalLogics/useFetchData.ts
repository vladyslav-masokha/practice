import { useEffect, useState } from 'react'

const useFetchData = <T> (url: string) => {
    const [data, setData] = useState<T[]>([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error('Помилка отримання данних:', error));
    }, [url]);
    return data;
}

export { useFetchData }
