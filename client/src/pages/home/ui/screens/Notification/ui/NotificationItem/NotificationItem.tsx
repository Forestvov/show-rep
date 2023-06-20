import cn from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { INotificationItem } from './NotificationItem.interface'
import s from './NotificationItem.module.css'
import { NotificationItemIcon } from './NotificationItemIcon'

export const NotificationItem: FC<INotificationItem> = props => {
	const { type, title, check } = props
	return (
		<div className={cn(s.item, s[type])}>
			<div className={s.item__label}>
				{type === 'pay' ? 'платежи' : null}
				{type === 'support' ? 'поддержка' : null}
				{type === 'delivery' ? 'доставка' : null}
			</div>
			<i className={s.item__icon}>
				{check ? <i className={s.item__check} /> : null}
				<NotificationItemIcon type={type} />
			</i>
			<div className={s.item__title}>{title}</div>
			<Link className={s.item__more} to={'/'}>
				{type === 'pay' ? 'Посмотреть счет' : null}
				{type === 'support' ? 'Посмотреть' : null}
				{type === 'delivery' ? 'Посмотреть заказ' : null}
			</Link>

			<div className={s.item__bg} />
		</div>
	)
}
