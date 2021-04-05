import Image from 'next/image';
import Head from 'next/head';

import Button from 'components/Button';
import questions from 'questions.json';
import Header from 'components/Header';
import NoScript from 'components/NoScript';

import styles from './index.module.scss';

export default function Home() {
	return (
		<>
			<Head>
				<title>NextCompass</title>
			</Head>
			<Header />
			<NoScript>
				<div className={styles.NoScriptHello}>
					<p>
						Hello NoScript user! This site works with JavaScript disabled 🎉
					</p>
				</div>
			</NoScript>
			<div className={styles.BannerContainer}>
				<Image height={1300} id="banner" src="/compass.png" width={1850} />
			</div>
			<Button href="/quiz/0">Click here to start!</Button>
			<h2>What is NextCompass?</h2>
			<p>
				NextCompass is a fork of{' '}
				<a href="https://sapplyvalues.github.io/">SapplyValues</a>, which is an
				implementation of the{' '}
				<a href="http://sapplypoliticalcompass.com/">
					Sapply political compass test
				</a>{' '}
				with the UI of the <a href="https://8values.github.io/">8values test</a>
				.
			</p>
			<p>
				This project is a rewrite/port of SapplyValues to the Next.js framework
				(hence the name) and also adds some improvements along the way. The
				questions and scoring system are unchanged.
			</p>
			<p>Improvements over SapplyValues include:</p>
			<ul>
				<li>
					Dark Mode support (using media queries/{}
					<code>prefers-color-scheme</code>)
				</li>
				<li>
					Answers are stored in the URL, meaning users can resume the test from
					their browser&apos;s history
				</li>
				<li>
					100% of site functionality still works (albeit a bit slower) with
					JavaScript blocked/disabled
				</li>
				<li>
					User is shown all of their answers on the results page along with the
					political orientation of each answer
				</li>
			</ul>
			<p>
				The source code is also available{' '}
				<a href="https://github.com/rettgerst/nextcompass">on GitHub</a>.
			</p>
		</>
	);
}
