<script setup lang="ts">
const scrollToOrderForm = () => {
	const orderForm = document.querySelector('#order-form')
	if (orderForm) {
		orderForm.scrollIntoView({ behavior: 'smooth' })
	}
}
</script>

<template>
	<div class="w-full bg-gray-200">
		<section class="container mx-auto px-4 py-16">
			<div class="text-center max-w-3xl mx-auto mb-12">
				<h1 class="text-6xl font-bold mb-4">
					Чат для сайта или приложения на основе ChatGPT
				</h1>
				<p class="text-xl text-gray-600 mb-8">
					Поддержка, продажи и повышение качества обслуживания в одном окне
				</p>
				<button
					@click="scrollToOrderForm"
					class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
				>
					Заказать демо
				</button>
				<p class="mt-3 text-sm text-gray-500">14 дней бесплатно</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
				<!-- Card 1 -->
				<div class="bg-white p-6 rounded-2xl shadow-lg">
					<h3 class="text-xl font-semibold mb-3">Доступна 24/7</h3>
					<p class="text-gray-600">
						Автоматизированная поддержка клиентов, экономя времени и денег.
						Обрабатывает большой объем запросов и предоставляет точные и
						полезные ответы 24 часа в сутки.
					</p>
				</div>

				<!-- Card 2 -->
				<div class="bg-white p-6 rounded-2xl shadow-lg">
					<h3 class="text-xl font-semibold mb-3">Отвечает как человек</h3>
					<p class="text-gray-600">
						Использует алгоритм глубокого обучения и огромное количество
						текстовых данных. Поэтому отвечает на вопросы пользователей в
						естественной человеческой манере.
					</p>
				</div>

				<!-- Card 3 -->
				<div class="bg-white p-6 rounded-2xl shadow-lg">
					<h3 class="text-xl font-semibold mb-3">Улучшенная персонализация</h3>
					<p class="text-gray-600">
						Учитывает информацию о пользователях – их истории запросов,
						предпочтения и поведение. Поэтому лучше удовлетворяет потребности
						клиентов и дольше их удерживает.
					</p>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped></style>
