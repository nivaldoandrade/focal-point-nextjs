import { useCallback, useEffect, useState } from 'react';

import tasksService from '@/services/tasksService';
import delay from '@/utils/delay';

export interface TaskProps {
	id: number;
	title: string;
	isCompleted: boolean;
}

export function useBoard() {
	const [isFirstLoading, setFirstLoading] = useState(true);
	const [tasks, setTasks] = useState<TaskProps[]>([]);

	const getListTasks = useCallback(async () => {
		await delay();
		const getTasks = tasksService.list();

		setTasks(getTasks);
		setFirstLoading(false);
	}, []);

	useEffect(() => {
		getListTasks();
	}, [getListTasks]);

	const tasksCompleted = tasks.filter((task) => task.isCompleted);
	const tasksIncompleted = tasks.filter((task) => !task.isCompleted);
	const isEmpty = tasks.length === 0;

	function handleAddTask(taskTitle: string) {
		const task: TaskProps = {
			id: Math.random(),
			title: taskTitle,
			isCompleted: false,
		};

		tasksService.create(task);

		setTasks((state) => [...state, task]);
	}

	function handleDeleteTask(taskId: number) {
		const filteredTasks = tasks.filter((task) => !(task.id === taskId));

		tasksService.remove(taskId);

		setTasks(filteredTasks);
	}

	function handleToggleTask(taskId: number) {
		const updatedTask = tasks.map((task) => {
			if (task.id === taskId) {
				task.isCompleted = !task.isCompleted;
			}

			return task;
		});

		tasksService.update(taskId);
		setTasks(updatedTask);
	}

	return {
		tasksCompleted,
		tasksIncompleted,
		handleToggleTask,
		handleAddTask,
		handleDeleteTask,
		isFirstLoading,
		isEmpty,
	};
}
