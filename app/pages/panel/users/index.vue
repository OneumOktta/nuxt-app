<script setup lang="ts">
  definePageMeta({
    layout: 'panel',
  })
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- Header Section -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Пользователи</h1>
      <p class="mt-2 text-gray-600">
        Управление пользователями и их правами доступа
      </p>
    </div>

    <!-- Search and Filters -->
    <div class="mb-6 flex flex-col gap-4 sm:flex-row">
      <div class="flex-1">
        <div class="relative">
          <input
            type="text"
            placeholder="Поиск пользователей..."
            class="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
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
        <select class="rounded-lg border border-gray-300 bg-white px-4 py-2">
          <option>Все роли</option>
          <option>Администратор</option>
          <option>Модератор</option>
          <option>Пользователь</option>
        </select>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Добавить пользователя
        </button>
      </div>
    </div>

    <!-- Users Table -->
    <div class="overflow-hidden rounded-lg bg-white shadow">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Пользователь
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Роль
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Статус
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Последний вход
            </th>
            <th
              class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Действия
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <!-- User Row 1 -->
          <tr>
            <td class="whitespace-nowrap px-6 py-4">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
                  >
                    <span class="font-medium text-gray-600">АК</span>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    Анна Ковалева
                  </div>
                  <div class="text-sm text-gray-500">anna@example.com</div>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <span
                class="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800"
              >
                Администратор
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <span
                class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
              >
                Активен
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              2 часа назад
            </td>
            <td
              class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
            >
              <button class="mr-3 text-blue-600 hover:text-blue-900">
                Изменить
              </button>
              <button class="text-red-600 hover:text-red-900">Удалить</button>
            </td>
          </tr>

          <!-- User Row 2 -->
          <tr>
            <td class="whitespace-nowrap px-6 py-4">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
                  >
                    <span class="font-medium text-gray-600">ИС</span>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    Иван Смирнов
                  </div>
                  <div class="text-sm text-gray-500">ivan@example.com</div>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <span
                class="inline-flex rounded-full bg-purple-100 px-2 text-xs font-semibold leading-5 text-purple-800"
              >
                Модератор
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <span
                class="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800"
              >
                Отсутствует
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              1 день назад
            </td>
            <td
              class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
            >
              <button class="mr-3 text-blue-600 hover:text-blue-900">
                Изменить
              </button>
              <button class="text-red-600 hover:text-red-900">Удалить</button>
            </td>
          </tr>

          <!-- User Row 3 -->
          <tr>
            <td class="whitespace-nowrap px-6 py-4">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200"
                  >
                    <span class="font-medium text-gray-600">МП</span>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    Мария Петрова
                  </div>
                  <div class="text-sm text-gray-500">maria@example.com</div>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <span
                class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800"
              >
                Пользователь
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <span
                class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
              >
                Активен
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              5 минут назад
            </td>
            <td
              class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
            >
              <button class="mr-3 text-blue-600 hover:text-blue-900">
                Изменить
              </button>
              <button class="text-red-600 hover:text-red-900">Удалить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="mt-6 flex items-center justify-between">
      <div class="text-sm text-gray-700">
        Показано
        <span class="font-medium">1-3</span>
        из
        <span class="font-medium">12</span>
        пользователей
      </div>
      <div class="flex gap-2">
        <button
          class="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50"
        >
          Назад
        </button>
        <button
          class="rounded-md bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
        >
          1
        </button>
        <button
          class="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50"
        >
          2
        </button>
        <button
          class="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50"
        >
          3
        </button>
        <button
          class="rounded-md border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50"
        >
          Вперед
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
