export interface NavLink {
	name: string
	path?: string
	action?: () => void
}

export interface Solution {
	name: string
	path: string
}

export interface ServiceLink {
	name: string
	path: string
	disabled?: boolean
}
