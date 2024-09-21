import ButtonAdd from '@/components/Button/ButtonAdd';
import Modal from '@/components/Modal/';
import { useAddModal } from '@/components/Modal/AddModal/useAddModal';

import styles from './addmodal.module.scss';

interface ModalAddProps {
	isVisible: boolean;
	onClose: () => void;
	onAddTask: (taskTitle: string) => void;
}

export default function AddModal({ isVisible, onClose, onAddTask }: ModalAddProps) {
	const { taskTitle, HandleSubmit, handleTitleChange, isTaskTitleError, getErrorMessageByField } =
		useAddModal({ onAddTask, onClose });

	return (
		<Modal
			isVisible={isVisible}
			title="Nova Tarefa"
			onClose={onClose}
			rightButton={
				<ButtonAdd
					type="submit"
					form="form-add-task"
					onClick={HandleSubmit}
					label="Adicionar"
					disabled={isTaskTitleError || !taskTitle}
				/>
			}
		>
			<form id="form-add-task" className={styles.form}>
				<div className={styles.headerForm}>
					<label htmlFor="task">Titulo</label>
					{isTaskTitleError && <small>{getErrorMessageByField('task')}</small>}
				</div>
				<input
					aria-label="task"
					type="text"
					placeholder="Digite"
					onChange={(e) => handleTitleChange(e)}
					className={`
						${isTaskTitleError ? styles.error : ''}
					`}
				/>
			</form>
		</Modal>
	);
}
