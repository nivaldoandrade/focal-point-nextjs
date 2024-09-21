import Spinner from '@/components/Spinner';

import styles from './loader.module.scss';

export default function Loader() {
	return (
		<div className={styles.container}>
			<Spinner size="size-80" />
		</div>
	);
}
