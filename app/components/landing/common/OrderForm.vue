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
	<section id="order-form" class="w-full bg-gray-100 py-12">
		<div class="container mx-auto px-4">
			<div class="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
				<!-- Header -->
				<div class="text-center mb-8">
					<h2 class="text-5xl font-bold mb-2">
						Оставьте заявку на демонстрацию сервиса
					</h2>
					<p class="text-xl text-gray-600">14 дней бесплатно</p>
				</div>

				<!-- Tabs -->
				<div class="flex justify-center mb-6 border-b">
					<div class="flex">
						<button
							@click="activeTab = 'phone'"
							:class="[
								'px-6 py-3 font-medium',
								activeTab === 'phone'
									? 'text-blue-600 border-b-2 border-blue-600'
									: 'text-gray-500',
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
									class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
							class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
						>
							Отправить заявку
						</button>

						<p class="text-sm text-gray-500 text-center">
							Нажимая на кнопку, вы даете согласие на обработку персональных
							данных.
						</p>
					</div>

					<!-- Telegram Tab -->
					<div
						v-if="activeTab === 'telegram'"
						class="flex flex-col items-center justify-center h-full py-8"
					>
						<h3 class="text-xl font-medium mb-4">Напишите нам в Telegram</h3>
						<p class="text-gray-600 mb-6 text-center max-w-md">
							Ответим вам в течении 10 минут и договоримся о демонстрации
							сервиса.
						</p>
						<button
							@click="openTelegram"
							class="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center"
						>
							Перейти в Telegram
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
