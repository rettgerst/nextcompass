/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import Link from 'next/link';

import { useMemo } from 'react';

import useAnswers from 'hooks/useAnswers';
import questions from 'questions.json';
import Button from 'components/Button';

export default function Results() {
	const answers = useAnswers();

	const sum = useMemo(() => {
		const auth = questions
			.filter(q => 'auth' in q.effects)
			.reduce((sum, q) => sum + answers[q.id] * q.effects.auth!, 0);

		const prog = questions
			.filter(q => 'prog' in q.effects)
			.reduce((sum, q) => sum + answers[q.id] * q.effects.prog!, 0);

		const right = questions
			.filter(q => 'right' in q.effects)
			.reduce((sum, q) => sum + answers[q.id] * q.effects.right!, 0);

		return { auth, prog, right };
	}, [answers]);

	return (
		<>
			<h1 className="title">NextCompass</h1>
			<hr />
			<h1 className="title">Results</h1>
			<p style={{ textAlign: 'center' }}>
				(Compass drawing is not implemented yet!)
			</p>

			<table style={{ margin: 'auto' }}>
				<tr>
					<td>Authoritarianism</td>
					<td>{sum.auth}</td>
				</tr>
				<tr>
					<td>Progressivism</td>
					<td>{sum.prog}</td>
				</tr>
				<tr>
					<td>Left-Right</td>
					<td>{sum.right}</td>
				</tr>
			</table>

			<table style={{ margin: 'auto' }}>
				<thead>
					<tr>
						<th>Question</th>
						<th>Answer</th>
						<th>Orientation</th>
					</tr>
				</thead>
				<tbody>
					{questions.map(q => (
						<tr key={q.id}>
							<td>{q.question}</td>
							<td>{answers[q.id]}</td>
							<td>
								{Object.entries(q.effects)
									.map(
										([axis, strength]) =>
											`${axis}: ${strength! * answers[q.id]}`
									)
									.join(', ')}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Button href="/" style={{ backgroundColor: '#2196f3' }}>
				Back
			</Button>
		</>
	);
}
