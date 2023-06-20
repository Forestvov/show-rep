import cn from 'classnames'
import { FC } from 'react'

import { HeaderContact } from '../HeaderContact/HeaderContact'
import { HeaderLink } from '../HeaderLink/HeaderLink'
import { HeaderIconCalc, HeaderIconUser } from '../icons/index'

import s from './Header.module.css'

export const Header: FC = () => {
	return (
		<header className={cn(s.header, 'container')}>
			<HeaderContact />
			<HeaderLink title='Мария Новикова' link={'/profile'} icon={<HeaderIconUser />} />
			<HeaderLink title='Заказ на просчет' link={'/miscalculation'} icon={<HeaderIconCalc />} />
		</header>
	)
}
