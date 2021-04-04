/* eslint-disable react-perf/jsx-no-new-object-as-prop */

import React, { useMemo } from 'react';

import { UrlObject } from 'node:url';
import useQuestions from 'hooks/useQuestions';

import Button from './Button';

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
