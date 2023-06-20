import { commercialActions } from 'app/store/slices/commercial/commercialReducer'
import cn from 'classnames'
import { useActionCreators, useStateSelector } from 'hooks/hookStore'
import { FC, useRef } from 'react'
import Popup from 'reactjs-popup'
import { Status } from 'shared/Status'
import { SubTitlePage } from 'shared/SubTitlePage'
import { fixOverflowScroll } from 'utils/fixOverflowScroll'

import { CommercialPopupTabs } from '../CommercialPopupTabs/CommercialPopupTabs'

import s from './CommercialPopup.module.css'

const CommercialPopup: FC = () => {
	const isOpen = useStateSelector(state => state.commercial.openPopup)

	const ref = useRef<any>()

	const actions = useActionCreators(commercialActions)

	const togglePopup = () => {
		actions.togglePopup()
	}
	const onHandlerOpenPopup = () => {
		fixOverflowScroll(true)
	}

	const onHandlerClosePopup = () => {
		fixOverflowScroll(false)
		togglePopup()
	}

	return (
		<Popup
			className={cn(s.popup, 'commercial')}
			ref={ref}
			modal
			open={isOpen}
			onOpen={onHandlerOpenPopup}
			onClose={onHandlerClosePopup}
		>
			<div className={s.body}>
				<div className={s.body__statuses}>
					<Status title={'В наличии'} isBalance />
				</div>
				<SubTitlePage style={s.body__title} title={'Кальмар командорский (тушка)'} />
				<p className={s.body__text}>«Солборг СРТМ», Август 2022 г. - Октябрь 2022 г., 1/24, МЕШОК, ТУ 18</p>
				<CommercialPopupTabs />
			</div>
		</Popup>
	)
}

export default CommercialPopup
