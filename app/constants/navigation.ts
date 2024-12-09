import type { NavLink, ServiceLink } from '../types/navlink.types'

export const headerLinks: NavLink[] = [
	{
		name: 'Решения',
		action: () => scrollToSection('solutions'),
	},
	{
		name: 'Цены',
		action: () => scrollToSection('prices'),
	},
	{
		name: 'Преимущества',
		action: () => scrollToSection('benefits'),
	},
	{
		name: 'Интеграции',
		action: () => scrollToSection('integrations'),
	},
	{
		name: 'Материалы',
		action: () => scrollToSection('materials'),
	},
]

export const serviceLinks: ServiceLink[] = [
	{
		name: 'Преимущества',
		path: '#',
	},
	{
		name: 'Тарифы',
		path: '#',
	},
	{
		name: 'Материалы',
		path: '#',
	},
	{
		name: 'Презентация',
		path: '#',
	},
	{
		name: 'Roadmap',
		path: '#',
		disabled: true,
	},
	{
		name: 'API',
		path: '#',
		disabled: true,
	},
]

function scrollToSection(sectionId: string) {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}
}
