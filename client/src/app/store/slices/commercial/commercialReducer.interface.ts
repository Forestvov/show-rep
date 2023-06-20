export interface IState {
	openPopup: boolean
	commercial: ICommercialItem[]
	commercialTotal: number
}

export interface ICommercialItem {
	name: string
	weight: number
}
