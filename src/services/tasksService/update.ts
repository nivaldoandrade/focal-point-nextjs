import { localStoragesKeys } from '@/config/localStorageKey';

import tasksService from '.';

export function update(taskId: number) {
	const listTasks = tasksService.list();

	const updatedTasks = listTasks.map((task) => {
		if (task.id === taskId) {
			task.isCompleted = !task.isCompleted;
		}

		return task;
	});

	localStorage.setItem(localStoragesKeys.TASKS, JSON.stringify(updatedTasks));
}
