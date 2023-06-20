import cn from 'classnames'

import { ITabs } from '../ts/Tabs.interface'

import s from './Tabs.module.css'

export function Tabs<T>(props: ITabs<T>) {
	const { tabs, rightBlock, renderComponent } = props

	return (
		<div className={cn(s.tabs, 'container')}>
			<div className={s.tabs__top}>
				<div className={s.tabs__header}>{tabs.map(renderComponent)}</div>
				{rightBlock}
			</div>
		</div>
	)
}
