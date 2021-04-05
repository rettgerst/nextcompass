/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import { HTMLAttributes } from 'react';

import { Results } from 'types';

import CanvasCompass from './CanvasCompass';
import NoScript from './NoScript';
import YesScript from './YesScript';

interface CompassProps {
	results: Results;
}

export default function Compass({
	results,
	...transfer
}: CompassProps & Omit<HTMLAttributes<HTMLImageElement>, 'results'>) {
	return (
		<>
			<YesScript>
				<CanvasCompass {...transfer} results={results} />
			</YesScript>
			<NoScript>
				<img
					{...transfer}
					alt="Your political compass"
					src={`/api/compass.png?${new URLSearchParams(
						results as any
					).toString()}`}
				/>
			</NoScript>
		</>
	);
}
