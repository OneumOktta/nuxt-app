<template>
  <PanelContent>
    <div
      class="min-h-screen bg-light-panels dark:bg-dark-panels px-28 relative"
    >
      <div class="p-8">
        <!-- Заголовок -->
        <h1 class="text-3xl font-semibold text-center text-purple-700 mb-8">
          Справочный центр
        </h1>
        <p class="text-center text-gray-600 mb-8">
          Подробная документация, которая поможет вам начать работу с Oneum
        </p>

        <!-- Поле поиска -->
        <div class="relative w-[687px] h-[48px] mb-16 flex mx-auto">
          <input
            type="text"
            placeholder="Поиск по ключевому слову"
            class="w-full h-full text-sm rounded-2xl border border-gray-300 bg-light-panels dark:bg-dark-panels px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <img
              src="/icons/search.svg"
              alt=""
              class="w-6 h-6 mr-2 rounded-full"
            />
          </span>
        </div>

        <!-- Сетка карточек -->
        <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <!-- Карточка -->
          <div
            v-for="(item, index) in items"
            :key="index"
            class="p-6 h-[160px] border border-purple-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            @mouseenter="isHovered = index"
            @mouseleave="isHovered = null"
          >
            <img :src="item.icon" alt="icon" class="mx-auto mb-4" />
            <h3
              :class="{
                'text-lg font-medium text-center': true,
                'text-purple-600': isHovered === index, // Активный цвет
                'text-[greyLight]': isHovered !== index, // Цвет по умолчанию
              }"
            >
              {{ item.name }}
            </h3>
          </div>
        </div>

        <!-- Кнопка онбординга -->
        <div class="absolute top-4 right-4">
          <button
            class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-2xl shadow-lg hover:scale-105 transition duration-200"
          >
            Пройти онбординг
          </button>
        </div>
        <!-- Кнопка чата -->
        <button class="fixed bottom-9 right-9">
          <img src="/icons/widget_talk.svg" alt="" width="80" height="88" />
        </button>
      </div>
    </div>
  </PanelContent>
</template>

<script setup>
import { ref, onMounted } from "vue";

definePageMeta({
  layout: "panel",
});

const items = ref([
  {
    name: "Начало работы",
    icon: "/icons/support-icons/flag-light.svg",
  },
  {
    name: "Настройка виджета",
    icon: "/icons/support-icons/gear-light.svg",
  },
  {
    name: "Служба поддержки",
    icon: "/icons/support-icons/headphones.svg",
  },
  {
    name: "Особенности Oneum",
    icon: "/icons/support-icons/widget_cube.svg",
  },
  {
    name: "Нейросеть",
    icon: "/icons/support-icons/Subttasks.svg",
  },
  {
    name: "Интеграции",
    icon: "/icons/support-icons/integrations.svg",
  },
  {
    name: "Аналитика",
    icon: "/icons/support-icons/Waterfall.svg",
  },
  {
    name: "Диалоги",
    icon: "/icons/support-icons/Chat.svg",
  },
  {
    name: "Токены и тарифы",
    icon: "/icons/support-icons/Money.svg",
  },
  {
    name: "Обучающие материалы и кейсы",
    icon: "/icons/support-icons/Mortarboard.svg",
  },
  {
    name: "Решения",
    icon: "/icons/support-icons/Mortarboard.svg",
  },
  {
    name: "Доступы для менеджеров",
    icon: "/icons/support-icons/Chield_check.svg",
  },
]);

// Локальное состояние для отслеживания наведения на карточку
const isHovered = ref(null);
</script>

<style scoped>
/* Можно добавить дополнительные стили здесь */
</style>
