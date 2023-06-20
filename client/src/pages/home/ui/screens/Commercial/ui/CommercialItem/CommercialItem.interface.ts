export interface ICommercialItem {
	label: string
	cards: ICommercialItemCard[]
}

export interface ICommercialItemCard {
	id: number
	statuses: string[]
	name: string
	char: string
	weight: number
	price: number
	discount?: number
}
