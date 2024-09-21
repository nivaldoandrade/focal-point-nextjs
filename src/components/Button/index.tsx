import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	styleClass: 'primary-blue' | 'primary-red' | 'secondary';
}

export default function Button({ children, styleClass, ...rest }: ButtonProps) {
	return (
		<button type="button" className={`${styles.container} ${styles[styleClass]}`} {...rest}>
			{children}
		</button>
	);
}
