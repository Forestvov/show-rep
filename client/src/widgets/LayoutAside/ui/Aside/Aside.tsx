import { FC } from 'react'

import { BackgroundLogo } from '../BackgroundLogo/BackgrounLogo'
import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'

import s from './Aside.module.css'

export const Aside: FC = () => {
	return (
		<aside className={s.aside}>
			<div className={s.aside__content}>
				<Logo />
				<Navigation />
				<BackgroundLogo />
			</div>
		</aside>
	)
}
