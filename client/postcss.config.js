export default {
	plugins: {
		stylelint: {},
		'postcss-import': {},
		'postcss-mixins': {
			mixins: {
				line_clamp: function (_, lines) {
					return {
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						'-webkit-line-clamp': lines,
						display: '-webkit-box',
						'-webkit-box-orient': 'vertical',
					}
				},
			},
		},
		'tailwindcss/nesting': {},
		'postcss-hexrgba': {},
		tailwindcss: {},
		autoprefixer: {},
	},
}
