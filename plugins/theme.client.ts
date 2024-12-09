export default defineNuxtPlugin(() => {
	if (typeof window !== 'undefined') {
		// Проверяем сохраненную тему
		const theme = localStorage.getItem('theme')

		// Применяем тему
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else if (theme === 'light') {
			document.documentElement.classList.remove('dark')
		} else {
			// Если тема не задана, проверяем системные настройки
			const systemDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches
			if (systemDark) {
				document.documentElement.classList.add('dark')
				localStorage.setItem('theme', 'dark')
			} else {
				document.documentElement.classList.remove('dark')
				localStorage.setItem('theme', 'light')
			}
		}
	}
})
