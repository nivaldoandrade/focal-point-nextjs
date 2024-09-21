import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function capitalizeWeekday() {
	const formattedDate = format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy", {
		locale: ptBR,
	});

	const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

	return capitalizedDate;
}
