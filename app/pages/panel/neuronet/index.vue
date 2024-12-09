<script setup lang="ts">
definePageMeta({
	layout: 'panel',
})
</script>

<template>
	<PanelContent>
		<div class="min-h-screen bg-gray-50 p-6">
			<!-- Header Section -->
			<div class="mb-8">
				<h1 class="text-3xl font-bold text-gray-900">Нейросеть</h1>
				<p class="mt-2 text-gray-600">
					Управление настройками нейросети и мониторинг
				</p>
			</div>

			<!-- Main Content -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<!-- Stats Card -->
				<div class="bg-white rounded-lg shadow p-6">
					<h2 class="text-xl font-semibold text-gray-800 mb-4">Статистика</h2>
					<div class="space-y-4">
						<div class="flex justify-between items-center">
							<span class="text-gray-600">Запросов сегодня</span>
							<span class="font-medium text-gray-900">127</span>
						</div>
						<div class="flex justify-between items-center">
							<span class="text-gray-600">Активных моделей</span>
							<span class="font-medium text-gray-900">3</span>
						</div>
					</div>
				</div>

				<!-- Settings Card -->
				<div class="bg-white rounded-lg shadow p-6">
					<h2 class="text-xl font-semibold text-gray-800 mb-4">Настройки</h2>
					<div class="space-y-4">
						<div class="flex flex-col">
							<label class="text-sm text-gray-600 mb-1"
								>Модель по умолчанию</label
							>
							<select class="border rounded-md p-2">
								<option>GPT-3.5</option>
								<option>GPT-4</option>
								<option>Claude</option>
							</select>
						</div>
						<div class="flex items-center">
							<label class="inline-flex items-center">
								<input
									type="checkbox"
									class="form-checkbox h-5 w-5 text-blue-600"
								/>
								<span class="ml-2 text-gray-700">Включить логирование</span>
							</label>
						</div>
					</div>
				</div>

				<!-- Status Card -->
				<div class="bg-white rounded-lg shadow p-6">
					<h2 class="text-xl font-semibold text-gray-800 mb-4">
						Статус системы
					</h2>
					<div class="space-y-4">
						<div class="flex items-center">
							<div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
							<span class="text-gray-700">Система активна</span>
						</div>
						<div class="text-sm text-gray-600">
							Последнее обновление: 5 минут назад
						</div>
					</div>
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="mt-8 flex gap-4">
				<button
					class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
				>
					Обновить настройки
				</button>
				<button
					class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
				>
					Просмотр логов
				</button>
			</div>
		</div>
	</PanelContent>
</template>

<style lang="scss" scoped></style>
