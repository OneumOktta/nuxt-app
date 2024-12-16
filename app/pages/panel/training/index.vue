<script setup>
import TrainingCard from "~/pages/panel/training/TrainingCard.vue";
import DropdownFilter from "~/pages/panel/training/DropdownFilter.vue";
definePageMeta({
  layout: "panel",
});
// Опции для каждого списка
const difficultyOptions = ["Легкий", "Средний", "Сложный"];
const timeOptions = ["30 минут", "Час", "Два часа"];
const progressOptions = ["Начато", "В процессе", "Завершенно"];
</script>

<template>
  <PanelContent>
    <!-- Заголовок -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Обучение</h1>
      <div class="w-1/4">
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

    <!-- Фильтры -->
    <div class="flex justify-between items-start p-6 gap-4">
      <!-- Список 1 -->
      <DropdownFilter title="Уровень сложности" :options="difficultyOptions" />

      <!-- Список 2 -->
      <DropdownFilter title="Время изучения" :options="timeOptions" />

      <!-- Список 3 -->
      <DropdownFilter title="Прогресс" :options="progressOptions" />
    </div>

    <!-- Grid карточек -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TrainingCard v-for="n in 6" :key="n" />
    </div>
  </PanelContent>
</template>
