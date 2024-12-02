import styles from './Footer.module.scss'
import { MainButton } from '../main-button/MainButton'

export function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.listTop}>
				<img
					className={styles.tonLogo}
					src={'/ton-footer.svg'}
					alt='ton-logo'
					width={283}
					height={121}
				/>
				<img
					className={styles.footerLogo}
					src={'/footer-logo.svg'}
					alt='footer-logo'
					width={495}
					height={195}
				/>
				<div className={styles.listRight}>
					<div className={styles.listSubTop}>
						<a target='_blank' href='https://x.com/geekcoincrypto'>
							<img
								className={styles.smallLogo}
								src={'/logo-x.svg'}
								alt='x-logo'
								width={61}
								height={61}
							/>
						</a>

						<a target='_blank' href='https://t.me/geekcoininc'>
							<img
								className={styles.smallLogo}
								src={'/tg-logo.svg'}
								alt='tg-logo'
								width={61}
								height={61}
							/>
						</a>

						<a target='_blank' href='https://discord.gg/8P3z9HsXMY'>
							<img
								className={styles.smallLogo}
								src={'/discord-logo.svg'}
								alt='discord-logo'
								width={61}
								height={61}
							/>
						</a>
					</div>
					<a target='_blank' href='https://medium.com/@geekcoin.inc'>
						<img
							className={styles.mediumLogo}
							src={'/medium-logo.svg'}
							alt='medium-logo'
							width={208}
							height={32}
						/>
					</a>
				</div>
			</div>
			<p className={styles.footerText}>
				GeekCoin - is a cryptocurrency on the Ton network designed to
				incentivize skill and knowledge sharing in the global education
				ecosystem
			</p>
			<div className={styles.listBottom}>
				<MainButton border='grey'>
					<a
						href='mailto:geekcoin.inc@proton.me'
						className={styles.link}
						target='_blank'
					>
						geekcoin.inc@proton.me
					</a>
				</MainButton>
				<MainButton border='grey'>
					<a className={styles.link} href={'/white-paper.pdf'} target='_blank'>
						White Paper
					</a>
				</MainButton>
			</div>
		</div>
	)
}
