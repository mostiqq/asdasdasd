import styles from './OurTeamCard.module.scss'

interface Props {
	photo: string
	name: string
	role: string
}

export function OurTeamCard({ photo, name, role }: Props) {
	return (
		<div className={styles.card}>
			<img
				className={styles.img}
				src={`/${photo}.png`}
				alt={''}
				width={345}
				height={345}
			/>
			<span className={styles.name}>{name}</span>
			<span className={styles.role}>{role}</span>
		</div>
	)
}
