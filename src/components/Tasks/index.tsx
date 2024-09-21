import { TaskProps } from '@/components/Board/useBoard';
import InputRadio from '@/components/InputRadio';
import TrashIcon from '@/public/trash.svg';

import styles from './tasks.module.scss';

interface TasksProps {
	title: string;
	tasks: TaskProps[];
	onToggleTask: (id: number) => void;
	onOpenDeleteModal: (task: TaskProps) => void;
}

export function Tasks({ title, tasks, onToggleTask, onOpenDeleteModal }: TasksProps) {
	function handleClickDeleteButton(e: React.MouseEvent<HTMLButtonElement>, task: TaskProps) {
		e.stopPropagation();
		onOpenDeleteModal(task);
	}

	return (
		<div className={styles.tasks}>
			<h2>{title}</h2>

			<ul className={styles.listContainer}>
				{tasks.map((task) => (
					<li key={task.id} className={styles.item} onClick={() => onToggleTask(task.id)}>
						<InputRadio
							id={task.id}
							checked={task.isCompleted}
							onClick={() => onToggleTask(task.id)}
						/>
						<span className={task.isCompleted ? styles.checked : ''}>{task.title}</span>
						<button type="button" onClick={(e) => handleClickDeleteButton(e, task)}>
							<TrashIcon width={24} height={24} />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
