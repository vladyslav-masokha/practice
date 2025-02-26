import { useState, useEffect } from 'react';

const useFetchData = <T>(url: string): { data: T | null; loading: boolean; error: string | null } => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError('Помилка при отриманні даних: ' + err.message);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
};

export { useFetchData };