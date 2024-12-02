import { useEffect, useState } from 'react'
import styles from './Timer.module.scss'
import { TimerBlock } from './TimerBlock/TimerBlock'

interface Props {
	className?: string

	lang: string | null
}

export function Timer({ className, lang }: Props) {
	const [seconds, setSeconds] = useState('00')
	const [minutes, setMinutes] = useState('00')
	const [hours, setHours] = useState('00')
	const [days, setDays] = useState('00')

	useEffect(() => {
		const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24
		const dayMonth = '1/10/2025'
		const listingDay = dayMonth
		const countDown = new Date(listingDay).getTime()
		let x = setInterval(function () {
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
			setSeconds(
				String(Math.floor((distance % minute) / second)).length == 2
					? String(Math.floor((distance % minute) / second))
					: '0' + Math.floor((distance % minute) / second)
			)
		}, 0)
	}, [])
	return (
		<div className={styles.timer}>
			<img
				className={styles.blurWhite}
				src='/blur-png.png'
				alt='header-logo'
				width={1200}
				height={1200}
			/>
			<img
				className={styles.blurWhiteTop}
				src='/blur-png.png'
				alt='header-logo'
				width={1200}
				height={1200}
			/>
			<TimerBlock lang={lang} hours={hours} minutes={minutes} days={days} />
		</div>
	)
}
