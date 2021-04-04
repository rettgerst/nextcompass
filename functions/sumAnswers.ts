/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Answers, Results } from 'types';
import questions from 'questions.json';

export default function sumAnswers(answers: Answers): Results {
	const right = questions
		.filter(q => 'right' in q.effects)
		.reduce((sum, q) => sum + answers[q.id] * q.effects.right!, 0);

	const auth = questions
		.filter(q => 'auth' in q.effects)
		.reduce((sum, q) => sum + answers[q.id] * q.effects.auth!, 0);

	const prog = questions
		.filter(q => 'prog' in q.effects)
		.reduce((sum, q) => sum + answers[q.id] * q.effects.prog!, 0);

	return { right, auth, prog };
}
