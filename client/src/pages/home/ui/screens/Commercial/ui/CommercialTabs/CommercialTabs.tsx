import { CommercialSorting } from 'pages/home/ui/screens/Commercial/ui/CommercialSorting/CommercialSorting'
import { FC, useState } from 'react'
import { Tabs } from 'shared/Tabs'

const data = ['Все предложения', 'В наличии', 'Под заказ']
export const CommercialTabs: FC = () => {
	const [current, setCurrent] = useState<string>(data[0])

	return (
		<Tabs
			tabs={data}
			renderComponent={(data: string) => (
				<button className={current === data ? 'current-tab' : ''} onClick={() => setCurrent(data)} key={data}>
					{data}
				</button>
			)}
			rightBlock={<CommercialSorting />}
		/>
	)
}
