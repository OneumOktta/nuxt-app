<script setup lang="ts">
defineProps<{
	title: string
	text: string
	icon?: string
}>()
</script>

<template>
	<div
		class="p-8 bg-light-panels dark:bg-dark-panels rounded-3xl transition-all duration-300 hover:scale-[1.02] select-none"
	>
		<div class="flex items-start gap-4">
			<NuxtImg
				v-if="icon"
				:src="icon"
				:alt="title"
				class="w-6 h-6 mt-1 flex-shrink-0"
			/>
			<div>
				<h3 class="text-xl font-semibold mb-4">{{ title }}</h3>
				<p
					class="text-sm font-medium text-light-text dark:text-dark-text leading-relaxed"
				>
					{{ text }}
				</p>
			</div>
		</div>
	</div>
</template>
