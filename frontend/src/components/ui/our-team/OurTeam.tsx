import { Title } from '../title/Title'
import styles from './OurTeam.module.scss'
import { OurTeamCard } from './OurTeamCard'

interface Props {
	lang: string | null
}

export function OurTeam({ lang }: Props) {
	return (
		<div className={styles.main}>
			<img
				className={styles.blurWhite}
				src='/blur-png.png'
				alt='header-logo'
				width={1800}
				height={1800}
			/>
			<Title
				text={
					lang === 'en'
						? 'Our Team'
						: lang === 'ukr'
							? 'Наша Команда'
							: '我们的指令 '
				}
			/>
			<div className={styles.listTop}>
				<OurTeamCard
					photo='director'
					name={
						lang === 'en'
							? 'Marutyan Tigran'
							: lang === 'ukr'
								? 'Марутян Тігран'
								: '蒂格兰-马鲁蒂扬'
					}
					role={
						lang === 'en'
							? 'GENERAL DIRECTOR'
							: lang === 'ukr'
								? 'Генеральний директор'
								: '总经理'
					}
				/>
				<OurTeamCard
					photo='founder'
					name={
						lang === 'en'
							? 'Gasparyan Murad'
							: lang === 'ukr'
								? 'Гаспарян Мурад'
								: '加斯帕里扬-穆拉德'
					}
					role={
						lang === 'en'
							? 'CO-FOUNDER'
							: lang === 'ukr'
								? 'Співзасновник'
								: '联合创始人'
					}
				/>
			</div>
			<div className={styles.listBottom}>
				<OurTeamCard
					photo='ceo'
					name={
						lang === 'en'
							? 'Grigoryan Nane'
							: lang === 'ukr'
								? 'Григорян Нане'
								: '格里戈良-纳内'
					}
					role={lang === 'en' ? 'CEO' : lang === 'ukr' ? 'CEO' : '首席执行官'}
				/>
				<OurTeamCard
					photo='developer'
					name={
						lang === 'en'
							? 'Chitchian Agas'
							: lang === 'ukr'
								? 'Чічян Агас'
								: '奇奇扬-阿加斯'
					}
					role={
						lang === 'en'
							? 'DEVELOPER'
							: lang === 'ukr'
								? 'Розробник'
								: '开发人员'
					}
				/>
				<OurTeamCard
					photo='designer'
					name={
						lang === 'en'
							? 'Khadir Zeynap'
							: lang === 'ukr'
								? 'Хадір Зейнап'
								: '卡迪尔-泽纳斯'
					}
					role={
						lang === 'en' ? 'DESIGNER' : lang === 'ukr' ? 'Дизайнер' : '设计师'
					}
				/>
			</div>
		</div>
	)
}
