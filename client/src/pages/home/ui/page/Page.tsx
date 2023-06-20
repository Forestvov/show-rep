import { FC, Suspense, lazy } from 'react'
import { TitlePage } from 'shared/TitlePage'

import { Commercial } from '../screens/Commercial'
import { CurrentTime } from '../screens/CurrentTime'
import { NotificationList } from '../screens/Notification'

import s from './Page.module.css'

const CommercialPopupLazy = lazy(() => import('popups/CommercialPopup/ui/CommercialPopup/CommercialPopup'))
const CommercialDeliveryLazy = lazy(() => import('widgets/CommercialDelivery/ui/CommercialDelivery/CommercialDelivery'))

export const Page: FC = () => {
	return (
		<>
			<section className={s.section}>
				<TitlePage title='Добрый день, Мария' style={s.title} />
				<CurrentTime />
				<NotificationList />
				<Commercial />
			</section>
			<Suspense fallback={''}>
				<CommercialPopupLazy />
			</Suspense>
			<Suspense fallback={''}>
				<CommercialDeliveryLazy />
			</Suspense>
		</>
	)
}
