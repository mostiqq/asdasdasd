import styles from './TimerModalBlock.module.scss'

interface Props {
	days: string
	hours: string
	minutes: string
}

export function TimerModalBlock({ days, hours, minutes }: Props) {
	return (
		<div className={styles.main}>
			<div className={styles.block}>
				<div className={styles.top}>
					<div className={styles.part}>{days[0]}</div>
					<div className={styles.part}>{days[1]}</div>
				</div>
				<div className={styles.bottom}>
					<span className={styles.span}>DAYS</span>
				</div>
			</div>
			<div className={styles.block}>
				<div className={styles.top}>
					<div className={styles.part}>{hours[0]}</div>
					<div className={styles.part}>{hours[1]}</div>
				</div>
				<div className={styles.bottom}>
					<span className={styles.span}>HOURS</span>
				</div>
			</div>
			<div className={styles.block}>
				<div className={styles.top}>
					<div className={styles.part}>{minutes[0]}</div>
					<div className={styles.part}>{minutes[1]}</div>
				</div>
				<div className={styles.bottom}>
					<span className={styles.span}>MINUTES</span>
				</div>
			</div>
		</div>
	)
}
