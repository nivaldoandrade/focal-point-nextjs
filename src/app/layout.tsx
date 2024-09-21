import type { Metadata } from 'next';

import { interTight } from '@/libs/font';

import styles from './styles/rootLayout.module.scss';

import './styles/globals.scss';

export const metadata: Metadata = {
	title: 'FocalPoint',
	description: 'Teste para empresa LegaPlan',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={interTight.variable}>
				<div className={styles.container}>
					<div className={styles.content}>{children}</div>
				</div>
			</body>
		</html>
	);
}
