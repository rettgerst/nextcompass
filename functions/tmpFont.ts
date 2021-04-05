import fs from 'fs/promises';
import path from 'path';

import tmp from 'tmp-promise';

interface TmpFontArgs {
	name: string;
	subset?: string;
	weight?: number;
	style?: string;
	format?: string;
}

const fontsourceDir = path.resolve(process.cwd(), 'node_modules/@fontsource');

export default async function tmpFont({
	name,
	subset = 'latin',
	weight = 400,
	style = 'normal',
	format = 'woff2'
}: TmpFontArgs) {
	const filename = `${name}-${subset}-${weight}-${style}.${format}`;

	const source = path.resolve(fontsourceDir, name, 'files', filename);

	const destination = await tmp.file({ postfix: `.${format}` });

	await fs.copyFile(source, destination.path);

	return destination;
}
