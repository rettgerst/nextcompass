/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-perf/jsx-no-new-object-as-prop */

import { GetServerSidePropsContext } from 'next';

import { useMemo } from 'react';

import useAnswers from 'hooks/useAnswers';
import questions from 'questions.json';
import Button from 'components/Button';
import Compass from 'components/Compass';
import sumAnswers from 'functions/sumAnswers';

import styles from './Results.module.scss';

export function getServerSideProps(ctx: GetServerSidePropsContext) {
	return { props: {} };
}

export default function Results() {
	const answers = useAnswers();

	const results = useMemo(() => sumAnswers(answers), [answers]);

	return (
		<>
			<h1 className="title">NextCompass</h1>
			<hr />
			<h1 className="title">Results</h1>
			<div className={styles.CompassContainer}>
				<Compass className={styles.CompassImage} results={results} />
			</div>
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
