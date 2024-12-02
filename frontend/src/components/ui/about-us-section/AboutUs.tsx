import { Title } from '../title/Title'
import { AboutBlock } from './about-block/AboutBlock'
import styles from './AboutUs.module.scss'

interface Props {
	lang: string | null
}

export function AboutUs({ lang }: Props) {
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
					lang === 'en' ? 'About Us' : lang === 'ukr' ? 'Про Нас' : '关于极客币'
				}
			/>
			<div className={styles.list}>
				<AboutBlock
					textAlign='start'
					text={
						lang === 'en'
							? 'GeekCoin - is a cryptocurrency on the Ton network designed to incentivize skill and knowledge sharing in the global education ecosystem.'
							: lang === 'ukr'
								? 'GeekCoin - це криптовалюта в системі TON, призначена для стимулювання обміну навичками та знаннями в глобальній освітній екосистемі.'
								: 'GeekCoin 是 TON 网络上的一种加密货币，旨在激励全球教育生态系统中的技能和知识共享。'
					}
				/>
				<AboutBlock
					textAlign='center'
					text={
						lang === 'en'
							? 'This token will be used to incentivize educational courses, mentoring, sharing professional services, and to reward users for developing their skills.'
							: lang === 'ukr'
								? 'Цей токен буде використовуватися для стимулювання освітніх курсів, наставництва, обміну професійними послугами та для заохочення користувачів за розвиток своїх умінь.'
								: '这种代币将用于激励教育课程、指导、共享专业服务，并奖励用户发展技能。'
					}
				/>
				<AboutBlock
					textAlign='end'
					text={
						lang === 'en'
							? 'With GeekCoin, you can not only learn, but also teach, get rewards for teaching others or even for practicing what you have learned.'
							: lang === 'ukr'
								? 'За допомогою GeekCoin ви зможете не тільки навчатися, а й викладати, отримувати нагороди за навчання інших або навіть за практичне застосування отриманих знань.'
								: '有了 GeekCoin，您不仅可以学习，还可以教书育人，还可以因教授他人或实际应用自己的知识而获得奖励。'
					}
				/>
			</div>
		</div>
	)
}
