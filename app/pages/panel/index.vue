<script setup lang="ts">
definePageMeta({
  layout: "panel",
});

const visitors = [
  { name: "Иван Сергеев", time: "2 часа назад в сети" },
  { name: "Степан Иванов", time: "1 час назад в сети" },
  { name: "Ирина Петрова", time: "12 часов назад в сети" },
  { name: "Юлия Немова", time: "5 часов назад в сети" },
  { name: "Олег Николаев", time: "3 часа назад в сети" },
];

// Локальное состояние для отслеживания наведения на карточку
const isHovered = ref(null);
</script>

<template>
  <!-- Основной Grid контейнер -->
  <div class="grid grid-cols-7 grid-rows-5 gap-5 h-full rounded-2xl">
    <!-- Верхний блок "Обучение" -->
    <NuxtLink
      class="col-span-3 row-span-1 bg-white shadow rounded-xl p-4 flex items-center justify-start bg-light-panels dark:bg-dark-panels gap-5 p-7 cursor-pointer hover:border hover:border-[#3F00A2]"
      to="/panel/training"
    >
      <img src="/icons/training.svg" alt="" class="w-66 h-66" />
      <div class="flex flex-col items-center justify-start">
        <h1 class="text-2xl font-medium text-5xl">Обучение</h1>
        <p class="text-gray-500 text-base">Пройти обучение по нейросети</p>
      </div>
    </NuxtLink>

    <!-- Активные чаты -->
    <div
      class="col-span-2 row-span-1 bg-white shadow rounded-xl p-4 text-center bg-light-panels dark:bg-dark-panels"
    >
      <p class="text-xl font-medium">24</p>
      <p class="text-gray-500">Активных чата</p>
    </div>

    <!-- Новые посетители -->
    <div
      class="col-span-2 row-span-1 bg-white shadow rounded-xl p-4 text-center bg-light-panels dark:bg-dark-panels"
    >
      <p class="text-xl font-bold">54</p>
      <p class="text-gray-500">Новых посетителя</p>
    </div>

    <!-- Среднее время ответа -->
    <div
      class="col-span-2 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2">Среднее время ответа</p>
      <div class="w-full h-32 bg-gray-100 rounded"></div>
    </div>

    <!-- Посетители -->
    <div
      class="col-span-2 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2">Посетители</p>
      <ul>
        <li
          v-for="visitor in visitors"
          :key="visitor.name"
          class="flex justify-between text-sm mb-2"
        >
          <span>{{ visitor.name }}</span>
          <button class="text-white bg-purple-500 px-2 py-1 rounded text-xs">
            В чат
          </button>
        </li>
      </ul>
    </div>

    <!-- Аналитика -->
    <div
      class="col-span-3 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2">Аналитика по запросам</p>
      <div class="w-full h-32 bg-gray-100 rounded"></div>
    </div>

    <!-- Оценка удовлетворенности -->
    <div
      class="col-span-2 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2">Оценка удовлетворенности</p>
      <div class="w-full h-32 bg-gray-100 rounded"></div>
    </div>

    <!-- Географические данные -->
    <div
      class="col-span-2 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2">Географические данные</p>
      <div class="w-full h-32 bg-gray-100 rounded"></div>
    </div>

    <!-- Метрики -->
    <div
      class="col-span-3 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2">Метрики</p>
      <div class="w-full h-32 bg-gray-100 rounded"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
