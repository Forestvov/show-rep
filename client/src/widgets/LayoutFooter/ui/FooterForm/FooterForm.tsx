import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { IFormField } from 'widgets/LayoutFooter/ui/FooterForm/FooterForm.interface'

import s from './FooterForm.module.css'

export const FooterForm: FC = () => {
	const { register, handleSubmit } = useForm<IFormField>()

	const onFormSubmit = (data: IFormField) => {
		console.log(data)
	}

	return (
		<div className={s.form}>
			<h3 className={s.form__title}>Узнавайте о выгодных предложениях первыми</h3>
			{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
			<form className={s.form__inner} onSubmit={handleSubmit(onFormSubmit)}>
				<div className={s.form__label}>Наша рассылка</div>
				<div className={s.form__input}>
					<input type='email' {...register('email')} placeholder='Ваш E-mail' />
					<button>Подписаться</button>
				</div>
				<p className={s.form__text}>
					Нажимая на кнопку “Подписаться” вы соглашаетесь{' '}
					<Link to={'/'}>с условиями обработки персональных данных</Link>
				</p>
			</form>
		</div>
	)
}
