import { FC } from 'react'

import s from './FooterContacts.module.css'

export const FooterContacts: FC = () => {
	return (
		<div className={s.contacts}>
			<h3 className={s.contacts__title}>ООО «Торговая Компания Нерей», 2000-2023</h3>
			<div className={s.contacts__inner}>
				<div className={s.contacts__label}>Контакты</div>
				<div className={s.contacts__row}>
					<div className={s.contacts__row_label}>Пн - Пт с 9:00 - 19:00</div>
					<div className={s.contacts__row_value}>
						<a href='tel:+7(423)2300540'>+7(423) 230-05-40</a>
					</div>
				</div>
				<div className={s.contacts__row}>
					<div className={s.contacts__row_label}>E-mail</div>
					<div className={s.contacts__row_value}>
						<a href='mailto:company@tk-nerey.ru'>company@tk-nerey.ru</a>
					</div>
				</div>
			</div>
		</div>
	)
}
