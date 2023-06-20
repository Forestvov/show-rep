import { CommercialPopupDocument } from 'popups/CommercialPopup/ui/CommercialPopupDocument/CommercialPopupDocument'
import { CommercialPopupSlider } from 'popups/CommercialPopup/ui/CommercialPopupSlider/CommercialPopupSlider'
import { FC, useState } from 'react'
import { Tabs } from 'shared/Tabs'
import { SwiperSlide } from 'swiper/react'

import { CommercialPopupFirstTab } from '../CommercialPopupFirstTab/CommercialPopupFirstTab'

import s from './CommercialPopupTabs.module.css'

const tabs: string[] = ['Описание', 'Документы', 'Фотографии']

const documents: string[] = [
	'/images/moc/slider/slide-1.jpg',
	'/images/moc/slider/slide-2.jpg',
	'/images/moc/slider/slide-3.jpg',
]

const images: string[] = [
	'/images/moc/slider/slide-1.jpg',
	'/images/moc/slider/slide-2.jpg',
	'/images/moc/slider/slide-3.jpg',
]

export const CommercialPopupTabs: FC = () => {
	const [current, setCurrent] = useState<string>(tabs[0])

	return (
		<>
			<Tabs
				tabs={tabs}
				renderComponent={(item: string) => (
					<button className={item === current ? 'current-tab' : ''} onClick={() => setCurrent(item)} key={item}>
						{item}
					</button>
				)}
			/>
			<div className={s.content}>
				<CommercialPopupFirstTab show={current === tabs[0]} />
				<CommercialPopupSlider
					show={current === tabs[1]}
					keySlider='documents'
					slides={documents}
					renderComponent={(product: string) => (
						<SwiperSlide className={s.slideDoc} key={product}>
							<CommercialPopupDocument />
						</SwiperSlide>
					)}
				/>
				<CommercialPopupSlider
					show={current === tabs[2]}
					keySlider='images'
					slides={images}
					renderComponent={(product: string) => (
						<SwiperSlide className={s.slideImage} key={product}>
							<img src={product} key={'image'} />
						</SwiperSlide>
					)}
				/>
			</div>
		</>
	)
}
