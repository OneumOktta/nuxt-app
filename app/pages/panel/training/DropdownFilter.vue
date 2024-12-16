<script setup>
import { ref } from "vue";

// Пропсы для названия и опций
const props = defineProps({
  title: String,
  options: Array,
});

// Состояния
const isOpen = ref(false); // Открытие/закрытие списка
const selectedOption = ref(props.options[0]); // По умолчанию первый вариант

// Выбор элемента
function selectOption(option) {
  selectedOption.value = option;
  isOpen.value = false;
}
</script>

<template>
  <div class="relative inline-block w-[400px]">
    <!-- Кнопка -->
    <button
      @click="isOpen = !isOpen"
      class="flex justify-between items-center w-full px-4 py-2 border border-purple-300 hover:border-[#3F00A2] rounded-xl hover:shadow focus:outline-none bg-light-panels dark:bg-dark-panels w-full gap-2"
    >
      <span>{{ title }}: {{ selectedOption }}</span>
      <span :class="{ 'rotate-180': isOpen }" class="transition-transform">
        <img src="/icons/down.svg" alt="" class="w-6 h-6" />
      </span>
    </button>

    <!-- Выпадающий список -->
    <div
      v-if="isOpen"
      class="absolute mt-2 w-full bg-light-panels dark:bg-dark-panels border border-purple-300 hover:border-[#3F00A2] rounded-xl shadow-lg z-20 w-full overflow-hidden"
    >
      <ul>
        <li
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer justify-between"
        >
          <span>{{ option }}</span>
          <input
            type="radio"
            :checked="selectedOption === option"
            class="form-radio text-purple-500 mr-2"
            readonly
          />
        </li>
      </ul>
    </div>
  </div>
</template>
