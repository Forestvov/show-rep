import { FC } from 'react'
import { CardLabel } from 'shared/CardLabel/ui'

import { CommercialCard } from '../CommercialCard/CommercialCard'

import { ICommercialItem } from './CommercialItem.interface'
import s from './CommercialItem.module.css'

export const CommercialItem: FC<ICommercialItem> = props => {
	const { label, cards } = props
	return (
		<div className={s.item}>
			<CardLabel style={s.item__label} title={label} />
			{cards.map(card => (
				<CommercialCard {...card} key={card.id} />
			))}
		</div>
	)
}
