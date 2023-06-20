import cn from 'classnames'
import { CommercialShippingIcons } from 'features/commercial/CommercialShipping/ui/CommercialShippingIcons'
import { FC } from 'react'
import { InputCounter } from 'shared/InputCounter'

import { ICommercialShipping } from '../ts/CommercialShipping.interface'

import s from './CommercialShipping.module.css'

export const CommercialShipping: FC<ICommercialShipping> = props => {
	const { type, name, isActive } = props

	return (
		<button className={cn(s.btn, { [s.active]: isActive })}>
			<div className={s.btn__top}>
				<CommercialShippingIcons type={type} />
				<span>{name}</span>
			</div>
			<div className={s.btn__bottom}>
				<div className={s.btn__bottom_col}>
					<div className={s.btn__bottom_label}>Макс. объем нетто</div>
					<div className={s.btn__bottom_value}>3,5 тонн</div>
				</div>
				<div className={s.btn__bottom_col}>
					<div className={s.btn__bottom_label}>Срок доставки</div>
					<div className={s.btn__bottom_value}>10 дней</div>
				</div>
				<div className={s.btn__input}>
					<InputCounter />
				</div>
			</div>
		</button>
	)
}
