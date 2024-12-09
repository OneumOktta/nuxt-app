<script setup lang="ts">
import { ref } from 'vue'
import { solutions, headerLinks } from '~/constants/navigation'

const isDropdownOpen = ref(false)

const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	}
}
</script>

<template>
	<header class="container flex items-center py-8 px-10 bg-transparent">
		<NuxtLink to="/" class="h-12 flex-shrink-0">
			<NuxtImg
				src="logo-light.svg"
				alt="Logo"
				class="h-full w-auto block dark:hidden"
			/>
			<NuxtImg
				src="logo-dark.svg"
				alt="Logo"
				class="h-full w-auto hidden dark:block"
			/>
		</NuxtLink>

		<nav class="flex items-center gap-5 mx-auto">
			<button
				v-for="link in headerLinks"
				:key="link.name"
				@click="link.action"
				class="relative group"
			>
				<span class="relative">
					{{ link.name }}
					<span
						class="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-light-text dark:bg-dark-text group-hover:w-full transition-all duration-300"
					/>
				</span>
			</button>
		</nav>

		<div class="flex items-center gap-[20px] flex-shrink-0">
			<NuxtLink to="/panel/login" class="relative group">
				<span class="relative">
					Войти
					<span
						class="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-light-text dark:bg-dark-text group-hover:w-full transition-all duration-300"
					/>
				</span>
			</NuxtLink>

			<GradientButton @click="() => navigateTo('/registration')">
				Создать аккаунт
			</GradientButton>
		</div>
	</header>
</template>

<style scoped></style>
