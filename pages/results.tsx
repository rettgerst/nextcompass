import { GetServerSidePropsContext } from 'next';

import Head from 'next/head';

import React, { useMemo } from 'react';

import useAnswers from 'hooks/useAnswers';
import questions from 'questions.json';
import Button from 'components/Button';
import Compass from 'components/Compass';
import sumAnswers from 'functions/sumAnswers';
import { Answers } from 'Answers';
import getPositionDescription from 'functions/getPositionDescription';
import { Axes } from 'types';
import Header from 'components/Header';

import styles from './Results.module.scss';

export function getServerSideProps(ctx: GetServerSidePropsContext) {
	return { props: {} };
}

export default function Results() {
	const answers = useAnswers();

	const results = useMemo(() => sumAnswers(answers), [answers]);

	return (
		<div className={styles.ResultsPage}>
			<Head>
				<title>Results - NextCompass</title>
			</Head>
			<Header />
			<h2>Results</h2>
			<div className={styles.CompassContainer}>
				<Compass className={styles.CompassImage} results={results} />
			</div>
			<h2>Your Answers</h2>
			<div className={styles.AnswerTableWrap}>
				<table className={styles.AnswerTable}>
					<thead>
						<tr>
							<th>Question</th>
							<th>Answer</th>
							<th>Orientation</th>
						</tr>
					</thead>
					<tbody>
						{questions.map(q => {
							// simplifying assumption that there is only one effect per question
							// currently this is correct but may break if questions.json is ever changed
							const [axis, effect] = Object.entries(q.effects)[0] as [
								Axes,
								number
							];

							const desc = getPositionDescription(axis, effect * answers[q.id]);

							return (
								<tr key={q.id}>
									<td>{q.question}</td>
									<td>{Answers[answers[q.id]]}</td>
									<td className={`${styles.Orientation} ${desc.class}`}>
										{desc.label}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<Button href="/" style={{ backgroundColor: '#2196f3' }}>
				Back
			</Button>
		</div>
	);
}
