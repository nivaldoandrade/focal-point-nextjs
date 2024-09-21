import { ButtonHTMLAttributes } from 'react';

import Button from '@/components/Button';

interface ButtonAddProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

export default function ButtonCancel({ label, ...rest }: ButtonAddProps) {
	return (
		<Button styleClass="secondary" {...rest}>
			{label}
		</Button>
	);
}
