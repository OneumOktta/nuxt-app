<script setup lang="ts">
definePageMeta({
  layout: "panel",
});

const visitors = [
  {
    name: "Иван Сергеев",
    time: "2 часа назад в сети",
    avatar: "/mock/avatars/1.png",
  },
  {
    name: "Степан Иванов",
    time: "1 час назад в сети",
    avatar: "/mock/avatars/2.png",
  },
  {
    name: "Ирина Петрова",
    time: "12 часов назад в сети",
    avatar: "/mock/avatars/3.png",
  },
  {
    name: "Юлия Немова",
    time: "5 часов назад в сети",
    avatar: "/mock/avatars/4.png",
  },
  {
    name: "Олег Николаев",
    time: "3 часа назад в сети",
    avatar: "/mock/avatars/5.png",
  },
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
      <div class="flex flex-col items-start justify-start">
        <h1 class="text-2xl font-medium text-5xl">Обучение</h1>
        <p class="text-gray-500 text-base">Пройти обучение по нейросети</p>
      </div>
    </NuxtLink>

    <!-- Активные чаты -->
    <div
      class="col-span-2 row-span-1 bg-white shadow rounded-xl p-4 flex items-center justify-start bg-light-panels dark:bg-dark-panels gap-5 p-7 cursor-pointer hover:border hover:border-[#3F00A2]"
    >
      <img src="/icons/message.svg" alt="" class="w-66 h-66" />
      <div class="flex flex-col items-start justify-start">
        <h1 class="text-2xl font-medium text-5xl">24</h1>
        <p class="text-gray-500 text-base">Активных чата</p>
      </div>
    </div>

    <!-- Новые посетители -->
    <div
      class="col-span-2 row-span-1 bg-white shadow rounded-xl p-4 flex items-center justify-start bg-light-panels dark:bg-dark-panels gap-5 p-7 cursor-pointer hover:border hover:border-[#3F00A2]"
    >
      <img src="/icons/user.svg" alt="" class="w-66 h-66" />
      <div class="flex flex-col items-start justify-start">
        <h1 class="text-2xl font-medium text-5xl">54</h1>
        <p class="text-gray-500 text-base">Новых посетителя</p>
      </div>
    </div>

    <!-- Среднее время ответа -->
    <div
      class="col-span-2 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2 text-[20px]">Среднее время ответа</p>
      <div class="w-full h-32 bg-gray-100 rounded"></div>
    </div>

    <!-- Посетители -->
    <div
      class="col-span-2 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2 text-[20px]">Посетители</p>
      <ul>
        <li
          v-for="visitor in visitors"
          :key="visitor.name"
          class="flex justify-between text-sm mb-2 justify-between items-center"
        >
          <div class="flex items-center gap-2">
            <img :src="visitor.avatar" alt="" class="w-8 h-8 rounded-full" />
            <div class="flex flex-col items-start justify-start">
              <span>{{ visitor.name }}</span>
              <span>{{ visitor.time }}</span>
            </div>
          </div>

          <button class="py-1 px-5 bg-[#E4DEFF] w-16.5 h-6 rounded-lg">
            В чат
          </button>
        </li>
      </ul>
    </div>

    <!-- Аналитика -->
    <div
      class="col-span-3 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2 text-[20px]">Аналитика по запросам</p>
      <div class="w-full h-32 bg-gray-100 rounded"></div>
    </div>

    <!-- Оценка удовлетворенности -->
    <div
      class="col-span-2 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2 text-[20px]">Оценка удовлетворенности</p>
      <div class="w-full h-32 bg-gray-100 rounded"></div>
    </div>

    <!-- Географические данные -->
    <div
      class="col-span-2 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2 text-[20px]">Географические данные</p>
      <div class="w-full h-32 bg-gray-100 rounded"></div>
    </div>

    <!-- Метрики -->
    <div
      class="col-span-3 row-span-2 bg-white shadow rounded-xl p-4 bg-light-panels dark:bg-dark-panels"
    >
      <p class="font-bold mb-2 text-[20px]">Метрики</p>
      <div class="w-full h-32 bg-gray-100 rounded"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
