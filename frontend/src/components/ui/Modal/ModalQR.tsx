import { useEffect, useState } from 'react'
import styles from './Modal.module.scss'
import { WalletInfoRemote } from '@tonconnect/sdk'
import { MainButton } from '../main-button/MainButton'
import { useWallet } from '../../../hooks/useWallet'
import { connector } from '../../../connector'
import QRCode from 'react-qr-code'

interface Props {
	isOpen: boolean
	onClose: () => void
	walletInfo: WalletInfoRemote | null
}

export function ModalQR({ isOpen, onClose, walletInfo }: Props) {
	const [walletConnectionUrl, setWalletConnectionUrl] = useState<any>('')
	const wallet = useWallet()
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

	useEffect(() => {
		if (isOpen && wallet) {
			onClose()
		}
	}, [isOpen, wallet, onClose])

	useEffect(() => {
		if (walletInfo) {
			setWalletConnectionUrl(
				connector.connect({
					bridgeUrl: walletInfo.bridgeUrl,
					universalLink: walletInfo.universalLink,
				})
			)
		}
	}, [walletInfo])

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
				<h3 className={styles.walletName}>{walletInfo?.name}</h3>
				<QRCode className={styles.qr} value={walletConnectionUrl} />
				<MainButton
					onClick={() => window.open(walletConnectionUrl, '_blank')}
					border='white'
					text={`Open ${walletInfo?.name}`}
				/>
			</div>
		</div>
	)
}
