import { FC } from 'react'
import { NumericFormat } from 'react-number-format'

import { IPrice } from '../ts/Price.interface'

import s from './Price.module.css'

export const Price: FC<IPrice> = props => {
	const { value, useSign = true } = props

	return (
		<span className={s.price}>
			<NumericFormat displayType='text' value={Math.round(value)} thousandSeparator=' ' />
			{useSign ? '₽' : ''}
		</span>
	)
}
