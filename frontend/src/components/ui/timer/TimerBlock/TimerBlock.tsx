import styles from './TimerBlock.module.scss'

interface Props {
	days: string
	hours: string
	minutes: string
	lang: string | null
}

export function TimerBlock({ days, hours, minutes, lang }: Props) {
	return (
		<div className={styles.main}>
			<div className={styles.block}>
				<div className={styles.top}>
					<div className={styles.part}>{days[0]}</div>
					<div className={styles.part}>{days[1]}</div>
				</div>
				<div className={styles.bottom}>
					<span className={styles.span}>
						{lang === 'en' ? 'DAYS' : lang === 'china' ? '天数' : 'ДНІВ'}
					</span>
				</div>
			</div>
			<div className={styles.block}>
				<div className={styles.top}>
					<div className={styles.part}>{hours[0]}</div>
					<div className={styles.part}>{hours[1]}</div>
				</div>
				<div className={styles.bottom}>
					<span className={styles.span}>
						{lang === 'en' ? 'HOURS' : lang === 'china' ? '小时' : 'ГОДИН'}
					</span>
				</div>
			</div>
			<div className={styles.block}>
				<div className={styles.top}>
					<div className={styles.part}>{minutes[0]}</div>
					<div className={styles.part}>{minutes[1]}</div>
				</div>
				<div className={styles.bottom}>
					<span className={styles.span}>
						{lang === 'en' ? 'MINUTES' : lang === 'china' ? '分钟' : 'ХВИЛИН'}
					</span>
				</div>
			</div>
		</div>
	)
}
