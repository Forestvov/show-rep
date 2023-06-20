import cn from 'classnames'
import { FC } from 'react'

import s from './CommercialPopupFirstTab.module.css'
import { CommercialPopupFirstTabRow } from './CommercialPopupFirstTabRow'

export const CommercialPopupFirstTab: FC<{ show: boolean }> = ({ show }) => {
	return (
		<div className={cn(s.tab, { [s.show]: show })}>
			<CommercialPopupFirstTabRow value={'«Солборг СРТМ»'} label={'Расшифровка'} />
			<CommercialPopupFirstTabRow value={'Август 2022 г. - Октябрь 2022 г.'} label={'Дата'} />
			<CommercialPopupFirstTabRow value={'«1/24»'} label={'Расшифровка'} />
			<CommercialPopupFirstTabRow value={'МЕШОК, ТУ 18'} label={'Расшифровка'} />
		</div>
	)
}
