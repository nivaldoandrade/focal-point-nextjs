import { TaskProps } from '@/components/Board/useBoard';
import ButtonDelete from '@/components/Button/ButtonDelete';
import Modal from '@/components/Modal';

import styles from './deletemodal.module.scss';

interface ModalDeleteProps {
	isVisible: boolean;
	task: TaskProps;
	onClose: () => void;
	onDeleteTask: (taskId: number) => void;
}

export default function DeleteModal({ isVisible, task, onClose, onDeleteTask }: ModalDeleteProps) {
	function handleDeleteTask() {
		onDeleteTask(task.id);
		onClose();
	}

	return (
		<Modal
			isVisible={isVisible}
			onClose={onClose}
			title="Deletar tarefa"
			rightButton={<ButtonDelete onClick={handleDeleteTask} label="Deletar" />}
		>
			<span className={styles.question}>Tem certeza que você deseja deletar essa tarefa?</span>
		</Modal>
	);
}
