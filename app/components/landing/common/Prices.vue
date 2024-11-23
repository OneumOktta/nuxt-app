<script setup lang="ts">
import { ref, computed } from 'vue'

const tokensSteps = [10000, 50000, 100000, 150000, 200000, 250000, 300000]
const dataSteps = [10000, 30000, 50000, 75000, 100000]

const selectedTokenIndex = ref(0)
const selectedDataIndex = ref(0)
const selectedPeriod = ref('3')

const periods = [
	{ id: '3', label: '3 месяца', discount: 0 },
	{ id: '6', label: '6 месяцев', discount: 0.1 },
	{ id: '12', label: '1 год', discount: 0.15 },
]

const tokensPerMonth = computed(() => tokensSteps[selectedTokenIndex.value])
const siteDataAmount = computed(() => dataSteps[selectedDataIndex.value])

const totalAmount = computed(() => tokensPerMonth.value + siteDataAmount.value)
const currentPeriod = computed(
	() => periods.find(p => p.id === selectedPeriod.value)!
)
const discountedPrice = computed(() => {
	const discount = currentPeriod.value.discount
	return Math.round(totalAmount.value * (1 - discount))
})

const formatNumber = (num: number) => {
	return new Intl.NumberFormat('ru-RU').format(num)
}

const formatPrice = (num: number) => {
	return new Intl.NumberFormat('ru-RU').format(Math.round(num))
}

const updateTokens = (event: Event) => {
	const value = Number((event.target as HTMLInputElement).value)
	selectedTokenIndex.value = value
}

const updateData = (event: Event) => {
	const value = Number((event.target as HTMLInputElement).value)
	selectedDataIndex.value = value
}
</script>

<template>
	<section id="prices" class="container bg-gray-200 mx-auto px-4 py-12">
		<h2 class="text-3xl font-bold text-center mb-8">Тарифы</h2>
		<div
			class="bg-gray-100 rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative"
		>
			<!-- First Column -->
			<div class="space-y-6">
				<p class="font-medium">Цены зависят от количества токенов в месяц</p>

				<!-- Tokens Slider -->
				<div class="space-y-2">
					<input
						type="range"
						:value="selectedTokenIndex"
						@input="updateTokens"
						:min="0"
						:max="tokensSteps.length - 1"
						:step="1"
						class="w-full"
					/>
					<p class="text-sm mt-4">
						до {{ formatNumber(tokensPerMonth) }} посетителей в месяц
					</p>
				</div>

				<!-- Site Data Slider -->
				<div class="space-y-2">
					<input
						type="range"
						:value="selectedDataIndex"
						@input="updateData"
						:min="0"
						:max="dataSteps.length - 1"
						:step="1"
						class="w-full"
					/>
					<p class="text-sm mt-4">
						до {{ formatNumber(siteDataAmount) }} данных о сайте
					</p>
				</div>

				<div class="space-y-2 pt-4">
					<p class="text-sm">
						Количество подключаемых членов команды не влияет на цену
					</p>
					<p class="text-sm">
						При превышении лимита токенов взимается дополнительная плата
					</p>
				</div>
			</div>

			<!-- Divider -->
			<div
				class="hidden md:block absolute left-1/3 top-8 bottom-8 w-px bg-gray-300"
			></div>

			<!-- Second Column -->
			<div class="space-y-6">
				<div class="space-y-2">
					<p class="text-lg">{{ formatNumber(tokensPerMonth) }} посетителей</p>
					<p class="text-lg">{{ formatNumber(siteDataAmount) }} токенов</p>
				</div>

				<div class="flex items-center space-x-3">
					<span class="text-2xl font-medium"
						>{{ formatPrice(discountedPrice) }} ₽</span
					>
					<template v-if="currentPeriod.discount > 0">
						<span class="text-gray-500 line-through text-base"
							>{{ formatPrice(totalAmount) }} ₽</span
						>
						<span
							class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-medium"
						>
							-{{ currentPeriod.discount * 100 }}%
						</span>
					</template>
				</div>

				<!-- Period Selector -->
				<div class="bg-gray-200 rounded-full p-1 flex">
					<template v-for="period in periods" :key="period.id">
						<button
							@click="selectedPeriod = period.id"
							:class="[
								'flex-1 px-4 py-2 text-sm rounded-full transition-colors duration-200',
								selectedPeriod === period.id
									? 'bg-white shadow-sm text-gray-800'
									: 'text-gray-600 hover:text-gray-800',
							]"
						>
							{{ period.label }}
						</button>
					</template>
				</div>

				<div class="pt-4 space-y-2">
					<button
						class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-200"
					>
						Выбрать тариф
					</button>
					<p class="text-center text-sm text-gray-600">14 дней бесплатно</p>
				</div>
			</div>

			<!-- Third Column -->
			<div class="h-full">
				<div class="flex flex-col h-full space-y-2">
					<div
						v-for="(feature, index) in [
							'Неограниченное кол-во менеджеров',
							'Чат-боты для мессенджеров',
							'Подключение мессенджеров',
							'Интеграции',
							'Тригерные сообщения',
							'Доступ к API',
							'Распознание голосовых сообщений',
						]"
						:key="index"
						class="flex items-center flex-1 px-4"
						:class="index % 2 === 0 ? '' : 'bg-gray-200 rounded-xl'"
					>
						<div class="flex items-center space-x-3 py-3">
							<svg
								class="w-5 h-5 text-green-500 flex-shrink-0"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>{{ feature }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Enterprise Plan -->
		<div class="border-2 border-white rounded-xl p-6 my-8">
			<div class="flex justify-between items-center">
				<div>
					<h3 class="text-xl font-bold mb-2">Oneum Enterprise</h3>
					<p class="text-gray-600 mb-2">
						Для крупного бизнеса, который хочет уверенно масштабироваться
					</p>
					<p class="text-sm text-gray-400">∞ количество запросов</p>
				</div>
				<button
					class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
				>
					Связаться с нами
				</button>
			</div>
		</div>
	</section>
</template>

<style scoped>
input[type='range'] {
	-webkit-appearance: none;
	width: 100%;
	height: 4px;
	background: #e2e8f0;
	border-radius: 2px;
	outline: none;
	margin: 1rem 0;
}

input[type='range']::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 16px;
	height: 16px;
	background: #4f46e5;
	border-radius: 50%;
	cursor: pointer;
}

input[type='range']::-moz-range-thumb {
	width: 16px;
	height: 16px;
	background: #4f46e5;
	border-radius: 50%;
	cursor: pointer;
	border: none;
}
</style>
