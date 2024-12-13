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
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Stats Card -->
        <div class="rounded-lg bg-white p-6 shadow">
          <h2 class="mb-4 text-xl font-semibold text-gray-800">Статистика</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Запросов сегодня</span>
              <span class="font-medium text-gray-900">127</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-600">Активных моделей</span>
              <span class="font-medium text-gray-900">3</span>
            </div>
          </div>
        </div>

        <!-- Settings Card -->
        <div class="rounded-lg bg-white p-6 shadow">
          <h2 class="mb-4 text-xl font-semibold text-gray-800">Настройки</h2>
          <div class="space-y-4">
            <div class="flex flex-col">
              <label class="mb-1 text-sm text-gray-600">
                Модель по умолчанию
              </label>
              <select class="rounded-md border p-2">
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
        <div class="rounded-lg bg-white p-6 shadow">
          <h2 class="mb-4 text-xl font-semibold text-gray-800">
            Статус системы
          </h2>
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
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
          class="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Обновить настройки
        </button>
        <button
          class="rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
        >
          Просмотр логов
        </button>
      </div>
    </div>
  </PanelContent>
</template>

<style lang="scss" scoped></style>
