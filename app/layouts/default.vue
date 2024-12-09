<script setup lang="ts"></script>

<template>
	<main class="container">
		<ThemeToggle />
		<Header />
		<slot />
		<Prices />
		<OrderForm />
		<Footer />
	</main>
</template>
