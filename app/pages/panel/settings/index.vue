<script setup lang="ts">
definePageMeta({
	layout: 'panel',
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Header Section -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Настройки</h1>
      <p class="mt-2 text-gray-600">Управление настройками системы и конфигурация</p>
    </div>

    <div class="max-w-4xl">
      <!-- Profile Settings -->
      <div class="bg-white rounded-lg shadow mb-6">
        <div class="p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Профиль компании</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Название компании
              </label>
              <input
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value="ООО Компания"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Email для уведомлений
              </label>
              <input
                type="email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value="info@company.com"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Часовой пояс
              </label>
              <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Москва (UTC+3)</option>
                <option>Калининград (UTC+2)</option>
                <option>Екатеринбург (UTC+5)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="bg-white rounded-lg shadow mb-6">
        <div class="p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Безопасность</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-medium text-gray-900">Двухфакторная аутентификация</h3>
                <p class="text-sm text-gray-500">Дополнительный уровень защиты для вашего аккаунта</p>
              </div>
              <button class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-gray-200">
                <span class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
              </button>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-medium text-gray-900">Уведомления о входе</h3>
                <p class="text-sm text-gray-500">Получать уведомления при входе с нового устройства</p>
              </div>
              <button class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-600">
                <span class="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Notification Settings -->
      <div class="bg-white rounded-lg shadow mb-6">
        <div class="p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Уведомления</h2>
          <div class="space-y-4">
            <div class="flex items-center">
              <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
              <label class="ml-3 text-sm text-gray-700">Email-уведомления о новых заказах</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
              <label class="ml-3 text-sm text-gray-700">Уведомления в Telegram</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label class="ml-3 text-sm text-gray-700">SMS-уведомления</label>
            </div>
          </div>
        </div>
      </div>

      <!-- API Settings -->
      <div class="bg-white rounded-lg shadow">
        <div class="p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-4">API Настройки</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                API Ключ
              </label>
              <div class="flex">
                <input
                  type="password"
                  class="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value="sk-1234567890abcdef"
                  disabled
                />
                <button class="px-4 py-2 bg-gray-100 text-gray-700 border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-200">
                  Показать
                </button>
              </div>
              <p class="mt-1 text-sm text-gray-500">Используйте этот ключ для доступа к API</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Webhook URL
              </label>
              <input
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value="https://your-domain.com/webhook"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="mt-6 flex justify-end">
        <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Сохранить изменения
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
