import cn from 'classnames'
import { FC } from 'react'

import { ITitlePage } from './SubTitlePage.interface'
import s from './SubTitlePage.module.css'

export const SubTitlePage: FC<ITitlePage> = props => {
	const { title, style } = props

	return <h2 className={cn(s.title, style)}>{title}</h2>
}
