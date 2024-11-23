<script setup lang="ts">
import { ref } from 'vue'

const isDropdownOpen = ref(false)

const solutions = [
	{
		name: 'Недвижимость',
		path: '/solution/realty'
	},
	{
		name: 'Финансы',
		path: '/solution/finance'
	},
	{
		name: 'E-commerce',
		path: '/solution/ecom'
	},
	{
		name: 'Образование',
		path: '/solution/education'
	},
	{
		name: 'Здравоохранение',
		path: '/solution/health'
	},
	{
		name: 'Гостиничный бизнес',
		path: '/solution/hotels'
	}
]

const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({ 
			behavior: 'smooth',
			block: 'start'
		})
	}
}
</script>

<template>
	<header
		class="container flex justify-between items-center py-4 px-8 bg-gray-400"
	>
		<NuxtLink to="/" class="h-10">
			<img src="/logo.svg" alt="Logo" class="h-full w-auto" />
		</NuxtLink>

		<nav class="flex items-center gap-8">
			<div class="relative group">
				<button
					class="flex items-center gap-1 hover:text-blue-600 transition-colors"
				>
					Решения
					<svg
						class="w-4 h-4 transition-transform group-hover:rotate-180"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
				<div
					class="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 top-full left-0 mt-2 w-48 bg-white rounded shadow-lg py-2 transition-all duration-200"
				>
					<NuxtLink
						v-for="solution in solutions"
						:key="solution.path"
						:to="solution.path"
						class="block px-4 py-2 hover:bg-gray-100 transition-colors"
					>
						{{ solution.name }}
					</NuxtLink>
				</div>
			</div>
			<button 
				@click="scrollToSection('prices')" 
				class="hover:text-blue-600 transition-colors"
			>
				Цены
			</button>
			<button 
				@click="scrollToSection('benefits')" 
				class="hover:text-blue-600 transition-colors"
			>
				Преимущества
			</button>
			<button 
				@click="scrollToSection('materials')" 
				class="hover:text-blue-600 transition-colors"
			>
				Материалы
			</button>
		</nav>

		<NuxtLink
			to="/panel"
			class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
		>
			Вход
		</NuxtLink>
	</header>
</template>

<style scoped></style>
