import { Title } from '../title/Title'
import { StatisticsCard } from './statistics-card/StatisticsCard'
import styles from './Statistics.module.scss'

interface Props {
	lang: string | null
}

export function Statistics({ lang }: Props) {
	return (
		<div className={styles.main}>
			<img
				className={styles.blurWhite}
				src='/blur-png.png'
				alt='header-logo'
				width={1800}
				height={1800}
			/>
			<img
				className={styles.blurWhiteBottom}
				src='/blur-png.png'
				alt='header-logo'
				width={1800}
				height={1800}
			/>
			<Title
				text={
					lang === 'en'
						? 'Statistics'
						: lang === 'ukr'
							? 'Статистика'
							: '数据统计'
				}
			/>
			<div className={styles.list}>
				<StatisticsCard
					textTop={
						lang === 'en'
							? 'TOTAL TOKENS:'
							: lang === 'ukr'
								? 'ЗАГАЛЬНА КІЛЬКІСТЬ ТОКЕНІВ'
								: '代币总数'
					}
					textBottom='300 000 GEEK'
					word='total tokens'
				/>
				<StatisticsCard
					textTop={
						lang === 'en'
							? 'TOKEN BURNING'
							: lang === 'ukr'
								? 'ДАТА СПАЛЮВАННЯ ТОКЕНІВ'
								: '代币燃烧日期'
					}
					textBottom={lang === 'en' ? 'DATE:' : ''}
					word='token date'
				/>
			</div>
		</div>
	)
}
