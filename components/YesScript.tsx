import { ReactElement, useEffect, useState } from 'react';

/** Opposite of NoScript! */
export default function YesScript({ children }: { children: ReactElement }) {
	const [jsEnabled, setJsEnabled] = useState(false);

	// next.js ignores useEffect hooks, meaning this code will only be executed in the browser
	useEffect(() => setJsEnabled(true), []);

	if (!jsEnabled) return null;
	else return children;
}
