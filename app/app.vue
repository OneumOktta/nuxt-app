<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
	<div
		class="font-golos bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text relative overflow-hidden"
	>
		<div
			class="fixed -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary-gradient opacity-30 blur-[120px] animate-float"
		/>
		<div
			class="fixed -bottom-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary-gradient-alt opacity-30 blur-[120px] animate-float"
		/>

		<!-- Основной контент -->
		<div class="relative z-10">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
			<SpeedInsights />
		</div>
	</div>
</template>

<style>
@keyframes float {
	0% {
		transform: translate(0, 0);
	}
	50% {
		transform: translate(-10px, 10px);
	}
	100% {
		transform: translate(0, 0);
	}
}

.animate-float {
	animation: float 6s ease-in-out infinite;
}
</style>
