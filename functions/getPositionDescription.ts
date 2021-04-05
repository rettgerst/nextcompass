import { Axes } from 'types';

import styles from 'pages/Results.module.scss';

interface PosDesc {
	label: string;
	class: string;
}

const grill: PosDesc = {
	label: 'Centrist',
	class: styles.Centrist
};

const auth: PosDesc = {
	label: 'Authoritarian',
	class: styles.Auth
};

const lib: PosDesc = {
	label: 'Libertarian',
	class: styles.Lib
};

const left: PosDesc = {
	label: 'Left',
	class: styles.Left
};

const right: PosDesc = {
	label: 'Right',
	class: styles.Right
};

const prog: PosDesc = {
	label: 'Progressive',
	class: styles.Prog
};

const con: PosDesc = {
	label: 'Conservative',
	class: styles.Con
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
