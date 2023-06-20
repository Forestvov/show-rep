import cn from 'classnames'
import { FC } from 'react'

import { ITitlePage } from './TitlePage.interface'
import s from './TitlePage.module.css'

export const TitlePage: FC<ITitlePage> = props => {
	const { title, style } = props

	return <h1 className={cn(s.title, 'container', style)}>{title}</h1>
}
