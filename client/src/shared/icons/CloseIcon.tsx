import { FC } from 'react'

interface ICloseIcon {
	fill?: string
}

export const CloseIcon: FC<ICloseIcon> = ({ fill = '#FFFFFF' }) => {
	return (
		<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M1 1L11 11' stroke={fill} strokeWidth='2' />
			<path d='M1 11L11 0.999999' stroke={fill} strokeWidth='2' />
		</svg>
	)
}
