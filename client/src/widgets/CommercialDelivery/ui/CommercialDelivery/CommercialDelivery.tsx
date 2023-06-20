import cn from 'classnames'
import { useStateSelector } from 'hooks/hookStore'
import { FC, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { Price } from 'shared/Price'
import { fixOverflowScroll } from 'utils/fixOverflowScroll'

import { CommercialDeliveryBody } from '../CommercialDeliveryBody/CommercialDeliveryBody'

import s from './CommercialDelivery.module.css'

const CommercialDelivery: FC = () => {
	const commercial = useStateSelector(state => state.commercial.commercial)
	const commercialTotal = useStateSelector(state => state.commercial.commercialTotal)

	const [openDelivery, setOpenDelivery] = useState<boolean>(false)

	const onClick = (isOpen: boolean) => {
		const $box = document.querySelector<HTMLElement>('.delivery__box')

		if ($box) {
			setOpenDelivery(isOpen)
			fixOverflowScroll(isOpen, true)
		}
	}

	return (
		<AnimateHeight className={cn(s.delivery, 'delivery__box')} height={commercial.length > 0 ? 'auto' : 0}>
			<div className='container'>
				<div className={s.delivery__top}>
					<div className={s.delivery__top_title}>
						Вы добавили <Price value={Number(commercialTotal)} useSign={false} /> кг товаров
					</div>
					<button
						className={cn(s.delivery__top_btn, { [s.more]: !openDelivery, [s.close]: openDelivery })}
						onClick={() => onClick(!openDelivery)}
					>
						{openDelivery ? (
							<div className={s.content}>
								<i />
								Продолжить покупки
							</div>
						) : (
							'Выбрать способ получения'
						)}
					</button>
				</div>
				<CommercialDeliveryBody isOpen={openDelivery} />
			</div>
		</AnimateHeight>
	)
}

export default CommercialDelivery
