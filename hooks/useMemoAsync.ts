import { DependencyList, useMemo } from 'react';

import usePromise from './use-promise';

export default function useMemoAsync<T>(
	fn: () => Promise<T>,
	deps: DependencyList
) {
	const promise = useMemo(fn, [fn, ...deps]);

	return usePromise(promise);
}
