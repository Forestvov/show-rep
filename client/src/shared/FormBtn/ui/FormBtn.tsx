import cn from 'classnames'
import { FC } from 'react'

import { IFormBtn } from '../ts/FormBtn.interface'

import s from './FormBtn.module.css'

export const FormBtn: FC<IFormBtn> = props => {
	const { text, isActive, onClick } = props

	return (
		<button className={cn(s.btn, { [s.active]: isActive })} onClick={() => onClick(text)}>
			{text}
		</button>
	)
}
