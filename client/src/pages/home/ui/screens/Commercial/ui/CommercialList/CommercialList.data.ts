import { ICommercialItem } from '../CommercialItem/CommercialItem.interface'

export const commercialListData: ICommercialItem[] = [
	{
		label: 'Транспорт Айс Стрим, ВМРП, подход 09.12.2022',
		cards: [
			{
				id: 0,
				name: 'Филе Сельди, L, КОРОБ 1/22,5',
				statuses: ['В наличии', 'Фото', 'Документы'],
				char: '«Поллукс БМРТ»,ТУ 12 мес',
				price: 112,
				weight: 25627.5,
			},
		],
	},
	{
		label: 'Транспорт Айс Стрим, ДВ Порт, подход 08.12.2022',
		cards: [
			{
				id: 0,
				name: 'Сельдь НР, 27+ см, МЕШОК 1/13',
				statuses: ['В наличии', 'Фото'],
				char: '«Солборг СРТМ», ГОСТ 12 мес',
				price: 112,
				weight: 25627.5,
			},
		],
	},
	{
		label: 'Транспорт Владивосток контейнера, подход 14.12.2022',
		cards: [
			{
				id: 0,
				name: 'Сельдь НР, L (400-500 гр), КОРОБ 1/20',
				statuses: ['В наличии', 'Документы'],
				char: '«ФБОР», ТУ 12 мес',
				price: 112,
				weight: 25627.5,
				discount: 120,
			},
			{
				id: 1,
				name: 'Сельдь НР, М (300-400 гр) КОРОБ 1/12',
				statuses: ['В наличии', 'Фото', 'Документы'],
				char: '«ФБОР», ТУ 12 мес',
				price: 132,
				weight: 21000,
			},
		],
	},
]
