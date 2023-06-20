import { FC } from 'react'

import { CommercialBanner } from '../CommercialBanner/CommercialBanner'
import { CommercialInfo } from '../CommercialInfo/CommercialInfo'
import { CommercialList } from '../CommercialList/CommercialList'

import s from './CommercialBody.module.css'

export const CommercialBody: FC = () => {
	return (
		<div className={s.body}>
			<CommercialBanner />
			<CommercialList />
			<CommercialInfo />
		</div>
	)
}
