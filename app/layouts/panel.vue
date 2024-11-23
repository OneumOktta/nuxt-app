<script setup lang="ts"></script>

<template>
	<main class="flex min-h-screen w-full">
		<Sidebar class="w-[250px] flex-shrink-0 border-r border-gray-200" />
		<div class="flex-grow p-5">
			<slot />
		</div>
	</main>
</template>
