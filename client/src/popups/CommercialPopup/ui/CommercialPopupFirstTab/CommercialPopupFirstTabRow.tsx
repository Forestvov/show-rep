import { FC } from 'react'

import { ICommercialPopupRow } from './CommercialPopupFirstTab.interfaces'
import s from './CommercialPopupFirstTab.module.css'

export const CommercialPopupFirstTabRow: FC<ICommercialPopupRow> = props => {
	const { value, label } = props
	return (
		<div className={s.row}>
			<div className={s.row__label}>{label}</div>
			<div className={s.row__value}>{value}</div>
		</div>
	)
}
