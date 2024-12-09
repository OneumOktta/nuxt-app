import type { Solution } from '~/types/navlink.types'

export const solutions: Solution[] = [
	{
		name: 'Недвижимость',
		path: '/solution/realty',
	},
	{
		name: 'Финансы',
		path: '/solution/finance',
	},
	{
		name: 'E-commerce',
		path: '/solution/ecom',
	},
	{
		name: 'Образование',
		path: '/solution/education',
	},
	{
		name: 'Здравоохранение',
		path: '/solution/health',
	},
	{
		name: 'Гостиничный бизнес',
		path: '/solution/hotels',
	},
]

export const solutionImages: Record<string, string> = {
	'/solution/realty': 'solution/hero-realty.svg',
	'/solution/finance': 'solution/hero-finance.svg',
	'/solution/ecom': 'solution/hero-ecom.svg',
	'/solution/education': 'solution/hero-education.svg',
	'/solution/health': 'solution/hero-health.svg',
	'/solution/hotels': 'solution/hero-hostel.svg',
}

export const solutionDescriptions: Record<string, string> = {
	'/solution/realty':
		'Используйте OneumGPT в сфере недвижимости для помощи клиентам в выборе объектов, подходящих под их потребности и консультаций по актуальным предложениям.',
	'/solution/finance':
		'Используйте OneumGPT в сфере финансов для помощи клиентам в выборе продуктов, подходящих под их потребности и консультаций по актуальным предложениям.',
	'/solution/ecom':
		'Используйте OneumGPT в сфере e-commerce для помощи клиентам в выборе товаров, подходящих под их потребности и консультаций по актуальным предложениям.',
	'/solution/education':
		'Используйте OneumGPT в сфере образования для помощи клиентам в выборе курсов, подходящих под их потребности и консультаций по актуальным предложениям.',
	'/solution/health':
		'Используйте OneumGPT в сфере здравоохранения для помощи клиентам в выборе услуг, подходящих под их потребности и консультаций по актуальным предложениям.',
	'/solution/hotels':
		'Используйте OneumGPT в сфере гостиничного бизнеса для помощи клиентам в выборе номеров, подходящих под их потребности и консультаций по актуальным предложениям.',
}
