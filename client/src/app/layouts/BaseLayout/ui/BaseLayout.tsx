import cn from 'classnames'
import { Outlet } from 'react-router-dom'
import { AsideLayout } from 'widgets/LayoutAside'
import { Footer } from 'widgets/LayoutFooter'
import { HeaderLayout } from 'widgets/LayoutHeader'

import s from './BaseLayout.module.css'

export const BaseLayout = () => {
	return (
		<div className={cn(s.layout, 'layout')}>
			<AsideLayout />
			<main className={s.main}>
				<div className={s.main__content}>
					<HeaderLayout />
					<Outlet />
					<Footer />
				</div>
			</main>
		</div>
	)
}
