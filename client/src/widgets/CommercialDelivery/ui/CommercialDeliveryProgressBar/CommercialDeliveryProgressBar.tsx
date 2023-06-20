import { FC } from 'react'
import Popup from 'reactjs-popup'
import { Price } from 'shared/Price'

import s from './CommercialDeliveryProgressBar.module.css'

const cards = [
	{
		color: '#FFD450',
		price: 40489,
		name: 'Филе кальмара командорского, фасованное по 1кг, короб 1/21',
	},
	{
		color: '#F08E6C',
		price: 10250,
		name: 'Филе кальмара командорского, фасованное по 1кг, короб 1/21',
	},
	{
		color: '#9CD05D',
		price: 3200,
		name: 'Филе кальмара командорского, фасованное по 1кг, короб 1/21',
	},
	{
		color: '#9088F3',
		price: 10000,
		name: 'Филе кальмара командорского, фасованное по 1кг, короб 1/21',
	},
]

const total = 63939

export const CommercialDeliveryProgressBar: FC = () => {
	return (
		<div className={s.body}>
			<div className={s.body__title}>
				Сумма заказа: <Price value={total} />
			</div>
			<div className={s.body__line}>
				{cards.map((point, idx) => (
					<div
						className={s.body__line_point}
						style={{ backgroundColor: point.color, width: `${(point.price * 100) / total}%` }}
						key={idx}
					/>
				))}
			</div>
			<div className={s.body__points}>
				{cards.map((point, idx) => (
					<Popup
						className='point__tooltip'
						key={idx}
						trigger={_ => (
							<div className={s.body__point}>
								<i className={s.body__point_icon} style={{ backgroundColor: point.color }} />
								<div className={s.body__point_name}>{point.name}</div>
								<div className={s.body__point_price}>
									<Price value={Number(point.price)} />
								</div>
							</div>
						)}
						position='top left'
						on={['hover']}
					>
						<div className={s.body__point_tooltip}>{point.name}</div>
					</Popup>
				))}
			</div>
		</div>
	)
}
