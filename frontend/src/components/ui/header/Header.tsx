import styles from './Header.module.scss'
import { MainButton } from '../main-button/MainButton'
import { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import { TimerModal } from '../timer-modal/TimerModal'
import {
	CHAIN,
	isWalletInfoCurrentlyEmbedded,
	isWalletInfoCurrentlyInjected,
	isWalletInfoRemote,
	toUserFriendlyAddress,
	WalletInfo,
	WalletInfoRemote,
} from '@tonconnect/sdk'
import QRCode from 'react-qr-code'
import { ModalQR } from '../Modal/ModalQR'
import { useWallet } from '../../../hooks/useWallet'
import { connector } from '../../../connector'

interface Props {
	lang: string | null
}

export function Header({ lang }: Props) {
	const [isModalPreSaleOpen, setModalPreSaleOpen] = useState(false)
	const [isModalAirDropOpen, setModalAirDropOpen] = useState(false)
	const [isModalWalletOpen, setModalWalletOpen] = useState(false)
	const [isModalTonOpen, setModalTonOpen] = useState(false)
	const [isModalQROpen, setModalQROpen] = useState(false)
	const [inputPresaleValue, setInputPresaleValue] = useState('')
	const [inputWalletValue, setInputWalletValue] = useState('')
	const [inputAmountValue, setInputAmountValue] = useState('')
	const [walletsList, setWalletsList] = useState<WalletInfo[] | null>(null)
	const [selectedWalletInfo, setSelectedWalletInfo] =
		useState<WalletInfoRemote | null>(null)
	const [isDropDownOpen, setIsDropDownOpen] = useState(false)
	const [isLanguageOpen, setIsLanguageOpen] = useState(false)
	const wallet = useWallet()
	const userFriendlyAddress = wallet
		? toUserFriendlyAddress(
				wallet?.account.address,
				wallet.account.chain === CHAIN.TESTNET
			).slice(0, 4) +
			'...' +
			toUserFriendlyAddress(
				wallet?.account.address,
				wallet.account.chain === CHAIN.TESTNET
			).slice(-4)
		: ''

	useEffect(() => {
		connector.getWallets().then(setWalletsList)
	}, [])

	useEffect(() => {
		if (isModalTonOpen && wallet) {
			closeTonModal()
		}
	}, [isModalTonOpen, wallet])

	const handlePresaleChange = (event: any) => {
		setInputPresaleValue(event.target.value)
	}

	const handleWalletChange = (event: any) => {
		setInputWalletValue(event.target.value)
	}

	const handleAmountChange = (event: any) => {
		setInputAmountValue(event.target.value)
	}

	const openPresaleModal = () => setModalPreSaleOpen(true)
	const openAirDropModal = () => setModalAirDropOpen(true)
	const openWalletModal = () => {
		if (wallet) {
			return setIsDropDownOpen(!isDropDownOpen)
		}
		setModalWalletOpen(true)
	}
	const openQRModal = () => {
		setModalTonOpen(false)
		setModalQROpen(true)
	}
	const openTonModal = () => {
		setModalWalletOpen(false)
		setModalTonOpen(true)
	}
	const closePresaleModal = () => {
		setModalPreSaleOpen(false)
		setInputPresaleValue('')
		setInputWalletValue('')
		setInputAmountValue('')
	}
	const closeAirDropModal = () => {
		setModalAirDropOpen(false)
	}

	const closeWalletModal = () => {
		setModalWalletOpen(false)
	}
	const closeTonModal = () => {
		setModalTonOpen(false)
	}

	const closeQRModal = () => {
		setModalQROpen(false)
	}

	const onWalletClick = (wallet: WalletInfo) => {
		if (isWalletInfoRemote(wallet)) {
			return setSelectedWalletInfo(wallet)
		}

		if (isWalletInfoCurrentlyInjected(wallet)) {
			try {
				return connector.connect({ jsBridgeKey: wallet.jsBridgeKey })
			} catch (error) {}
		}

		window.open(wallet.aboutUrl, '_blank')
	}

	const onClickDropDown = () => {
		setIsDropDownOpen(!isDropDownOpen)
		if (wallet) {
			return connector.disconnect()
		}
	}

	const onClickLanguage = (country: 'china' | 'en' | 'ukr' | 'none') => {
		if (country === 'none') {
			setIsLanguageOpen(!isLanguageOpen)
		} else {
			localStorage.setItem('language', country)
			window.location.reload()
			setIsLanguageOpen(!isLanguageOpen)
		}
	}
	return (
		<header className={styles.header}>
			<MainButton onClick={openAirDropModal} border='white' text='AirDrop' />
			<Modal isOpen={isModalPreSaleOpen} onClose={closePresaleModal}>
				<h2 className={styles.modalTitle}>PRESALE SOON!</h2>
				<TimerModal isTopBrainShow={false} date='01/01/2025' />
				{/* <img
					src={'/modal-logo.svg'}
					alt='modal-img'
					width={215}
					height={215}
					className={styles.modalImg}
				/>
				<input
					type='email'
					value={inputPresaleValue}
					onChange={handlePresaleChange}
					placeholder='EMAIL'
					className={styles.modalInput}
				/>
				<input
					type='text'
					value={inputWalletValue}
					onChange={handleWalletChange}
					placeholder='TON WALLET ID'
					className={styles.modalInput}
				/>
				<input
					type='text'
					value={inputAmountValue}
					onChange={handleAmountChange}
					placeholder='AMOUNT(IN TON)'
					className={styles.modalInput}
				/>
				<button className={styles.modalBtn}>Send</button> */}
			</Modal>
			<Modal isOpen={isModalAirDropOpen} onClose={closeAirDropModal}>
				<h3 className={styles.modalAirDropTitle}>AirDrop SOON!</h3>
				<TimerModal isTopBrainShow date='2/10/2025' />
				<p className={styles.modalAirDropText}>
					The airdrop will be sent to your specified wallets. To receive an
					airdrop you need to send an email to geekcoin.inc@proton.me with a
					story about what you have learned in science or what you have achieved
					recently. Don't forget to specify your crypto wallet to which the
					reward should be credited. If your story impresses our team you will
					be sent an airdrop. Attach a photo or video proof to your story, it is
					necessary to avoid fraud.
				</p>
			</Modal>
			<MainButton onClick={openPresaleModal} border='white' text='Pre-Sale' />
			<h1 className={styles.title}>GEEK COIN</h1>
			<MainButton
				style={{ position: 'relative', display: 'flex' }}
				onClick={openWalletModal}
				border='white'
				text={wallet ? userFriendlyAddress : 'Connect Wallet'}
				gap={8}
			>
				{isDropDownOpen && (
					<ul
						className={styles.disconnect}
						style={{
							listStyle: 'none',
							margin: 0,
							padding: '10px',
							position: 'absolute',
							top: '120%',
							left: 0,
							backgroundColor: '#2f2f2f',
							boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
							zIndex: 1000,
							width: '100%',
							borderRadius: '8px',
						}}
					>
						<li
							className={styles.disconnectItem}
							onClick={() => onClickDropDown()}
							style={{
								padding: '8px 12px',
								cursor: 'pointer',
								color: '#fff',
								fontSize: '15px',
								fontWeight: 700,
							}}
						>
							Disconnect
						</li>
					</ul>
				)}
				<img
					className={styles.tonLogo}
					src='/ton-logo.svg'
					alt='ton-logo'
					width={20}
					height={20}
				/>
			</MainButton>
			<Modal isOpen={isModalWalletOpen} onClose={closeWalletModal}>
				<h3 className={styles.modalWalletTitle}>Connect Wallet</h3>
				<button onClick={openTonModal} className={styles.modalWalletBtn}>
					<img
						className={styles.modalWalletImg}
						src='/ton-connect.svg'
						alt='ton-connect'
						width={267}
						height={267}
					/>
				</button>
				<span className={styles.modalWalletSpan}>
					You'll need a wallet on TON to continue
				</span>
			</Modal>
			<Modal isOpen={isModalTonOpen} onClose={closeTonModal}>
				<h3 className={styles.tonTitle}>Choose a wallet</h3>
				{!!walletsList && (
					<div className={styles.chooseTon}>
						{walletsList.map(wallet => (
							<MainButton
								onClick={() => onWalletClick(wallet)}
								border='white'
								text={wallet.name}
								key={wallet.name}
							>
								<img
									src={wallet.imageUrl}
									alt={wallet.name}
									width={20}
									height={20}
								/>
							</MainButton>
						))}
					</div>
				)}
			</Modal>
			<ModalQR
				isOpen={!!selectedWalletInfo}
				onClose={() => setSelectedWalletInfo(null)}
				walletInfo={selectedWalletInfo}
			></ModalQR>
			<button
				style={{ position: 'relative' }}
				onClick={() => onClickLanguage('none')}
				className={styles.globe}
			>
				<img
					src='/header-globe.svg'
					alt='change language'
					width={51}
					height={51}
					className={styles.globeImg}
				/>
				{isLanguageOpen && (
					<ul
						className={styles.language}
						style={{
							listStyle: 'none',
							margin: 0,
							padding: '10px',
							position: 'absolute',
							top: '120%',
							left: '-100%',
							backgroundColor: '#2f2f2f',
							boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
							zIndex: 1000,
							width: '300%',
							borderRadius: '8px',
						}}
					>
						<li
							className={styles.languageItem}
							onClick={() => onClickLanguage('en')}
							style={{
								padding: '8px 12px',
								cursor: 'pointer',
								color: '#fff',
								fontSize: '15px',
								fontWeight: 700,
							}}
						>
							EN
							<img
								className={styles.flag}
								style={{
									marginLeft: '10px',
								}}
								src={'/usa.svg'}
								alt='usa'
								width={27}
								height={18}
							/>
						</li>
						<li
							className={styles.languageItem}
							onClick={() => onClickLanguage('china')}
							style={{
								padding: '8px 12px',
								cursor: 'pointer',
								color: '#fff',
								fontSize: '15px',
								fontWeight: 700,
							}}
						>
							中文
							<img
								className={styles.flag}
								style={{
									marginLeft: '10px',
								}}
								src={'/china.svg'}
								alt='usa'
								width={27}
								height={18}
							/>
						</li>
						<li
							className={styles.languageItem}
							onClick={() => onClickLanguage('ukr')}
							style={{
								padding: '8px 12px',
								cursor: 'pointer',
								color: '#fff',
								fontSize: '15px',
								fontWeight: 700,
							}}
						>
							УКР
							<img
								className={styles.flag}
								style={{
									marginLeft: '10px',
								}}
								src={'/ukr.svg'}
								alt='usa'
								width={27}
								height={18}
							/>
						</li>
					</ul>
				)}
			</button>
		</header>
	)
}
