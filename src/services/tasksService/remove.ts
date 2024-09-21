import { localStoragesKeys } from '@/config/localStorageKey';

import tasksService from '../tasksService';

export function remove(taskId: number) {
	const listTasks = tasksService.list();

	const filteredListTasks = listTasks.filter((task) => !(task.id == taskId));

	localStorage.setItem(localStoragesKeys.TASKS, JSON.stringify(filteredListTasks));
}
