/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import Link from 'next/link';

import { useMemo } from 'react';

import { UrlObject } from 'node:url';
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
		<Link href={href}>
			<button
				className="button"
				style={{ backgroundColor: color }}
				type="button"
			>
				{text}
			</button>
		</Link>
	);
}
