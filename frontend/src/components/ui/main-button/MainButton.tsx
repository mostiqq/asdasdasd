import styles from './MainButton.module.scss'

interface Props {
	text?: string
	children?: React.ReactNode
	gap?: number
	border: 'white' | 'grey'
	onClick?: () => void
	width?: number
	style?: React.CSSProperties
}

export function MainButton({
	text,
	children,
	gap = 5,
	border,
	style,
	onClick,
	width
}: Props) {
	return (
		<button
			onClick={onClick}
			style={{
				gap: `${gap}px`,
				border: border === 'white' ? '4px solid #fff' : '4px solid #7d7d7d',
				width: width && `${width}px`,
				...style
			}}
			className={styles.btn}
		>
			{text && (
				<span
					style={{
						color: border === 'white' ? '#fff' : '#7d7d7d'
					}}
					className={styles.text}
				>
					{text}
				</span>
			)}
			{children}
		</button>
	)
}
