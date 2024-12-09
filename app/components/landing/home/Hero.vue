<script setup lang="ts">
const scrollToOrderForm = () => {
	const orderForm = document.querySelector('#order-form')
	if (orderForm) {
		orderForm.scrollIntoView({ behavior: 'smooth' })
	}
}
</script>

<template>
	<section class="container py-24">
		<h1 class="text-center mx-auto select-none">
			<span class="text-7xl font-semibold leading-[1.2]">
				Поддержка, продажи и повышение качества обслуживания в чате с нейросетью
				<span class="relative inline-block px-3 py-1">
					<span class="relative z-10">ChatGPT</span>
					<span
						class="absolute inset-0 bg-gradient-to-r from-lightPink to-lightBlue rounded-3xl -z-10"
					/>
				</span>
			</span>
		</h1>
		<div class="mt-14 flex justify-center relative">
			<div class="absolute left-[calc(50%-320px)] top-4">
				<div class="relative flex flex-col items-center animate-float">
					<NuxtImg
						src="hero-arrow.svg"
						alt="arrow"
						class="mb-4 w-[120px] h-[80px]"
					/>
					<p class="text-sm max-w-[240px] text-center select-none">
						За 15 минут в зуме расскажем и покажем функционал чата
					</p>
				</div>
			</div>
			<BlackButton @click="scrollToOrderForm">
				Заказать демонстрацию
			</BlackButton>
		</div>
	</section>
</template>

<style scoped>
@keyframes float {
	0% {
		transform: translate(0, 0);
	}
	50% {
		transform: translate(0, 10px);
	}
	100% {
		transform: translate(0, 0);
	}
}

.animate-float {
	animation: float 3s ease-in-out infinite;
}
</style>
