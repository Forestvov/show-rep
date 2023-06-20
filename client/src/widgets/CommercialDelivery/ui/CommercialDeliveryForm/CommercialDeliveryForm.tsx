import { CommercialShipping } from 'features/commercial'
import { FC, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { FormBtn } from 'shared/FormBtn'
import { InputBlock } from 'shared/InputBlock'

import s from './CommercialDeliveryForm.module.css'

export const CommercialDeliveryForm: FC = () => {
	const [deliveryType, setDeliveryType] = useState<null | string>(null)

	return (
		<div className={s.form}>
			<InputBlock label={'Способ получения'}>
				<div className={s.form__trio}>
					<FormBtn text={'Доставка'} onClick={setDeliveryType} isActive={deliveryType === 'Доставка'} />
					<FormBtn text={'Самовывоз'} onClick={setDeliveryType} isActive={deliveryType === 'Самовывоз'} />
					<FormBtn
						text={'Самовывоз с погрузкой'}
						onClick={setDeliveryType}
						isActive={deliveryType === 'Самовывоз с погрузкой'}
					/>
				</div>
			</InputBlock>

			<div className={s.form__space} />

			<AnimateHeight className={s.form__body} height={deliveryType ? 'auto' : 0}>
				<InputBlock label={'Выберите город'}></InputBlock>

				<div className={s.form__space} />

				<InputBlock label={'Способ перевозки'} flexStart>
					<div className={s.form__btns}>
						<CommercialShipping type='car' name='Автомобиль' isActive />
						<CommercialShipping type='container' name='Контейнер 20 фут' />
						<CommercialShipping type='container' name='Контейнер 40 фут' />
					</div>
				</InputBlock>

				<div className={s.form__space} />

				<InputBlock label={''}>
					<button className={s.form__btn}>
						<span>Рассчитать заказ</span>
						<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M-1.74846e-07 5L12 5M12 5L8 9M12 5L8 1' stroke='white' strokeWidth='1.4' />
						</svg>
					</button>
				</InputBlock>
			</AnimateHeight>
		</div>
	)
}
