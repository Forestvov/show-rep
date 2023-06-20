import { FC } from 'react'
import AnimateHeight from 'react-animate-height'

import { CommercialDeliveryForm } from '../CommercialDeliveryForm/CommercialDeliveryForm'
import { CommercialDeliveryProgressBar } from '../CommercialDeliveryProgressBar/CommercialDeliveryProgressBar'

import { ICommercialDeliveryBody } from './CommercialDeliveryBody.interface'
import s from './CommercialDeliveryBody.module.css'

export const CommercialDeliveryBody: FC<ICommercialDeliveryBody> = props => {
	const { isOpen } = props
	return (
		<AnimateHeight height={isOpen ? 'auto' : 0}>
			<div className={s.body}>
				<CommercialDeliveryProgressBar />
				<CommercialDeliveryForm />
			</div>
		</AnimateHeight>
	)
}
