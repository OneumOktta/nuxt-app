<script setup lang="ts"></script>

<template>
	<main class="min-h-screen p-6 flex">
		<div
			class="w-full bg-light-panels dark:bg-dark-panels rounded-3xl flex flex-col"
		>
			<NuxtLink to="/" class="h-12 inline-block mt-8 ml-8">
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
			<div class="flex-1 flex items-center justify-center p-12">
				<slot />
			</div>
		</div>
	</main>
</template>
