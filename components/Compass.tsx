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
}: CompassProps &
	Omit<HTMLAttributes<HTMLCanvasElement | HTMLImageElement>, 'results'>) {
	return (
		<>
			<YesScript>
				<CanvasCompass {...transfer} results={results} />
			</YesScript>
			<NoScript>
				{!process.env.VERCEL ? (
					<div style={{ textAlign: 'center' }}>
						<p>
							Unfortunately I cannot show you a visual compass without
							JavaScript enabled due to an{' '}
							<a href="https://github.com/vercel/next.js/issues/8251">
								outstanding issue with Vercel.
							</a>
						</p>
						<p>Your raw scores are:</p>
						<p>
							Left/Right: {results.right}, Authoritarian/Libertarian:{' '}
							{results.auth}, Progressive/Conservative: {results.prog}.
						</p>
					</div>
				) : (
					<img
						{...transfer}
						alt="Your political compass"
						src={`/api/compass.png?${new URLSearchParams(
							results as any
						).toString()}`}
					/>
				)}
			</NoScript>
		</>
	);
}
