import cn from 'classnames'
import { FC } from 'react'

import s from './CurrentTime.module.css'

export const CurrentTime: FC = () => {
	return (
		<div className={cn(s.time, 'container')}>
			<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM9 5.625V10V10.4142L9.29289 10.7071L12.4179 13.8321L13.8321 12.4179L11 9.58579V5.625H9Z'
					fill='#DAC597'
				/>
			</svg>
			Сейчас во Владивостоке 12:14, пятница, 24 марта 2023 г.
			<span className={s.gmt}>(GMT+10)</span>
		</div>
	)
}
