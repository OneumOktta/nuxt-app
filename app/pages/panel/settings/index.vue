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
      <p class="mt-2 text-gray-600">
        Управление настройками системы и конфигурация
      </p>
    </div>

    <div class="max-w-4xl">
      <!-- Profile Settings -->
      <div class="mb-6 rounded-lg bg-white shadow">
        <div class="p-6">
          <h2 class="mb-4 text-lg font-medium text-gray-900">
            Профиль компании
          </h2>
          <div class="space-y-4">
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-700">
                Название компании
              </label>
              <input
                type="text"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                value="ООО Компания"
              />
            </div>
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-700">
                Email для уведомлений
              </label>
              <input
                type="email"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                value="info@company.com"
              />
            </div>
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-700">
                Часовой пояс
              </label>
              <select
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                <option>Москва (UTC+3)</option>
                <option>Калининград (UTC+2)</option>
                <option>Екатеринбург (UTC+5)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="mb-6 rounded-lg bg-white shadow">
        <div class="p-6">
          <h2 class="mb-4 text-lg font-medium text-gray-900">Безопасность</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-medium text-gray-900">
                  Двухфакторная аутентификация
                </h3>
                <p class="text-sm text-gray-500">
                  Дополнительный уровень защиты для вашего аккаунта
                </p>
              </div>
              <button
                class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span
                  class="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                ></span>
              </button>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-medium text-gray-900">
                  Уведомления о входе
                </h3>
                <p class="text-sm text-gray-500">
                  Получать уведомления при входе с нового устройства
                </p>
              </div>
              <button
                class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span
                  class="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Notification Settings -->
      <div class="mb-6 rounded-lg bg-white shadow">
        <div class="p-6">
          <h2 class="mb-4 text-lg font-medium text-gray-900">Уведомления</h2>
          <div class="space-y-4">
            <div class="flex items-center">
              <input
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked
              />
              <label class="ml-3 text-sm text-gray-700">
                Email-уведомления о новых заказах
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked
              />
              <label class="ml-3 text-sm text-gray-700">
                Уведомления в Telegram
              </label>
            </div>
            <div class="flex items-center">
              <input
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label class="ml-3 text-sm text-gray-700">SMS-уведомления</label>
            </div>
          </div>
        </div>
      </div>

      <!-- API Settings -->
      <div class="rounded-lg bg-white shadow">
        <div class="p-6">
          <h2 class="mb-4 text-lg font-medium text-gray-900">API Настройки</h2>
          <div class="space-y-4">
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-700">
                API Ключ
              </label>
              <div class="flex">
                <input
                  type="password"
                  class="flex-1 rounded-l-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  value="sk-1234567890abcdef"
                  disabled
                />
                <button
                  class="rounded-r-md border border-l-0 border-gray-300 bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Показать
                </button>
              </div>
              <p class="mt-1 text-sm text-gray-500">
                Используйте этот ключ для доступа к API
              </p>
            </div>
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-700">
                Webhook URL
              </label>
              <input
                type="text"
                class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                value="https://your-domain.com/webhook"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="mt-6 flex justify-end">
        <button
          class="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Сохранить изменения
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
