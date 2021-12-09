import { NextApiRequest, NextApiResponse } from 'next';

import { createCanvas, registerFont } from 'canvas';

import drawResultsOnCanvas from 'functions/drawCompassOnCanvas';
import { Results } from 'types';
import tmpFont from 'functions/tmpFont';

const installFontP = tmpFont({ name: 'open-sans', format: 'woff' });

// eslint-disable-next-line import/no-webpack-loader-syntax
const compassImageUri: string = require('url-loader!public/compass.png')
	.default;

function parseQuery(query: Record<string, string | string[]>): Results {
	const { auth, prog, right } = query;

	if (typeof auth !== 'string') throw new Error('Invalid parameter');
	else if (typeof prog !== 'string') throw new Error('Invalid parameter');
	else if (typeof right !== 'string') throw new Error('Invalid parameter');

	return {
		auth: parseFloat(auth),
		prog: parseFloat(prog),
		right: parseFloat(right)
	};
}

export default async function drawCompass(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const results = parseQuery(req.query);

	const font = await installFontP;

	registerFont(font.path, { family: 'Open Sans' });

	const canvas = createCanvas(1850, 1600);
	const ctx = canvas.getContext('2d');

	await drawResultsOnCanvas(ctx, results, compassImageUri, 'Open Sans');

	res.writeHead(200, {
		'Content-Type': 'image/png'
	});

	canvas.createPNGStream().pipe(res);
}
