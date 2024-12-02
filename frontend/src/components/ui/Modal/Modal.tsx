import { useEffect } from 'react'
import styles from './Modal.module.scss'

interface Props {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: Props) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden' // Блокируем прокрутку
		} else {
			document.body.style.overflow = '' // Сбрасываем стиль
		}

		// Очистка при размонтировании
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent} onClick={e => e.stopPropagation()}>
				<button className={styles.modalClose} onClick={onClose}>
					<img
						className={styles.close}
						src='/close.svg'
						alt='close'
						width={40}
						height={40}
					/>
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
