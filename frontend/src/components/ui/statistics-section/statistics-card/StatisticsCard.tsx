import styles from './StatisticsCard.module.scss'

interface Props {
	textTop: string
	textBottom: string
	word: 'total tokens' | 'token date'
}

export function StatisticsCard({ textTop, word, textBottom }: Props) {
	return (
		<div className={styles.main}>
			<div className={styles.text}>
				<span className={styles.span}>{textTop}</span>
				<span className={styles.span}>{textBottom}</span>
			</div>

			<img
				className={styles.img}
				src={word === 'total tokens' ? '/total-tokens.svg' : '/token-date.svg'}
				alt={''}
				width={325}
				height={325}
			/>
		</div>
	)
}
