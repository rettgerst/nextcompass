import { CSSProperties } from 'react';

import { Axes } from 'types';

function linearGradient(
	startColor: string,
	endColor: string,
	directionDeg: number
) {
	return `linear-gradient(${directionDeg}deg, ${startColor} 0%, ${startColor} 50%, ${endColor} 50%, ${endColor} 100%);`;
}

interface PosDesc {
	label: string;
	css: CSSProperties;
}

const grill: PosDesc = {
	label: 'Centrist',
	css: { backgroundColor: 'lightgrey' }
};

const red = '#f55';
const blue = '#55f';
const green = '#5f5';
const yellow = '#ff5';

const auth: PosDesc = {
	label: 'Authoritarian',
	css: {
		background: linearGradient(red, blue, 90)
	}
};

const lib: PosDesc = {
	label: 'Libertarian',
	css: {
		background: linearGradient(green, yellow, 90)
	}
};

const left: PosDesc = {
	label: 'Left',
	css: {
		background: linearGradient(red, green, 180)
	}
};

const right: PosDesc = {
	label: 'Right',
	css: {
		background: linearGradient(blue, yellow, 180)
	}
};

const prog: PosDesc = {
	label: 'Progressive',
	css: {
		backgroundColor: green
	}
};

const con: PosDesc = {
	label: 'Conservative',
	css: {
		backgroundColor: blue
	}
};

export default function getPositionDescription(
	axis: Axes,
	strength: number
): PosDesc {
	if (axis === Axes.Auth) {
		if (strength === 0) return grill;
		else if (strength > 0) return auth;
		else if (strength < 0) return lib;
	} else if (axis === Axes.Right) {
		if (strength === 0) return grill;
		else if (strength < 0) return left;
		else if (strength > 0) return right;
	} else if (axis === Axes.Prog) {
		if (strength === 0) return grill;
		else if (strength > 0) return prog;
		else if (strength < 0) return con;
	}

	throw Error(`Cannot descrbe ${axis},${strength}`);
}
