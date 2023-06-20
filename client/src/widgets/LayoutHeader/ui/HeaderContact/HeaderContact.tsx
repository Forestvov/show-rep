import { FC } from 'react'

import s from './HeaderContact.module.css'

export const HeaderContact: FC = () => {
	return (
		<div className={s.contact}>
			<div className={s.contact__label}>Пн - Пт с 9:00 - 19:00</div>
			<a className={s.contact__phone} href='tell:+8(966)-273-40-88'>
				8 (966)-273-40-88
			</a>
		</div>
	)
}
