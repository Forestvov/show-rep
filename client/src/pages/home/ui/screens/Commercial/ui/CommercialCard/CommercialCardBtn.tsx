import { commercialActions } from 'app/store/slices/commercial/commercialReducer'
import cn from 'classnames'
import { useActionCreators } from 'hooks/hookStore'
import { FC, useState } from 'react'
import { InputCounter } from 'shared/InputCounter'

import { ICommercialCard } from './CommercialCard.interface'
import s from './CommercialCard.module.css'

export const CommercialCardBtn: FC<ICommercialCard> = props => {
	const { name, weight } = props

	const [isAdded, setIsAdded] = useState<boolean>(false)

	const actions = useActionCreators(commercialActions)

	const onClick = ({ name, weight }: ICommercialCard) => {
		setIsAdded(true)
		actions.addToCommercial({ commercial: { name, weight } })
	}

	return (
		<div className={cn(s.card__col, s.card__col_fourth)}>
			{isAdded ? (
				<InputCounter styleWrapper={s.card__col_input} />
			) : (
				<button className={s.card__btn} onClick={() => onClick({ name, weight })}>
					Заказать
				</button>
			)}
		</div>
	)
}
