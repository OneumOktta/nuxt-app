<script setup lang="ts">
defineProps<{
	to?: string
	variant?: 'primary' | 'secondary'
}>()
</script>

<template>
	<component
		:is="to ? 'NuxtLink' : 'button'"
		:to="to"
		class="relative px-6 py-4 text-dark-text rounded-2xl bg-gradient-to-r from-lightPink to-lightBlue hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group"
	>
		<span class="relative z-10">
			<slot />
		</span>
		<div
			class="absolute -bottom-3 -left-3 -right-3 h-12 rounded-full bg-gradient-to-r from-lightPink to-lightBlue opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300 z-0"
		/>
	</component>
</template>
