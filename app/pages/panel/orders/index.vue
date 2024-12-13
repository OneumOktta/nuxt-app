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
    <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <!-- Total Orders -->
      <div class="rounded-lg bg-white p-6 shadow">
        <div class="flex items-center">
          <div class="rounded-full bg-blue-100 p-3">
            <svg
              class="h-6 w-6 text-blue-600"
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
      <div class="rounded-lg bg-white p-6 shadow">
        <div class="flex items-center">
          <div class="rounded-full bg-yellow-100 p-3">
            <svg
              class="h-6 w-6 text-yellow-600"
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
      <div class="rounded-lg bg-white p-6 shadow">
        <div class="flex items-center">
          <div class="rounded-full bg-green-100 p-3">
            <svg
              class="h-6 w-6 text-green-600"
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
      <div class="rounded-lg bg-white p-6 shadow">
        <div class="flex items-center">
          <div class="rounded-full bg-red-100 p-3">
            <svg
              class="h-6 w-6 text-red-600"
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
    <div class="mb-6 flex flex-col gap-4 sm:flex-row">
      <div class="flex-1">
        <div class="relative">
          <input
            type="text"
            placeholder="Поиск заказов..."
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
          <option>Все статусы</option>
          <option>Новый</option>
          <option>В обработке</option>
          <option>Выполнен</option>
          <option>Отменен</option>
        </select>
        <button
          class="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Новый заказ
        </button>
      </div>
    </div>

    <!-- Orders Table -->
    <div class="overflow-hidden rounded-lg bg-white shadow">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              ID Заказа
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Клиент
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Статус
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Сумма
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Дата
            </th>
            <th
              class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
            >
              Действия
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <!-- Order Row 1 -->
          <tr>
            <td class="whitespace-nowrap px-6 py-4">
              <span class="text-sm font-medium text-gray-900">
                #ORD-2023-1248
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <div class="flex items-center">
                <div class="text-sm font-medium text-gray-900">
                  Александр Иванов
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <span
                class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
              >
                Выполнен
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              15,000 ₽
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              2023-10-15
            </td>
            <td
              class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
            >
              <button class="text-blue-600 hover:text-blue-900">
                Подробнее
              </button>
            </td>
          </tr>

          <!-- Order Row 2 -->
          <tr>
            <td class="whitespace-nowrap px-6 py-4">
              <span class="text-sm font-medium text-gray-900">
                #ORD-2023-1247
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <div class="flex items-center">
                <div class="text-sm font-medium text-gray-900">
                  Елена Петрова
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <span
                class="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800"
              >
                В обработке
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              8,500 ₽
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              2023-10-14
            </td>
            <td
              class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
            >
              <button class="text-blue-600 hover:text-blue-900">
                Подробнее
              </button>
            </td>
          </tr>

          <!-- Order Row 3 -->
          <tr>
            <td class="whitespace-nowrap px-6 py-4">
              <span class="text-sm font-medium text-gray-900">
                #ORD-2023-1246
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <div class="flex items-center">
                <div class="text-sm font-medium text-gray-900">
                  Дмитрий Сидоров
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-6 py-4">
              <span
                class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800"
              >
                Отменен
              </span>
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
              12,300 ₽
            </td>
            <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
              2023-10-14
            </td>
            <td
              class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium"
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
        Показано
        <span class="font-medium">1-3</span>
        из
        <span class="font-medium">248</span>
        заказов
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
