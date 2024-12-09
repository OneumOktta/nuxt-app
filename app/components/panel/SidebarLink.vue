<script setup lang="ts">
interface Props {
	icon: string
	text: string
	to: string
	roles?: string[] // массив ролей, которым доступна ссылка
}

defineProps<Props>()

// TODO: Добавить проверку роли пользователя
const userHasAccess = computed(() => true) // временно всегда true
</script>

<template>
	<NuxtLink
		v-if="userHasAccess"
		:to="to"
		class="group relative flex flex-col items-center w-[92px] h-[64px] rounded-2xl py-2 mx-auto"
	>
		<div
			class="absolute -left-1.5 -right-1.5 -bottom-1.5 -top-1 bg-gradient-to-r from-lightPink to-lightBlue opacity-0 rounded-2xl transition-opacity group-hover:opacity-50 blur-sm"
			:class="{ 'opacity-50': $route.path === to }"
		/>

		<div
			class="absolute inset-0 bg-light-panels dark:bg-dark-panels rounded-2xl"
		/>

		<Icon
			:name="icon"
			class="relative z-10 w-8 h-8 text-light-text dark:text-dark-text mb-1 transition-colors group-hover:text-lightPink"
			:class="{ 'text-lightPink': $route.path === to }"
		/>
		<span class="relative z-10 text-xs text-light-text dark:text-dark-text">
			{{ text }}
		</span>
	</NuxtLink>
</template>
