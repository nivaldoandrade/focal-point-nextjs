import { localStoragesKeys } from '@/config/localStorageKey';

interface TasksResponse {
	id: number;
	title: string;
	isCompleted: boolean;
}

export function list() {
	const storedTasks = localStorage.getItem(localStoragesKeys.TASKS);

	let tasks: TasksResponse[] = [];

	if (storedTasks) {
		tasks = JSON.parse(storedTasks);
	}

	return tasks;
}
