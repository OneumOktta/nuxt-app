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
        <h1 class="text-3xl font-bold text-gray-900">Интеграции</h1>
        <p class="mt-2 text-gray-600">Управление внешними сервисами и API</p>
      </div>

      <!-- Integration Cards Grid -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <!-- Telegram Integration -->
        <div class="rounded-lg bg-white p-6 shadow">
          <div class="mb-4 flex items-center justify-between">
            <div class="flex items-center">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100"
              >
                <svg
                  class="h-6 w-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.51-.46-.01-1.35-.26-2.01-.47-.81-.26-1.45-.4-1.4-.85.03-.22.46-.45 1.3-.68 5.09-2.22 8.49-3.68 10.19-4.4.73-.31 1.29-.47 1.76-.48z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Telegram</h3>
                <p class="text-sm text-gray-500">Бот и уведомления</p>
              </div>
            </div>
            <span
              class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700"
            >
              Активно
            </span>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">ID бота</span>
              <span class="text-gray-900">@your_bot_name</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Подключенные чаты</span>
              <span class="text-gray-900">3</span>
            </div>
          </div>
          <button
            class="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
          >
            Настроить
          </button>
        </div>

        <!-- WhatsApp Integration -->
        <div class="rounded-lg bg-white p-6 shadow">
          <div class="mb-4 flex items-center justify-between">
            <div class="flex items-center">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100"
              >
                <svg
                  class="h-6 w-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.46 14.45l-1.36-.62c.28-.61.41-1.24.41-1.89 0-.65-.13-1.28-.41-1.89l1.36-.62c.35.75.53 1.56.53 2.41 0 .85-.18 1.66-.53 2.41zm4.04-8.28l-1.37.62c-.69-.71-1.52-1.27-2.47-1.67v-1.4c1.25.45 2.37 1.15 3.31 2.07l.53.38zm-5.04 6.45c-.33-.65-.5-1.34-.5-2.07s.17-1.42.5-2.07l1.36.62c-.24.51-.36 1.02-.36 1.55 0 .53.12 1.04.36 1.55l-1.36.42zm1-4.42l1.37-.62c.69.71 1.52 1.27 2.47 1.67v1.4c-1.25-.45-2.37-1.15-3.31-2.07l-.53-.38z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">WhatsApp</h3>
                <p class="text-sm text-gray-500">Бизнес API</p>
              </div>
            </div>
            <span
              class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              Не подключено
            </span>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Статус верификации</span>
              <span class="text-gray-900">Ожидает</span>
            </div>
          </div>
          <button
            class="mt-4 w-full rounded-md border border-gray-300 px-4 py-2 text-sm transition-colors hover:bg-gray-50"
          >
            Подключить
          </button>
        </div>

        <!-- Email Integration -->
        <div class="rounded-lg bg-white p-6 shadow">
          <div class="mb-4 flex items-center justify-between">
            <div class="flex items-center">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100"
              >
                <svg
                  class="h-6 w-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold text-gray-900">Email</h3>
                <p class="text-sm text-gray-500">SMTP сервер</p>
              </div>
            </div>
            <span
              class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700"
            >
              Настройка
            </span>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Сервер</span>
              <span class="text-gray-900">smtp.example.com</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Порт</span>
              <span class="text-gray-900">587</span>
            </div>
          </div>
          <button
            class="mt-4 w-full rounded-md bg-purple-600 px-4 py-2 text-sm text-white transition-colors hover:bg-purple-700"
          >
            Завершить настройку
          </button>
        </div>
      </div>

      <!-- Add New Integration -->
      <div class="mt-8">
        <button
          class="flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
        >
          <svg
            class="mr-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Добавить новую интеграцию
        </button>
      </div>
    </div>
  </PanelContent>
</template>

<style lang="scss" scoped></style>
