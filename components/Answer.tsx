import { UrlObject } from 'url';

import React, { useMemo } from 'react';

import Button from './Button';

import useQuestions from 'hooks/useQuestions';

interface AnswerButtonProps {
	text: string;
	strength: number;
	color: string;
}

export default function Answer({ text, strength, color }: AnswerButtonProps) {
	const { question, answers, lastQuestion } = useQuestions();

	const href: UrlObject = useMemo(
		() => ({
			pathname: lastQuestion ? '/results' : `/quiz/${question.id + 1}`,
			query: {
				answers: JSON.stringify({
					...answers,
					[question.id]: strength
				})
			}
		}),
		[lastQuestion, question.id, answers, strength]
	);

	return (
		<Button href={href} style={{ backgroundColor: color }}>
			{text}
		</Button>
	);
}
