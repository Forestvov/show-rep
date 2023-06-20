import cn from 'classnames'
import { FC } from 'react'

import { FooterContacts } from '../FooterContacts/FooterContacts'
import { FooterForm } from '../FooterForm/FooterForm'

import s from './Footer.module.css'
import { FooterBottom } from './FooterBottom'

export const Footer: FC = () => {
	return (
		<footer className={cn(s.footer, 'container')}>
			<div className={s.footer__top}>
				<FooterForm />
				<FooterContacts />
			</div>
			<FooterBottom />
		</footer>
	)
}
