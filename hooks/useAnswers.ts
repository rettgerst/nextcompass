import { useRouter } from 'next/router';

import { useMemo } from 'react';

import { Answers } from 'types';

export default function useAnswers() {
	const router = useRouter();
	const { answers = '{}' } = router.query;
	if (typeof answers !== 'string') throw new Error('Cannot decode answers');

	const parsed = useMemo(() => JSON.parse(answers) as Answers, [answers]);

	return parsed;
}
