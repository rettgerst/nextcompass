import { AppProps } from 'next/app';

import {Analytics} from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next';

import 'styles/style.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return <>
		<Component {...pageProps} />
		<Analytics />
		<SpeedInsights />
	</>;
}

export default MyApp;
