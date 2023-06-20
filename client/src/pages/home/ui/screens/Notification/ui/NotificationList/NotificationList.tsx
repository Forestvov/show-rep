import cn from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ArrowSmallRight } from 'shared/icons'

import { NotificationItem } from '../NotificationItem/NotificationItem'

import s from './NotificationList.module.css'

export const NotificationList: FC = () => {
	return (
		<div className={cn(s.notification, 'container')}>
			<div className={s.notification__header}>
				<h3 className={s.notification__title}>Центр уведомлений</h3>
				<Link className={s.notification__more} to={'/notifications'}>
					Смотреть все
					<ArrowSmallRight />
				</Link>
			</div>
			<div className={s.notification__list}>
				<NotificationItem title={'Не забудьте оплатить счет №4768'} type={'pay'} />
				<NotificationItem check title={'Ваш заказ №423 собран и передан в доставку'} type={'delivery'} />
				<NotificationItem title={'У вас 1 непрочитанное сообщение'} type={'support'} />
			</div>
		</div>
	)
}
