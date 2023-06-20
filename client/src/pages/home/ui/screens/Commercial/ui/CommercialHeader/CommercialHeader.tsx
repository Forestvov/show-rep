import { FC } from 'react'
import { SubTitlePage } from 'shared/SubTitlePage'

import s from './CommercialHeader.module.css'

export const CommercialHeader: FC = () => {
	return (
		<div className='container'>
			<SubTitlePage title={'Коммерческое предложение'} style={s.title} />
			<p className={s.text}>Предлагаем к рассмотрению ассортимент рыбопродукции для поставки в Ваш адрес</p>
		</div>
	)
}
