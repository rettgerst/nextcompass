import { useEffect, useState } from 'react';

export default function usePromise<T>(promise: Promise<T>) {
	const [data, setData] = useState<T>();
	const [error, setError] = useState();

	useEffect(() => void promise.then(setData, setError), [promise]);

	return { data, error };
}
