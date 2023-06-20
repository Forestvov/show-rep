import { ReactNode } from 'react'

export interface ITabs<T> {
	tabs: T[]
	renderComponent: (item: T) => ReactNode
	rightBlock?: ReactNode
}
