import styles from './We.module.scss'

export function We() {
	return (
		<div className={styles.we}>
			<div className={styles.weLeft}>
				<h2 className={styles.weTitle}>WE</h2>
				<h2 className={styles.weTitle}>ARE</h2>
				<h2 className={styles.weTitle}>GEEK</h2>
			</div>

			<div className={styles.weTop}>WE ARE</div>

			<img
				className={styles.blurWhite}
				src='/blur-png.png'
				alt='header-logo'
				width={1200}
				height={1200}
			/>

			<img
				className={styles.weImg}
				src='/we-logo.png'
				alt='geek-logo'
				width={573}
				height={573}
			/>

			<div className={styles.weBottom}>GEEK</div>
		</div>
	)
}
