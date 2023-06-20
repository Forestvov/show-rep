import { FC } from 'react'

import { CommercialBody } from '../CommercialBody/CommercialBody'
import { CommercialHeader } from '../CommercialHeader/CommercialHeader'
import { CommercialTabs } from '../CommercialTabs/CommercialTabs'

import s from './Commercial.module.css'

export const Commercial: FC = () => {
	return (
		<div className={s.commercial}>
			<CommercialHeader />
			<CommercialTabs />
			<CommercialBody />
		</div>
	)
}
