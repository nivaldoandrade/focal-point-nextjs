'use client';

import { TaskProps, useBoard } from '@/components/Board/useBoard';
import ButtonAdd from '@/components/Button/ButtonAdd';
import Loader from '@/components/Loader';
import AddModal from '@/components/Modal/AddModal';
import DeleteModal from '@/components/Modal/DeleteModal';
import { Tasks } from '@/components/Tasks';
import { useModal } from '@/hooks/useModal';

import styles from './board.module.scss';

export default function Board() {
	const {
		tasksIncompleted,
		tasksCompleted,
		handleToggleTask,
		handleAddTask,
		handleDeleteTask,
		isFirstLoading,
		isEmpty,
	} = useBoard();

	const { data, handleOpenModal, handleCloseModal, isVisible } = useModal<TaskProps>();

	if (isFirstLoading) {
		return <Loader />;
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				{isEmpty && <span>Clique no botão abaixo para adiconar sua tarefa do dia!</span>}

				{!isEmpty && (
					<>
						<div className={styles.tasksContainer}>
							<Tasks
								title="Suas tarefas de hoje"
								tasks={tasksIncompleted}
								onToggleTask={handleToggleTask}
								onOpenDeleteModal={handleOpenModal}
							/>
							<Tasks
								title="Tarefas Finalizadas"
								tasks={tasksCompleted}
								onToggleTask={handleToggleTask}
								onOpenDeleteModal={handleOpenModal}
							/>
						</div>
					</>
				)}
				<ButtonAdd label="Adicionar nova tarefa" onClick={() => handleOpenModal()} />
			</div>
			<AddModal
				isVisible={isVisible && !data}
				onClose={handleCloseModal}
				onAddTask={handleAddTask}
			/>
			<DeleteModal
				isVisible={isVisible && !!data}
				task={data!}
				onClose={handleCloseModal}
				onDeleteTask={handleDeleteTask}
			/>
		</div>
	);
}
