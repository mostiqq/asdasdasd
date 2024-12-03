import { useEffect, useState } from 'react'
import { Header } from './components/ui/header/Header'
import { Timer } from './components/ui/timer/Timer'
import { We } from './components/ui/we-section/We'
import { AboutUs } from './components/ui/about-us-section/AboutUs'
import { Statistics } from './components/ui/statistics-section/Statistics'
import { OurTeam } from './components/ui/our-team/OurTeam'
import { Footer } from './components/ui/footer/Footer'

interface Props {
	className?: string
}

export function App({ className }: Props) {
	const [language, setLanguage] = useState<string | null>('en')
	useEffect(() => {
		if (!localStorage.getItem('language')) {
			localStorage.setItem('language', 'en')
			setLanguage('en')
		}
		setLanguage(localStorage.getItem('language'))
	}, [])
	return (
		<div className={className}>
			<Header />
			<Timer lang={language} />
			<We />
			<AboutUs lang={language} />
			<Statistics lang={language} />
			<OurTeam lang={language} />
			<Footer />
		</div>
	)
}
