import { useRouter } from 'next/router';

import { useMemo } from 'react';

import useAnswers from './useAnswers';

import questions from 'questions.json';

export default function useQuestions() {
	const router = useRouter();
	const answers = useAnswers();
	const { question_id } = router.query;

	if (typeof question_id !== 'string') throw new Error('Invalid question_id');

	const question = useMemo(() => {
		const q = questions.find(q => q.id === +question_id);
		if (!q) throw new Error(`Could not find question ${question_id}`);
		else return q;
	}, [question_id]);

	const lastQuestion = useMemo(
		() => +question_id === Math.max(...questions.map(q => q.id)),
		[question_id]
	);

	const questionCount = useMemo(() => questions.length, []);

	return { question, answers, lastQuestion, questionCount };
}
