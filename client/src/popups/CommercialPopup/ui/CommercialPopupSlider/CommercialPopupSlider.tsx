import cn from 'classnames'
import { ArrowSlider } from 'shared/icons'
// @ts-ignore swiper return any ....
import { Navigation } from 'swiper'
import { Swiper, SwiperProps } from 'swiper/react'

import { ICommercialPopupSlider } from './CommercialPopupSlider.inerface'
import s from './CommercialPopupSlider.module.css'

export function CommercialPopupSlider<T>(props: ICommercialPopupSlider<T>) {
	const { keySlider, show, slides, renderComponent } = props

	const swiperParam: SwiperProps = {
		spaceBetween: 11,
		slidesPerView: 3,
		modules: [Navigation],
		speed: 1000,
		navigation: {
			nextEl: `.slider__next_id_${keySlider}`,
			prevEl: `.slider__prev_id_${keySlider}`,
		},
	}

	return (
		<div className={cn(s.body, { [s.show]: show })}>
			<button className={cn(s.navigation, s.navigation__left, `slider__prev_id_${keySlider}`)}>
				<ArrowSlider />
			</button>
			<Swiper className={s.slider} {...swiperParam}>
				{slides.map(renderComponent)}
			</Swiper>
			<button className={cn(s.navigation, s.navigation__right, `slider__next_id_${keySlider}`)}>
				<ArrowSlider />
			</button>
		</div>
	)
}
