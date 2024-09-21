import { ButtonHTMLAttributes } from 'react';

import Button from '@/components/Button';

interface ButtonAddProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

export default function ButtonDelete({ label, ...rest }: ButtonAddProps) {
	return (
		<Button styleClass="primary-red" {...rest}>
			{label}
		</Button>
	);
}
