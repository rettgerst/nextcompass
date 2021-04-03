export enum Axes {
	Right = 'right',
	Auth = 'auth',
	Prog = 'prog'
}

export interface Question {
	id: number;
	question: string;
	effects: Record<Axes, number>;
}

export type Answers = {
	[qid: number]: number;
};
