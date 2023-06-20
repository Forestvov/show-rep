import { commercialActions } from 'app/store/slices/commercial/commercialReducer'
import cn from 'classnames'
import { useActionCreators } from 'hooks/hookStore'
import { CommercialCardBtn } from 'pages/home/ui/screens/Commercial/ui/CommercialCard/CommercialCardBtn'
import { FC } from 'react'
import { Status } from 'shared/Status'

import { ICommercialItemCard } from '../CommercialItem/CommercialItem.interface'

import s from './CommercialCard.module.css'

export const CommercialCard: FC<ICommercialItemCard> = props => {
	const { weight, price, char, name, statuses, discount } = props

	const actions = useActionCreators(commercialActions)

	const openPopup = () => {
		actions.togglePopup()
	}

	return (
		<div className={s.card}>
			<div className={s.card__top}>
				<div className={s.cart__top_left}>
					{statuses.length > 0 && (
						<div className={s.card__statuses}>
							{statuses.map((status, idx) => (
								<Status title={status} isBalance={status.toLowerCase() === 'в наличии'} key={idx} />
							))}
						</div>
					)}
					<h4 className={s.card__title} onClick={openPopup}>
						{name}
					</h4>
				</div>
				<div className={s.card__top_right}>
					<i></i>
					Скидка будет действовать еще <span>12 часов 47 минут</span>
				</div>
			</div>
			<div className={s.card__bottom}>
				<div className={cn(s.card__col, s.card__col_first)}>
					<div className={s.card__col_label}>Характеристики</div>
					<div className={s.card__col_value}>{char}</div>
				</div>
				<div className={cn(s.card__col, s.card__col_second)}>
					<div className={s.card__col_label}>Кол-во, кг</div>
					<div className={s.card__col_value}>{weight}</div>
				</div>
				<div className={cn(s.card__col, s.card__col_third)}>
					<div className={s.card__col_label}>Цена, ₽/кг</div>
					<div className={s.card__col_value}>
						{discount ?? price}
						{discount ? <span>{price}</span> : null}
					</div>
				</div>
				<CommercialCardBtn name={name} weight={weight} />
			</div>
		</div>
	)
}
