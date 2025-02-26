interface UseFetchDataProps<T> {
    url: string;
    initialData?: T[];
    onSuccess?: (data: T[]) => void;
    onError?: (error: Error) => void;
    mapData?: (data: any) => T[];
}

export type { UseFetchDataProps };