import LogoMark from '@/public/Logomark.svg';
import LogoType from '@/public/Logotype.svg';
import { capitalizeWeekday } from '@/utils/formatDate';

import styles from './header.module.scss';

export default function Header() {
	return (
		<header className={styles.container}>
			<div className={styles.content}>
				<div className={styles.logoContainer}>
					<LogoMark />
					<LogoType />
				</div>
				<h2>Bem-vindo de volta, Marcus</h2>
				<time>{capitalizeWeekday()}</time>
			</div>
		</header>
	);
}
