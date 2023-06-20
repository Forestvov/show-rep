import { FC } from 'react'

export const NotificationItemIcon: FC<{
	type: 'support' | 'pay' | 'delivery' | 'nerey'
}> = ({ type }) => {
	if (type === 'pay') {
		return (
			<svg width='16' height='20' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M14 0C15.1046 0 16 0.89543 16 2V18C16 19.1046 15.1046 20 14 20H2C0.89543 20 0 19.1046 0 18V2C0 0.89543 0.89543 0 2 0H14ZM8 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H8C8.5523 13 9 12.5523 9 12C9 11.4477 8.5523 11 8 11ZM11 6H5C4.44772 6 4 6.44772 4 7C4 7.51283 4.38604 7.93551 4.88338 7.99327L5 8H11C11.5523 8 12 7.55228 12 7C12 6.48717 11.614 6.06449 11.1166 6.00673L11 6Z'
					fill='url(#paint0_linear_1_607)'
				/>
				<defs>
					<linearGradient id='paint0_linear_1_607' x1='4.5' y1='-6' x2='18.5' y2='62.5' gradientUnits='userSpaceOnUse'>
						<stop stopColor='#070916' />
						<stop offset='1' stopColor='#BABBC1' />
					</linearGradient>
				</defs>
			</svg>
		)
	}

	if (type === 'support') {
		return (
			<svg width='20' height='16' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M0.0677299 1.48201L8.9435 10.3578C9.49269 10.907 10.3618 10.9413 10.9509 10.4608L11.0648 10.3578L19.934 1.48861C19.9627 1.59744 19.9825 1.70989 19.9925 1.82513L20 2V14C20 15.0544 19.1841 15.9182 18.1493 15.9945L18 16H2C0.945638 16 0.0818349 15.1841 0.00548577 14.1493L0 14V2C0 1.88057 0.0104666 1.76359 0.0305347 1.64992L0.0677299 1.48201ZM18 0C18.1211 0 18.2396 0.010751 18.3547 0.0313525L18.5247 0.06953L10.0042 8.59L1.48191 0.06776C1.59207 0.0382933 1.70598 0.0180001 1.82276 0.00774527L2 0H18Z'
					fill='#09244B'
				/>
				<path
					d='M0.0677299 1.48201L8.9435 10.3578C9.49269 10.907 10.3618 10.9413 10.9509 10.4608L11.0648 10.3578L19.934 1.48861C19.9627 1.59744 19.9825 1.70989 19.9925 1.82513L20 2V14C20 15.0544 19.1841 15.9182 18.1493 15.9945L18 16H2C0.945638 16 0.0818349 15.1841 0.00548577 14.1493L0 14V2C0 1.88057 0.0104666 1.76359 0.0305347 1.64992L0.0677299 1.48201ZM18 0C18.1211 0 18.2396 0.010751 18.3547 0.0313525L18.5247 0.06953L10.0042 8.59L1.48191 0.06776C1.59207 0.0382933 1.70598 0.0180001 1.82276 0.00774527L2 0H18Z'
					fill='url(#paint0_linear_1_697)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_1_697'
						x1='5.625'
						y1='-4.8'
						x2='12.9668'
						y2='51.3287'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#070916' />
						<stop offset='1' stopColor='#BABBC1' />
					</linearGradient>
				</defs>
			</svg>
		)
	}

	if (type === 'delivery') {
		return (
			<svg width='22' height='18' viewBox='0 0 22 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M14.3 0C15.5151 0 16.5 1.00736 16.5 2.25V3.375H18.1713C18.8396 3.375 19.4718 3.6857 19.8892 4.21944L21.5179 6.30158C21.8299 6.7005 22 7.19617 22 7.70715V12.375C22 13.6177 21.0151 14.625 19.8 14.625H18.7C18.7 16.489 17.2226 18 15.4 18C13.5774 18 12.1 16.489 12.1 14.625H8.8C8.8 16.489 7.32254 18 5.5 18C3.67747 18 2.2 16.489 2.2 14.625C0.984973 14.625 0 13.6177 0 12.375V2.25C0 1.00736 0.984973 0 2.2 0H14.3ZM5.5 13.5C4.89249 13.5 4.4 14.0037 4.4 14.625C4.4 15.2463 4.89249 15.75 5.5 15.75C6.10751 15.75 6.6 15.2463 6.6 14.625C6.6 14.0037 6.10751 13.5 5.5 13.5ZM15.4 13.5C14.7925 13.5 14.3 14.0037 14.3 14.625C14.3 15.2463 14.7925 15.75 15.4 15.75C16.0075 15.75 16.5 15.2463 16.5 14.625C16.5 14.0037 16.0075 13.5 15.4 13.5ZM18.1713 5.625H16.5V10.125H19.8V7.70715L18.1713 5.625Z'
					fill='#09244B'
				/>
				<path
					d='M14.3 0C15.5151 0 16.5 1.00736 16.5 2.25V3.375H18.1713C18.8396 3.375 19.4718 3.6857 19.8892 4.21944L21.5179 6.30158C21.8299 6.7005 22 7.19617 22 7.70715V12.375C22 13.6177 21.0151 14.625 19.8 14.625H18.7C18.7 16.489 17.2226 18 15.4 18C13.5774 18 12.1 16.489 12.1 14.625H8.8C8.8 16.489 7.32254 18 5.5 18C3.67747 18 2.2 16.489 2.2 14.625C0.984973 14.625 0 13.6177 0 12.375V2.25C0 1.00736 0.984973 0 2.2 0H14.3ZM5.5 13.5C4.89249 13.5 4.4 14.0037 4.4 14.625C4.4 15.2463 4.89249 15.75 5.5 15.75C6.10751 15.75 6.6 15.2463 6.6 14.625C6.6 14.0037 6.10751 13.5 5.5 13.5ZM15.4 13.5C14.7925 13.5 14.3 14.0037 14.3 14.625C14.3 15.2463 14.7925 15.75 15.4 15.75C16.0075 15.75 16.5 15.2463 16.5 14.625C16.5 14.0037 16.0075 13.5 15.4 13.5ZM18.1713 5.625H16.5V10.125H19.8V7.70715L18.1713 5.625Z'
					fill='url(#paint0_linear_1_676)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_1_676'
						x1='6.1875'
						y1='-5.4'
						x2='14.6282'
						y2='57.696'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#070916' />
						<stop offset='1' stopColor='#BABBC1' />
					</linearGradient>
				</defs>
			</svg>
		)
	}
}