import styles from './Title.module.scss'
interface Props {
	text: string
}

export function Title({ text }: Props) {
	return <h2 className={styles.title}>{text}</h2>
}
