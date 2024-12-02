import styles from './AboutBlock.module.scss'

interface Props {
	text: string
	textAlign: 'start' | 'end' | 'center'
}

export function AboutBlock({ text, textAlign }: Props) {
	return (
		<p
			style={{
				textAlign,
				borderLeft: textAlign === 'center' ? '5px solid #fff' : 'none',
				borderRight: textAlign === 'center' ? '5px solid #fff' : 'none',
				padding:
					textAlign === 'center'
						? '0 40px'
						: textAlign === 'start'
							? '0 40px 0 0'
							: '0 0 0 40px',
			}}
			className={styles.text}
		>
			{text}
		</p>
	)
}
