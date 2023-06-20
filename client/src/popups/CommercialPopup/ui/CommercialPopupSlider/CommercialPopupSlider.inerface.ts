import { ReactNode } from 'react'

export interface ICommercialPopupSlider<T> {
	show: boolean
	keySlider: string
	slides: T[]
	renderComponent: (item: T) => ReactNode
}
