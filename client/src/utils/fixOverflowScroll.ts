export const fixOverflowScroll = (isOpen: boolean, fixedLayout?: boolean) => {
	const scrollWidth = `${window.innerWidth - document.documentElement.clientWidth}px`
	const $body = document.querySelector('body')

	const $layout = document.querySelector('.layout')

	if ($body) {
		$body.style.overflow = isOpen ? 'hidden' : 'auto'
		$body.style.paddingRight = isOpen ? scrollWidth : '0'
	}

	if (fixedLayout && $layout) {
		if (isOpen) {
			$layout.classList.add('layout__fixed')
		} else {
			$layout.classList.remove('layout__fixed')
		}
	}
}
