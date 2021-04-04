// based on: https://github.com/clayrisser/react-noscript/blob/master/src/ReactNoScript.js

import React, { ReactElement } from 'react';

import ReactDOM from 'react-dom/server';

export default function NoScript({ children }: { children: ReactElement }) {
	return React.createElement('noscript', {
		dangerouslySetInnerHTML: { __html: ReactDOM.renderToStaticMarkup(children) }
	});
}
