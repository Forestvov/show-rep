import cn from 'classnames'
import { useStateSelector } from 'hooks/hookStore'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import s from './Footer.module.css'

export const FooterBottom: FC = () => {
	const commercial = useStateSelector(state => state.commercial.commercial)

	return (
		<div className={cn(s.footer__bottom, { [s.mb]: commercial.length > 0 })}>
			<Link to={'/'}>Политика конфиденциальности</Link>
			<span>
				Разработка сайта - <Link to={'/'}>Digital-агентство House</Link>
			</span>
		</div>
	)
}
