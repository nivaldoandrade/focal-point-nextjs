import { ButtonHTMLAttributes } from 'react';

import Button from '@/components/Button';

interface ButtonAddProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

export default function ButtonAdd({ label, ...rest }: ButtonAddProps) {
	return (
		<Button styleClass="primary-blue" {...rest}>
			{label}
		</Button>
	);
}
