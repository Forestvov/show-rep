import cn from 'classnames'
import { FC } from 'react'
import { CloseIcon } from 'shared/icons'

import s from './CommercialBanner.module.css'

export const CommercialBanner: FC = () => {
	return (
		<div className={cn(s.banner, 'container')}>
			<h2 className={s.banner__title}>Большое поступление минтая 27 марта</h2>
			<button className={s.banner__close}>
				<CloseIcon />
			</button>
			<img className={s.banner__image} src='/images/home/banner.png' alt='image' />
		</div>
	)
}
