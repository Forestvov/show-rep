import cn from 'classnames'
import { FC, useState } from 'react'

import { IInputCounter } from '../ts/InputCounter.interface'

import s from './InputCounter.module.css'

export const InputCounter: FC<IInputCounter> = props => {
	const { styleWrapper, styleInput, styleBtn } = props

	const [value, setValue] = useState<number>(1)

	return (
		<div className={cn(s.wrapper, styleWrapper)}>
			<button
				className={cn(s.btn, s.minus, styleBtn)}
				disabled={value <= 1}
				onClick={() => setValue(prevState => prevState - 1)}
			>
				<span />
			</button>
			<input
				className={cn(s.input, styleInput)}
				type='number'
				value={value}
				onChange={e => setValue(+e.target.value)}
			/>
			<button className={cn(s.btn, s.plus, styleBtn)} onClick={() => setValue(prevState => prevState + 1)}>
				<span />
				<span />
			</button>
		</div>
	)
}
