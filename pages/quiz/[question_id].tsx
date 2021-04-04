/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

import Head from 'next/head';

import React from 'react';

import Answer from 'components/Answer';
import useQuestions from 'hooks/useQuestions';
import Header from 'components/Header';

export function getServerSideProps(ctx: GetServerSidePropsContext) {
	// do nothing, I just don't want this page statically optimized lol
	return { props: {} };
}

export default function Quiz(
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
	const { question, questionCount } = useQuestions();
	return (
		<>
			<Head>
				<title>
					Question {question.id + 1} of {questionCount} - NextCompass
				</title>
			</Head>
			<Header />
			<h2 id="question-number" style={{ textAlign: 'center' }}>
				Question {question.id + 1} of {questionCount}
			</h2>
			<p className="question" id="question-text">
				{question.question}
			</p>
			<Answer color="#1b5e20" strength={1.0} text="Strongly Agree" />
			<Answer color="#4caf50" strength={0.5} text="Agree" />
			<Answer color="#bbbbbb" strength={0} text="Neutral / Unsure" />
			<Answer color="#f44336" strength={-0.5} text="Disagree" />
			<Answer color="#b71c1c" strength={-1.0} text="Strongly Disagree" />
			{/* <button
				className="small_button"
				onClick={() => prev_question()}
				id="back_button"
			>
				Back
			</button> */}
		</>
	);
}
