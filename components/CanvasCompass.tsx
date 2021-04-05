import { HTMLAttributes, useEffect, useRef } from 'react';

import drawCompassOnCanvas from 'functions/drawCompassOnCanvas';
import { Results } from 'types';

interface CanvasCompassProps {
	results: Results;
}
/** Browser-only version of Compass component. */
export default function CanvasCompass({
	results,
	...transfer
}: CanvasCompassProps & Omit<HTMLAttributes<HTMLCanvasElement>, 'results'>) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const { current } = canvasRef;
		if (!current) return;

		const ctx = current.getContext('2d');

		if (!ctx) return;

		void drawCompassOnCanvas(ctx, results, 'sans-serif');
	}, [results]);

	return <canvas {...transfer} height={1600} ref={canvasRef} width={1850} />;
}
