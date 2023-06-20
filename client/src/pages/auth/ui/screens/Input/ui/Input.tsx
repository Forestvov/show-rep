import cn from 'classnames'
import { FC, useState } from 'react'

import { IInput } from '../ts/Input.interface'

import s from './Input.module.css'

export const Input: FC<IInput> = props => {
	const { type, placeholder, style } = props

	const [showPassword, setShowPassword] = useState<boolean>(false)

	if (type === 'password') {
		return (
			<div className={cn(s.content, style)}>
				<input className={s.input} type={showPassword ? 'text' : 'password'} placeholder={placeholder} />
				<button className={s.content__btn} type='button' onClick={() => setShowPassword(prevState => !prevState)}>
					{showPassword ? (
						<svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M21 12C18.2563 15.0928 14.5892 17 10.5528 17C6.46357 17 2.7701 15.1701 0 12C2.7701 8.8299 6.48995 7 10.5528 7C14.5628 7 18.2299 8.90722 21 12ZM14.4573 12C14.4573 9.86082 12.6897 8.13402 10.5 8.13402C8.3103 8.13402 6.54271 9.86082 6.54271 12C6.54271 14.1392 8.3103 15.866 10.5 15.866C12.6897 15.866 14.4573 14.1392 14.4573 12ZM10.5002 9.16495C8.89091 9.16495 7.5982 10.4278 7.5982 12C7.5982 13.5592 8.86971 14.8142 10.4605 14.8348C10.4473 14.835 10.4341 14.8351 10.4209 14.8351H10.4985C10.4858 14.835 10.4731 14.835 10.4605 14.8348C12.0513 14.8143 13.3229 13.5592 13.3229 12C13.3229 10.4278 12.1621 9.16495 10.5528 9.16495H10.5002Z'
								fill='#98A1B3'
							/>
							<line x1='2.41421' y1='1.58579' x2='21.4142' y2='20.5858' stroke='white' strokeWidth='4' />
							<line x1='2.35355' y1='1.64645' x2='21.3536' y2='20.6464' stroke='#98A1B3' />
						</svg>
					) : (
						<svg width='21' height='10' viewBox='0 0 21 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M21 5C18.2563 8.09278 14.5892 10 10.5528 10C6.46357 10 2.7701 8.1701 0 5C2.7701 1.8299 6.48995 0 10.5528 0C14.5628 0 18.2299 1.90722 21 5ZM14.4573 5C14.4573 2.86082 12.6897 1.13402 10.5 1.13402C8.3103 1.13402 6.54271 2.86082 6.54271 5C6.54271 7.13918 8.3103 8.86598 10.5 8.86598C12.6897 8.86598 14.4573 7.13918 14.4573 5ZM10.5002 2.16495C8.89091 2.16495 7.5982 3.42784 7.5982 5.00001C7.5982 6.55922 8.86971 7.81424 10.4605 7.8348C10.4473 7.83497 10.4341 7.83506 10.4209 7.83506H10.4985C10.4858 7.83505 10.4731 7.83496 10.4605 7.8348C12.0513 7.81426 13.3229 6.55924 13.3229 5.00001C13.3229 3.42784 12.1621 2.16495 10.5528 2.16495H10.5002Z'
								fill='#98A1B3'
							/>
						</svg>
					)}
				</button>
			</div>
		)
	}

	return (
		<div className={cn(s.content, style)}>
			<input className={s.input} type={type} placeholder={placeholder} />
		</div>
	)
}
