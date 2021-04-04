import Link, { LinkProps } from 'next/link';

import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
	href: LinkProps['href'];
	children: string;
}

export default function Button({
	children,
	href,
	...transfer
}: ButtonProps & React.HTMLAttributes<HTMLAnchorElement>) {
	return (
		<Link href={href}>
			<a className={styles.Button} {...transfer}>
				{children}
			</a>
		</Link>
	);
}
