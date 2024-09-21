import Board from '@/components/Board';
import Header from '@/components/Header';

import styles from './page.module.scss';

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.container}>
				<Board />
			</main>
		</>
	);
}
