import { HTMLAttributes } from 'react';

import drawCompassOnCanvas from 'functions/drawCompassOnCanvas';
import { Results } from 'types';
import useMemoAsync from 'hooks/useMemoAsync';

interface CanvasCompassProps {
	results: Results;
}
/** Browser-only version of Compass component. */
export default function CanvasCompass({
	results,
	...transfer
}: CanvasCompassProps & Omit<HTMLAttributes<HTMLImageElement>, 'results'>) {
	const { data: src = '' } = useMemoAsync(async () => {
		const canvas = document.createElement('canvas');

		canvas.width = 1850;
		canvas.height = 1600;

		const ctx = canvas.getContext('2d');

		if (!ctx) return;

		await drawCompassOnCanvas(ctx, results);

		return canvas.toDataURL();
	}, [results]);

	// eslint-disable-next-line @next/next/no-img-element
	return <img alt="Your political compass" {...transfer} src={src} />;
}
