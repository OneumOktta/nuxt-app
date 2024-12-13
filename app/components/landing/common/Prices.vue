<script setup lang="ts">
  import { computed, ref } from 'vue'

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

  const totalAmount = computed(
    () => tokensPerMonth.value + siteDataAmount.value
  )
  const currentPeriod = computed(
    () => periods.find((p) => p.id === selectedPeriod.value)!
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
  <section id="prices" class="container mx-auto px-4 py-12">
    <h2 class="mb-16 text-center text-5xl font-semibold">Тарифы</h2>
    <div
      class="relative grid grid-cols-1 gap-8 rounded-3xl bg-light-panels p-8 transition-colors dark:bg-dark-panels md:grid-cols-3"
    >
      <!-- First Column -->
      <div class="space-y-6">
        <p class="font-medium text-light-text dark:text-dark-text">
          Цены зависят от количества токенов в месяц
        </p>

        <!-- Tokens Slider -->
        <div class="space-y-2">
          <input
            type="range"
            :value="selectedTokenIndex"
            :min="0"
            :max="tokensSteps.length - 1"
            :step="1"
            class="w-full"
            @input="updateTokens"
          />
          <p class="mt-4 text-sm text-light-text/80 dark:text-dark-text/80">
            до {{ formatNumber(tokensPerMonth) }} посетителей в месяц
          </p>
        </div>

        <!-- Site Data Slider -->
        <div class="space-y-2">
          <input
            type="range"
            :value="selectedDataIndex"
            :min="0"
            :max="dataSteps.length - 1"
            :step="1"
            class="w-full"
            @input="updateData"
          />
          <p class="mt-4 text-sm text-light-text/80 dark:text-dark-text/80">
            до {{ formatNumber(siteDataAmount) }} данных о сайте
          </p>
        </div>

        <div class="space-y-2 pt-4">
          <p class="text-sm text-light-text/60 dark:text-dark-text/60">
            Количество подключаемых членов команды не влияет на цену
          </p>
          <p class="text-sm text-light-text/60 dark:text-dark-text/60">
            При превышении лимита токенов взимается дополнительная плата
          </p>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="absolute bottom-8 left-1/3 top-8 hidden w-px bg-light-text/10 dark:bg-dark-text/10 md:block"
      ></div>

      <!-- Second Column -->
      <div class="space-y-6">
        <div class="space-y-2">
          <p class="text-lg text-light-text dark:text-dark-text">
            {{ formatNumber(tokensPerMonth) }} посетителей
          </p>
          <p class="text-lg text-light-text dark:text-dark-text">
            {{ formatNumber(siteDataAmount) }} токенов
          </p>
        </div>

        <div class="flex items-center space-x-3">
          <span
            class="text-2xl font-medium text-light-text dark:text-dark-text"
          >
            {{ formatPrice(discountedPrice) }} ₽
          </span>

          <span
            v-if="currentPeriod.discount > 0"
            class="text-sm text-light-text/40 line-through dark:text-dark-text/40"
          >
            {{ formatPrice(totalAmount) }} ₽
          </span>

          <span
            v-if="currentPeriod.discount > 0"
            class="rounded-full bg-gradient-to-r from-lightPink to-lightBlue px-2 py-1 text-xs text-white"
          >
            -{{ currentPeriod.discount * 100 }}%
          </span>
        </div>

        <!-- Period Selector -->
        <div class="flex rounded-full bg-light-panels p-1 dark:bg-dark-panels">
          <template v-for="period in periods" :key="period.id">
            <button
              :class="[
                'flex-1 rounded-full px-4 py-2 text-sm transition-all duration-300',
                selectedPeriod === period.id
                  ? 'bg-gradient-to-r from-lightPink to-lightBlue text-white shadow-lg'
                  : 'text-light-text hover:bg-light-text/5 dark:text-dark-text dark:hover:bg-dark-text/5',
              ]"
              @click="selectedPeriod = period.id"
            >
              {{ period.label }}
            </button>
          </template>
        </div>

        <div class="space-y-2 pt-4">
          <GradientButton class="w-full">Выбрать тариф</GradientButton>
          <p
            class="text-center text-sm text-light-text/60 dark:text-dark-text/60"
          >
            14 дней бесплатно
          </p>
        </div>
      </div>

      <!-- Third Column -->
      <div class="h-full">
        <div class="flex h-full flex-col space-y-2">
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
            class="flex flex-1 items-center px-4"
            :class="
              index % 2 === 0 ? '' : 'rounded-xl border-2 border-lightPink/20'
            "
          >
            <div class="flex items-center space-x-3 py-3">
              <svg
                class="h-5 w-5 flex-shrink-0 text-green-500"
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
    <div class="my-8 rounded-3xl border-2 border-lightPink/50 p-6">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="mb-2 text-xl font-bold">Oneum Enterprise</h3>
          <p class="mb-2 text-light-text/80 dark:text-dark-text/80">
            Для крупного бизнеса, который хочет уверенно масштабироваться
          </p>
          <p class="text-sm text-light-text/60 dark:text-dark-text/60">
            ∞ количество запросов
          </p>
        </div>
        <GradientButton>Связаться с нами</GradientButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    background: theme('colors.lightPink');
    border-radius: 2px;
    outline: none;
    margin: 1rem 0;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: theme('colors.lightBlue');
    border-radius: 50%;
    cursor: pointer;
  }

  input[type='range']::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: theme('colors.lightBlue');
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }
</style>
