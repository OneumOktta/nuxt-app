<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('phone')
const formData = ref({
	name: '',
	email: '',
	phone: '',
	company: '',
	website: '',
})

const handleSubmit = () => {
	// Handle form submission
	console.log('Form submitted:', formData.value)
}

const openTelegram = () => {
	window.open('https://t.me/your_telegram_bot', '_blank')
}
</script>

<template>
	<section id="order-form" class="container py-24">
		<div class="bg-light-panels dark:bg-dark-panels rounded-3xl p-12">
			<div class="max-w-3xl mx-auto">
				<!-- Header -->
				<div class="text-center mb-8">
					<h2
						class="text-5xl font-semibold mb-2 text-light-text dark:text-dark-text"
					>
						Оставьте заявку на демонстрацию сервиса
					</h2>
					<p class="text-xl text-light-text/60 dark:text-dark-text/60">
						14 дней бесплатно
					</p>
				</div>

				<!-- Tabs -->
				<div
					class="flex justify-center mb-6 border-b border-light-text/10 dark:border-dark-text/10"
				>
					<div class="flex">
						<button
							@click="activeTab = 'phone'"
							:class="[
								'px-6 py-3 font-medium transition-colors',
								activeTab === 'phone'
									? 'text-lightPink border-b-2 border-lightPink'
									: 'text-light-text/40 dark:text-dark-text/40 hover:text-light-text/60 dark:hover:text-dark-text/60',
							]"
						>
							По телефону или почте
						</button>
						<button
							@click="activeTab = 'telegram'"
							:class="[
								'px-6 py-3 font-medium',
								activeTab === 'telegram'
									? 'text-blue-600 border-b-2 border-blue-600'
									: 'text-gray-500',
							]"
						>
							Через Telegram
						</button>
					</div>
				</div>

				<!-- Tab Content Container with fixed height -->
				<div class="min-h-[400px]">
					<!-- Phone/Email Form -->
					<div v-if="activeTab === 'phone'" class="space-y-4">
						<div class="grid grid-cols-1 gap-4">
							<div>
								<input
									v-model="formData.name"
									type="text"
									placeholder="Имя и фамилия"
									class="w-full px-4 py-3 bg-transparent border-2 border-light-text/10 dark:border-dark-text/10 rounded-xl focus:border-lightPink outline-none transition-colors"
								/>
							</div>
							<div>
								<input
									v-model="formData.email"
									type="email"
									placeholder="Email"
									class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<div>
								<input
									v-model="formData.phone"
									type="tel"
									placeholder="Номер телефона"
									class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<div>
								<input
									v-model="formData.company"
									type="text"
									placeholder="Название компании"
									class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
							<div>
								<input
									v-model="formData.website"
									type="url"
									placeholder="Сайт"
									class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								/>
							</div>
						</div>

						<button
							@click="handleSubmit"
							class="w-full bg-gradient-to-r from-lightPink to-lightBlue text-dark-text py-4 px-6 rounded-2xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
						>
							Отправить заявку
						</button>

						<p
							class="text-sm text-light-text/40 dark:text-dark-text/40 text-center"
						>
							Нажимая на кнопку, вы даете согласие на обработку персональных
							данных.
						</p>
					</div>

					<!-- Telegram Tab -->
					<div
						v-if="activeTab === 'telegram'"
						class="flex flex-col items-center justify-center h-full py-8"
					>
						<h3
							class="text-xl font-medium mb-4 text-light-text dark:text-dark-text"
						>
							Напишите нам в Telegram
						</h3>
						<p
							class="text-light-text/60 dark:text-dark-text/60 mb-6 text-center max-w-md"
						>
							Ответим вам в течении 10 минут и договоримся о демонстрации
							сервиса.
						</p>
						<button
							@click="openTelegram"
							class="bg-gradient-to-r from-lightPink to-lightBlue text-dark-text py-4 px-6 rounded-2xl hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
						>
							Перейти в Telegram
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
