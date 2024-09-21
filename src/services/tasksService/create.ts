import { localStoragesKeys } from '@/config/localStorageKey';

import tasksService from '../tasksService';

interface CreateTaskParams {
	id: number;
	title: string;
	isCompleted: boolean;
}

export function create(task: CreateTaskParams) {
	const tasks = tasksService.list();

	tasks.push(task);

	localStorage.setItem(localStoragesKeys.TASKS, JSON.stringify(tasks));
}
