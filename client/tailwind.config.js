const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#071689'

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: {
				500: primary,
				900: '#000072',
			},
			black: {
				800: '#070916',
				900: colors.black,
			},
			gold: {
				200: '#EFE7D0',
				900: '#DAC59C',
			},
			white: colors.white,
			gray: {
				100: '#E4E4E4',
				200: '#ABB1BA',
				300: '#98A1B3',
				400: '#8B939F',
			},
			green: {
				200: '#46A75B',
				500: '#389F1F',
			},
			transparent: colors.transparent,
		},
		borderWidth: {
			DEFAULT: '1px',
			0: '0',
			2: '2px',
			3: '3px',
			4: '4px',
			6: '6px',
			8: '8px',
		},
		borderRadius: {
			xxl: '14px',
			circle: '50%',
		},
		fontSize: {
			'12px': '12px',
			'13px': '13px',
			'14px': '14px',
			'15px': '15px',
			'16px': '16px',
			'18px': '18px',
			'20px': '20px',
			'21px': '21px',
			'24px': '24px',
			'26px': '26px',
			'28px': '28px',
			'34px': '34px',
			'48px': '48px',
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			gap: {
				11: '11px',
				15: '15px',
			},
			zIndex: {
				'-1': '-1',
				0: '0',
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: primary,
					color: colors.white,
					fontSize: '14px',
					fontWeight: '600',
					borderRadius: '44px',
					border: '1px solid',
					borderColor: colors.transparent,
					transition: 'all .3s ease-in-out',
					'&:hover': {
						borderColor: primary,
						backgroundColor: colors.white,
						color: primary,
					},
				},
				'.btn-stroke-primary': {
					backgroundColor: colors.transparent,
					color: primary,
					fontSize: '14px',
					fontWeight: '600',
					borderRadius: '44px',
					border: '1.2px solid',
					borderColor: primary,
					transition: 'all .3s ease-in-out',
					'&:hover': {
						backgroundColor: primary,
						color: colors.white,
					},
				},
			}),
				addUtilities({
					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},

					'.flex-center-start': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
					},

					'.flex-center-center': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					},

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},

					'.transform-y-center': {
						transform: 'translateY(-50%)',
						top: '50%',
					},

					'.transform-x-center': {
						transform: 'translateX(-50%)',
						left: '50%',
					},

					'.transform-center': {
						transform: 'translate(-50%, -50%)',
						top: '50%',
						left: '50%',
					},

					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
		}),
	],
}
