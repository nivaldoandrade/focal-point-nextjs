/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './inputradio.module.scss';

interface InputCheckboxProps {
	id: number;
	checked: boolean;
	onClick: (id: number) => void;
}

export default function InputRadio({ id, checked, onClick }: InputCheckboxProps) {
	return (
		<div className={styles.container}>
			<input
				aria-label={String(id)}
				id={String(id)}
				type="checkbox"
				checked={checked}
				onChange={() => onClick(id)}
			/>
			<label htmlFor={String(id)}></label>
		</div>
	);
}
