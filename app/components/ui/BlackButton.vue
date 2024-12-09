<script setup lang="ts">
defineProps<{
	to?: string
}>()
</script>

<template>
	<component
		:is="to ? 'NuxtLink' : 'button'"
		:to="to"
		class="relative px-6 py-4 text-dark-text rounded-2xl bg-greyDark border-2 border-transparent transition-all duration-300 shadow-lg hover:shadow-xl dark:border-2 dark:border-lightPink group cursor-pointer"
	>
		<slot />
		<div
			class="absolute -bottom-1 -left-4 -right-4 h-12 rounded-full bg-gradient-to-r from-lightPink to-lightBlue opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300 -z-10"
		/>
	</component>
</template>
