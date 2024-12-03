import { useEffect, useState } from 'react'
import styles from './TimerModal.module.scss'
import { TimerModalBlock } from './TimerModalBlock'

interface Props {
	date: string
}

export function TimerModal({ date }: Props) {
	const [minutes, setMinutes] = useState('00')
	const [hours, setHours] = useState('00')
	const [days, setDays] = useState('00')

	useEffect(() => {
		const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24
		const dayMonth = date
		const listingDay = dayMonth
		const countDown = new Date(listingDay).getTime()
		setInterval(function () {
			const now = new Date().getTime(),
				distance = countDown - now

			setDays(
				String(Math.floor(distance / day)).length == 2
					? String(Math.floor(distance / day))
					: '0' + Math.floor(distance / day)
			)
			setHours(
				String(Math.floor((distance % day) / hour)).length == 2
					? String(Math.floor((distance % day) / hour))
					: '0' + Math.floor((distance % day) / hour)
			)
			setMinutes(
				String(Math.floor((distance % hour) / minute)).length == 2
					? String(Math.floor((distance % hour) / minute))
					: '0' + Math.floor((distance % hour) / minute)
			)
		}, 0)
	}, [])
	return (
		<div className={styles.timer}>
			<TimerModalBlock hours={hours} minutes={minutes} days={days} />
			<img
				className={styles.modalBrainRight}
				src={'/modal-brain.svg'}
				alt='modal-img'
				width={72}
				height={72}
			/>
			<img
				className={styles.modalBrainLeft}
				src={'/modal-brain.svg'}
				alt='modal-img'
				width={72}
				height={72}
			/>
			<img
				className={styles.modalBrainBottom}
				src={'/modal-brain.svg'}
				alt='modal-img'
				width={72}
				height={72}
			/>
		</div>
	)
}
