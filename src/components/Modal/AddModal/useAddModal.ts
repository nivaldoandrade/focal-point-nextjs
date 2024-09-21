import { ChangeEvent, FormEvent, useState } from 'react';

import { useErrors } from '@/hooks/useErrors';

interface UseModalProps {
	onClose: () => void;
	onAddTask: (taskTitle: string) => void;
}

export function useAddModal({ onClose, onAddTask }: UseModalProps) {
	const [taskTitle, setTaskTitle] = useState('');

	const { setError, removeError, getErrorMessageByField } = useErrors();

	function HandleSubmit(e: FormEvent) {
		e.preventDefault();

		if (taskTitle.trim() === '') {
			return;
		}

		onAddTask(taskTitle);
		onClose();
	}

	function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
		setTaskTitle(e.target.value);

		if (!e.target.value) {
			setError({ field: 'task', message: 'Titulo é obrigatório' });
		} else {
			removeError('task');
		}
	}

	const isTaskTitleError = !!getErrorMessageByField('task');

	return {
		taskTitle,
		HandleSubmit,
		handleTitleChange,
		isTaskTitleError,
		getErrorMessageByField,
	};
}
