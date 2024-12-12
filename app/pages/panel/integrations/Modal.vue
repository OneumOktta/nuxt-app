<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div
      class="bg-white dark:bg-dark-panels p-6 rounded-lg shadow-lg w-[400px] relative"
    >
      <!-- Кнопка закрытия -->
      <button
        @click="close"
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
      >
        <img src="/icons/close.svg" alt="" class="w-6 h-6 rounded-full" />
      </button>
      <!-- Контент -->
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

// Объявляем пропсы
const props = defineProps({
  isOpen: { type: Boolean, required: true },
  close: {
    type: Function as PropType<(event: MouseEvent) => void>,
    required: true,
  },
});
</script>

<script lang="ts">
// Убедитесь, что не используете export default {}, так как он не нужен в Composition API
</script>

<style scoped>
/* Вы можете добавить дополнительные стили */
</style>
