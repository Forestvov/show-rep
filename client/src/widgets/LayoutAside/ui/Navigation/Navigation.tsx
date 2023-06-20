import cn from 'classnames'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { AsideIconDocActive } from 'widgets/LayoutAside/ui/icons/AsideIconDocActive'

import {
	AsideIconCalcActive,
	AsideIconCalcDefault,
	AsideIconDocDefault,
	AsideIconExitDefault,
	AsideIconFavActive,
	AsideIconFavDefault,
	AsideIconHomeActive,
	AsideIconHomeDefault,
	AsideIconNotificationActive,
	AsideIconNotificationDefault,
	AsideIconOrdersActive,
	AsideIconOrdersDefault,
	AsideIconQuestionActive,
	AsideIconQuestionDefault,
	AsideIconUserActive,
	AsideIconUserDefault,
} from '../icons'

import s from './Navigation.module.css'

export const Navigation: FC = () => {
	return (
		<nav className={s.navigation}>
			<ul>
				<li>
					<NavLink to={'/'} className={({ isActive }) => (isActive ? s.active : '')}>
						{({ isActive }) => (
							<>
								<i>{isActive ? <AsideIconHomeActive /> : <AsideIconHomeDefault />}</i>
								<span>Коммерческое предложение</span>
							</>
						)}
					</NavLink>
				</li>
				<li>
					<NavLink to={'/personal'} className={({ isActive }) => (isActive ? s.active : '')}>
						{({ isActive }) => (
							<>
								<i>{isActive ? <AsideIconUserActive /> : <AsideIconUserDefault />}</i>
								<span>Личные данные</span>
							</>
						)}
					</NavLink>
				</li>
				<li>
					<NavLink to={'/orders'} className={({ isActive }) => cn(s.order, { [s.active]: isActive })}>
						{({ isActive }) => (
							<>
								<i>{isActive ? <AsideIconOrdersActive /> : <AsideIconOrdersDefault />}</i>
								<span>Мои заказы</span>
							</>
						)}
					</NavLink>
				</li>

				<li>
					<NavLink to={'/documents'} className={({ isActive }) => (isActive ? s.active : '')}>
						{({ isActive }) => (
							<>
								<i>{isActive ? <AsideIconDocActive /> : <AsideIconDocDefault />}</i>
								<span>Документы</span>
							</>
						)}
					</NavLink>
				</li>

				<li>
					<NavLink to={'/notifications'} className={({ isActive }) => (isActive ? s.active : '')}>
						{({ isActive }) => (
							<>
								<i>{isActive ? <AsideIconNotificationActive /> : <AsideIconNotificationDefault />}</i>
								<span>Уведомления</span>
							</>
						)}
					</NavLink>
				</li>

				<li>
					<NavLink to={'/questions'} className={({ isActive }) => (isActive ? s.active : '')}>
						{({ isActive }) => (
							<>
								<i>{isActive ? <AsideIconQuestionActive /> : <AsideIconQuestionDefault />}</i>
								<span>Вопрос-ответ</span>
							</>
						)}
					</NavLink>
				</li>

				<li>
					<NavLink to={'/miscalculation'} className={({ isActive }) => (isActive ? s.active : '')}>
						{({ isActive }) => (
							<>
								<i>{isActive ? <AsideIconCalcActive /> : <AsideIconCalcDefault />}</i>
								<span>Заказ на просчет</span>
							</>
						)}
					</NavLink>
				</li>

				<li>
					<NavLink to={'/favorites'} className={({ isActive }) => (isActive ? s.active : '')}>
						{({ isActive }) => (
							<>
								<i>{isActive ? <AsideIconFavActive /> : <AsideIconFavDefault />}</i>
								<span>Избранное</span>
							</>
						)}
					</NavLink>
				</li>
				<li>
					<button>
						<i>
							<AsideIconExitDefault />
						</i>
						<span>Выйти</span>
					</button>
				</li>
			</ul>
		</nav>
	)
}
