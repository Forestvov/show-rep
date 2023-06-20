import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IHeaderLink } from './HeaderLink.interface'
import s from './HeaderLink.module.css'

export const HeaderLink: FC<IHeaderLink> = props => {
	const { link, title, icon } = props

	return (
		<Link className={s.link} to={link}>
			<i className={s.link__icon}>{icon}</i>
			<span className={s.link__text}>{title}</span>
		</Link>
	)
}
