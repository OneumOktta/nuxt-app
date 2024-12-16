<script setup lang="ts">
definePageMeta({
  layout: "panel",
});
import DropdownFilter from "~/pages/panel/training/DropdownFilter.vue";

// Опции для каждого списка
const moduleOptions = ["Нейросеть", "Интеграции", "Чат боты"];
</script>

<template>
  <PanelContent>
    <!-- Заголовок -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center gap-10">
        <img src="/icons/left.svg" alt="" />
        <h1 class="text-3xl font-bold">Нейросеть</h1>
      </div>
      <div
        class="w-1/4 px-7 py-2 border border-purple-300 hover:border-[#3F00A2] rounded-2xl mr-[86px]"
      >
        <p class="text-gray-500 text-sm mb-1">Ваш прогресс</p>
        <div class="w-full bg-gray-200 rounded-full h-2 relative">
          <div
            class="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            style="width: 20%"
          ></div>
        </div>
        <span class="text-xs text-gray-600">20% Новичок</span>
      </div>
    </div>
    <div class="flex justify-between items-start p-6 gap-4 px-[86px]">
      <DropdownFilter title="Уровень сложности" :options="moduleOptions" />
    </div>
    <div class="grid grid-cols-[1fr_4fr] grid-rows-[1fr_2fr] gap-4 px-[86px]">
      <div
        class="flex flex-col justify-between border border-purple-300 hover:border-[#3F00A2] rounded-2xl p-[25px] bg-light-panels dark:bg-dark-panels shadow-sm hover:shadow-md cursor-pointer col-span-1 row-span-1"
      >
        <h2 class="font-bold text-lg mb-2">Нейросеть</h2>
        <h2 class="font-bold text-lg mb-2">Нейросеть</h2>
      </div>
      <div
        class="flex flex-col items-center justify-center border border-purple-300 hover:border-[#3F00A2] rounded-2xl p-[25px] bg-light-panels dark:bg-dark-panels shadow-sm hover:shadow-md cursor-pointer col-span-1 row-span-2"
      >
        <ul class="mb-16 w-full">
          <li class="border-b border-[#3F00A2] py-2 my-2">
            <div class="flex justify-between items-center">
              <h2 class="font-bold text-lg mb-2">1 Как работает нейросеть</h2>
              <div class="flex gap-8 items-end">
                <div class="flex flex-col items-center gap-1">
                  <img src="/icons/time.svg" alt="" width="20" height="20" />
                  <p class="text-[8px]">30 мин</p>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <img src="/icons/done.svg" alt="" width="20" height="20" />
                  <p class="text-[8px]">Завершено</p>
                </div>
              </div>
            </div>
            <p>2 урока</p>
          </li>
          <li class="border-b border-[#3F00A2] py-2 my-2">
            <div class="flex justify-between items-center">
              <h2 class="font-bold text-lg mb-2">1 Как работает нейросеть</h2>
              <div class="flex gap-8 items-end">
                <div class="flex flex-col items-center gap-1">
                  <img src="/icons/time.svg" alt="" width="20" height="20" />
                  <p class="text-[8px]">30 мин</p>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <img src="/icons/process.svg" alt="" width="20" height="20" />
                  <p class="text-[8px]">В процессе</p>
                </div>
              </div>
            </div>
            <p>2 урока</p>
          </li>
          <li class="border-b border-[#3F00A2] py-2 my-2">
            <div class="flex justify-between items-center">
              <h2 class="font-bold text-lg mb-2">1 Как работает нейросеть</h2>
              <div class="flex gap-8 items-end">
                <div class="flex flex-col items-center gap-1">
                  <img src="/icons/time.svg" alt="" width="20" height="20" />
                  <p class="text-[8px]">30 мин</p>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <img src="/icons/null.svg" alt="" width="20" height="20" />
                  <p class="text-[8px]">Не начато</p>
                </div>
              </div>
            </div>
            <p>2 урока</p>
          </li>
          <li class="border-b border-[#3F00A2] py-2 my-2">
            <div class="flex justify-between items-center">
              <h2 class="font-bold text-lg mb-2">1 Как работает нейросеть</h2>
              <div class="flex gap-8 items-end">
                <div class="flex flex-col items-center gap-1">
                  <img src="/icons/time.svg" alt="" width="20" height="20" />
                  <p class="text-[8px]">30 мин</p>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <img src="/icons/null.svg" alt="" width="20" height="20" />
                  <p class="text-[8px]">Не начато</p>
                </div>
              </div>
            </div>
            <p>2 урока</p>
          </li>
        </ul>
        <NuxtLink to="/panel/neuronet" class="w-1/3">
          <div
            class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-2xl shadow-lg hover:scale-105 transition duration-200 mt-4 text-center"
          >
            Продолжить модуль
          </div>
        </NuxtLink>
      </div>
      <div
        class="border border-purple-300 hover:border-[#3F00A2] rounded-2xl p-[25px] bg-light-panels dark:bg-dark-panels shadow-sm hover:shadow-md cursor-pointer col-span-1 row-span-1"
      >
        <h2 class="font-bold text-lg mb-2">Дополнительные материалы</h2>
        <div class="flex flex-col">
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-lg">Триггерные сообщения</h3>
            <button
              class="text-[8px] py-1.5 px-4 bg-[#E4DEFF] w-16.5 h-6 rounded-lg"
            >
              Перейти
            </button>
          </div>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-lg">Триггерные сообщения</h3>
            <button
              class="text-[8px] py-1.5 px-4 bg-[#E4DEFF] w-16.5 h-6 rounded-lg"
            >
              Перейти
            </button>
          </div>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-lg">Триггерные сообщения</h3>
            <button
              class="text-[8px] py-1.5 px-4 bg-[#E4DEFF] w-16.5 h-6 rounded-lg"
            >
              Перейти
            </button>
          </div>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-lg">Триггерные сообщения</h3>
            <button
              class="text-[8px] py-1.5 px-4 bg-[#E4DEFF] w-16.5 h-6 rounded-lg"
            >
              Перейти
            </button>
          </div>
        </div>
      </div>
    </div>
  </PanelContent>
</template>

<style lang="scss" scoped></style>
