<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
	const savedTheme = localStorage.getItem('theme')
	isDark.value =
		savedTheme === 'dark' ||
		(!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)

	updateTheme()

	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', e => {
			if (!localStorage.getItem('theme')) {
				isDark.value = e.matches
				updateTheme()
			}
		})
})

const updateTheme = () => {
	if (isDark.value) {
		document.documentElement.classList.add('dark')
		localStorage.setItem('theme', 'dark')
	} else {
		document.documentElement.classList.remove('dark')
		localStorage.setItem('theme', 'light')
	}
}

const toggleTheme = () => {
	isDark.value = !isDark.value
	updateTheme()
}
</script>

<template>
	<button
		@click="toggleTheme"
		class="fixed left-6 bottom-6 z-50 p-2 hover:scale-125 transition-all duration-300"
		aria-label="Toggle theme"
	>
		<img
			v-if="isDark"
			src="/icon-sun.svg"
			alt="Switch to light mode"
			class="w-12 h-12"
		/>
		<img
			v-else
			src="/icon-moon.svg"
			alt="Switch to dark mode"
			class="w-12 h-12"
		/>
	</button>
</template>
