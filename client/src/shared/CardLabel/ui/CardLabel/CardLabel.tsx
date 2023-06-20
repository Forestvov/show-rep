import cn from 'classnames'
import { FC } from 'react'

import { ICardLabel } from '../../ts/CardLabel.interface'

import s from './CardLabel.module.css'

export const CardLabel: FC<ICardLabel> = props => {
	const { title, style } = props

	return (
		<div className={cn(s.label, style)}>
			<h3 className={s.label__title}>{title}</h3>
		</div>
	)
}
