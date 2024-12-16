<script setup lang="ts"></script>
<template>
  <div
    class="relative h-[200px] border border-purple-300 hover:border-[#3F00A2] rounded-2xl p-[25px] bg-light-panels dark:bg-dark-panels shadow-sm hover:shadow-md transition hover:scale-105 cursor-pointer"
  >
    <div>
      <div class="flex items-center justify-between">
        <h2 class="font-bold text-lg mb-2">Нейросеть</h2>
        <div class="text-gray-400 text-xs flex items-center gap-2">
          <span class="flex items-center gap-1">
            <span>⏱ 30 мин</span>
          </span>
          <span>📊 Средний</span>
        </div>
      </div>
      <p class="text-gray-500 text-sm">
        Как обучить нейросеть продавать товары без менеджера
      </p>
    </div>
    <NuxtLink to="/panel/neuronet">
      <div
        class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-2xl shadow-lg hover:scale-105 transition duration-200 w-full mt-4 text-center"
      >
        Начать
      </div>
    </NuxtLink>
  </div>
</template>
