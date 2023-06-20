import cn from 'classnames'
import { commercialListData } from 'pages/home/ui/screens/Commercial/ui/CommercialList/CommercialList.data'
import { FC } from 'react'

import { CommercialItem } from '../CommercialItem/CommercialItem'

import s from './CommercialList.module.css'

export const CommercialList: FC = () => {
	return (
		<div className={cn(s.list, 'container')}>
			{commercialListData.map((commercial, idx) => (
				<CommercialItem {...commercial} key={idx} />
			))}
		</div>
	)
}
