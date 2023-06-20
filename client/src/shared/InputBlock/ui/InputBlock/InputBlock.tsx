import cn from 'classnames'
import { FC } from 'react'

import { IInputBlock } from '../../ts/InputBlock.interface'

import s from './InputBlock.module.css'

export const InputBlock: FC<IInputBlock> = props => {
	const { children, label, flexStart } = props

	return (
		<div className={cn(s.label, { [s.flexStart]: flexStart })}>
			<span className={s.label__name}>{label}</span>
			{children}
		</div>
	)
}
