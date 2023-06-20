import cn from 'classnames'
import { FC } from 'react'

import { IStatus } from '../../ts/Status.interface'

import s from './Status.module.css'

export const Status: FC<IStatus> = props => {
	const { title, isBalance } = props

	return <span className={cn(s.status, { [s.balance]: isBalance })}>{title}</span>
}
