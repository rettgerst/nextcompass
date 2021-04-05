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
			<p>NextCompass is based on SapplyValues, which describes itself as:</p>
			<blockquote>
				SapplyValues is a political compass test that combines the questions of
				the <a href="http://sapplypoliticalcompass.com/">Sapply test</a>* with
				the UI of <a href="https://8values.github.io/">8values</a>. You will be
				presented by a statement, and then you will answer with your opinion on
				the statement, from <b>Strongly Agree</b> to <b>Strongly Disagree</b>,
				with each answer slightly affecting your scores. At the end of the quiz,
				your answers will be displayed on a political compass. <br />* A few
				questions have been reworded as I feel some of them were poorly written.
				There are{' '}
				<b>
					<u>{questions.length}</u>
				</b>{' '}
				questions in the test.
			</blockquote>
			<p>
				Additionally, NextCompass is a React/Next.js port of the SapplyValues
				project. The functionality is the same as SapplyValues but may be
				improved upon in the future. It also works without JavaScript enabled!
			</p>
			<p>
				The source code is available{' '}
				<a href="https://github.com/rettgerst/nextcompass">on GitHub</a>.
			</p>
			<h2>Why use this version?</h2>
			<p>Original text from SapplyValues:</p>
			<blockquote>
				Both the original and the popular clone version have a number of issues
				and are very poorly coded. For starters, many users run into NaN errors.
				This happens when using the keyboard to press enter to go to the next
				page instead of clicking it. This doesn&apos;t apply at all to this
				version. Secondly, the original version does not properly generate an
				image. It puts an overlay on top of a CSS-defined background image,
				meaning that if you save the image, it just saves the overlay instead of
				the whole compass. This is fixed in this version. Thirdly, this version
				supports URL parameters, meaning you can easily share the link to your
				results and if you lose the image, you can find the results page entry
				with parameters in your history so you don&apos;t have to retake the
				whole test. Finally, the 8values / 9Axes UI is far better (in my opinion
				anyway). It looks nicer and takes less clicks to answer.
			</blockquote>
			<p>
				This project mostly serves as an example Next.js application, but is
				also fully functional as a political compass test. The biggest change at
				the moment is that it shows you all of your answers on the results
				screen along the political orientation of each of your answers.
			</p>
		</>
	);
}
