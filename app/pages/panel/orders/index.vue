<script setup lang="ts">
definePageMeta({
	layout: 'panel',
})
</script>

<template>
	<div class="min-h-screen bg-gray-50 p-6">
		<!-- Header Section -->
		<div class="mb-8">
			<h1 class="text-3xl font-bold text-gray-900">Заказы</h1>
			<p class="mt-2 text-gray-600">
				Управление заказами и отслеживание статусов
			</p>
		</div>

		<!-- Summary Cards -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
			<!-- Total Orders -->
			<div class="bg-white rounded-lg shadow p-6">
				<div class="flex items-center">
					<div class="p-3 bg-blue-100 rounded-full">
						<svg
							class="w-6 h-6 text-blue-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
							/>
						</svg>
					</div>
					<div class="ml-4">
						<h2 class="text-sm font-medium text-gray-600">Всего заказов</h2>
						<p class="text-2xl font-semibold text-gray-900">1,248</p>
					</div>
				</div>
			</div>

			<!-- Pending Orders -->
			<div class="bg-white rounded-lg shadow p-6">
				<div class="flex items-center">
					<div class="p-3 bg-yellow-100 rounded-full">
						<svg
							class="w-6 h-6 text-yellow-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<div class="ml-4">
						<h2 class="text-sm font-medium text-gray-600">В обработке</h2>
						<p class="text-2xl font-semibold text-gray-900">23</p>
					</div>
				</div>
			</div>

			<!-- Completed Orders -->
			<div class="bg-white rounded-lg shadow p-6">
				<div class="flex items-center">
					<div class="p-3 bg-green-100 rounded-full">
						<svg
							class="w-6 h-6 text-green-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
					</div>
					<div class="ml-4">
						<h2 class="text-sm font-medium text-gray-600">Выполнено</h2>
						<p class="text-2xl font-semibold text-gray-900">1,180</p>
					</div>
				</div>
			</div>

			<!-- Cancelled Orders -->
			<div class="bg-white rounded-lg shadow p-6">
				<div class="flex items-center">
					<div class="p-3 bg-red-100 rounded-full">
						<svg
							class="w-6 h-6 text-red-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</div>
					<div class="ml-4">
						<h2 class="text-sm font-medium text-gray-600">Отменено</h2>
						<p class="text-2xl font-semibold text-gray-900">45</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Filters and Search -->
		<div class="mb-6 flex flex-col sm:flex-row gap-4">
			<div class="flex-1">
				<div class="relative">
					<input
						type="text"
						placeholder="Поиск заказов..."
						class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
					/>
					<svg
						class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
			</div>
			<div class="flex gap-3">
				<select class="px-4 py-2 border border-gray-300 rounded-lg bg-white">
					<option>Все статусы</option>
					<option>Новый</option>
					<option>В обработке</option>
					<option>Выполнен</option>
					<option>Отменен</option>
				</select>
				<button
					class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
				>
					Новый заказ
				</button>
			</div>
		</div>

		<!-- Orders Table -->
		<div class="bg-white rounded-lg shadow overflow-hidden">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							ID Заказа
						</th>
						<th
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Клиент
						</th>
						<th
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Статус
						</th>
						<th
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Сумма
						</th>
						<th
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Дата
						</th>
						<th
							class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Действия
						</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<!-- Order Row 1 -->
					<tr>
						<td class="px-6 py-4 whitespace-nowrap">
							<span class="text-sm font-medium text-gray-900"
								>#ORD-2023-1248</span
							>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<div class="flex items-center">
								<div class="text-sm font-medium text-gray-900">
									Александр Иванов
								</div>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<span
								class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
							>
								Выполнен
							</span>
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
							15,000 ₽
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
							2023-10-15
						</td>
						<td
							class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
						>
							<button class="text-blue-600 hover:text-blue-900">
								Подробнее
							</button>
						</td>
					</tr>

					<!-- Order Row 2 -->
					<tr>
						<td class="px-6 py-4 whitespace-nowrap">
							<span class="text-sm font-medium text-gray-900"
								>#ORD-2023-1247</span
							>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<div class="flex items-center">
								<div class="text-sm font-medium text-gray-900">
									Елена Петрова
								</div>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<span
								class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
							>
								В обработке
							</span>
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
							8,500 ₽
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
							2023-10-14
						</td>
						<td
							class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
						>
							<button class="text-blue-600 hover:text-blue-900">
								Подробнее
							</button>
						</td>
					</tr>

					<!-- Order Row 3 -->
					<tr>
						<td class="px-6 py-4 whitespace-nowrap">
							<span class="text-sm font-medium text-gray-900"
								>#ORD-2023-1246</span
							>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<div class="flex items-center">
								<div class="text-sm font-medium text-gray-900">
									Дмитрий Сидоров
								</div>
							</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<span
								class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
							>
								Отменен
							</span>
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
							12,300 ₽
						</td>
						<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
							2023-10-14
						</td>
						<td
							class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
						>
							<button class="text-blue-600 hover:text-blue-900">
								Подробнее
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Pagination -->
		<div class="mt-6 flex items-center justify-between">
			<div class="text-sm text-gray-700">
				Показано <span class="font-medium">1-3</span> из
				<span class="font-medium">248</span> заказов
			</div>
			<div class="flex gap-2">
				<button
					class="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
				>
					Назад
				</button>
				<button
					class="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
				>
					1
				</button>
				<button
					class="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
				>
					2
				</button>
				<button
					class="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
				>
					3
				</button>
				<button
					class="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
				>
					Вперед
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
