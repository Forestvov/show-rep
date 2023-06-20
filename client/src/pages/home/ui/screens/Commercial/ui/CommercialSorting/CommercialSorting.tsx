import { FC } from 'react'

import s from './CommercialSorting.module.css'

export const CommercialSorting: FC = () => {
	return (
		<div className={s.sorting}>
			<svg width='12' height='11' viewBox='0 0 12 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<rect width='6' height='2' rx='1' fill='#070916' />
				<rect y='4.5' width='9' height='2' rx='1' fill='#070916' />
				<rect y='9' width='12' height='2' rx='1' fill='#070916' />
			</svg>
			Сортировать: <span>по убыванию цены</span>
		</div>
	)
}
