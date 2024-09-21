'use client';

import ButtonCancel from '@/components/Button/ButtonCancel';
import { ReactPortal } from '@/components/ReactPortal';
import { useAminatedUnmount } from '@/hooks/useAnimatedUnmount';

import styles from './modal.module.scss';

interface ModalProps {
	isVisible: boolean;
	title: string;
	onClose: () => void;
	children: React.ReactNode;
	rightButton: React.ReactNode;
}

export default function Modal({ isVisible, title, onClose, children, rightButton }: ModalProps) {
	const { shouldRender, animationRef } = useAminatedUnmount(isVisible);

	if (!shouldRender) {
		return null;
	}

	return (
		<ReactPortal containerId="modal-root">
			<div
				className={`
				${styles.overlay}
				${!isVisible ? styles.isLeaving : ''}
			`}
				ref={animationRef}
			>
				<div
					className={`
				${styles.modalBody}
				${!isVisible ? styles.isLeaving : ''}
			`}
				>
					<h1>{title}</h1>

					{children}

					<div className={styles.footer}>
						<ButtonCancel onClick={onClose} label="Cancelar" />
						{rightButton}
					</div>
				</div>
			</div>
		</ReactPortal>
	);
}
