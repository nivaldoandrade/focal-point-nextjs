import styles from './spinner.module.scss';

interface SpinnerProps {
	size?: 'size-20' | 'size-80';
}

export default function Spinner({ size }: SpinnerProps) {
	const cssSize = size ? styles[size] : styles['size-20'];

	return <div className={`${styles.styledSpinner} ${cssSize}`} />;
}
