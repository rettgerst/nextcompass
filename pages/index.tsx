import Image from 'next/image';

import Button from 'components/Button';

import styles from './index.module.scss';

export default function Home() {
	return (
		<>
			<h1 className="title">NextCompass</h1>
			<hr />
			<div className={styles.BannerContainer}>
				<Image height={1300} id="banner" src="/compass.png" width={1850} />
			</div>
			<Button href="/quiz/0">Click here to start!</Button>

			<h2>What is SapplyValues?</h2>
			<p>
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
					<u>
						<span id="numOfQuestions" />
					</u>
				</b>{' '}
				questions in the test.
			</p>
			<h2>Why use this version?</h2>
			<p>
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
			</p>
			<h2>Your questions / results suck!</h2>
			<p>
				You will have to complain to the original Sapply creator. I did not make
				this test, I simply changed the UI.
			</p>
			<h2>Privacy notice</h2>
			<p>
				At the end of the test, you will be given the option to fill out
				information about how you describe yourself politcally. There will be 3
				options. The first will take you to a small survey and will record your
				answers to that along with the results. The second will just record your
				results. The third will not record anything. All information recorded is
				totally anonymous, and is being used for a research project by the
				creator of <a href="https://altvalues.github.io/">AltValues</a>.
			</p>
			<h2>Legal notice</h2>
			<p>
				The 8values and 9Axes project licenses grant the rights to &quot;modify,
				merge, publish, distribute&quot; the software as long as &quot;The above
				copyright notice and this permission notice shall be included in all
				copies or substantial portions of the Software.&quot; The included
				notice can be found <a href="LICENSE.txt">here</a>. This project is
				released under the same license.
			</p>
		</>
	);
}
