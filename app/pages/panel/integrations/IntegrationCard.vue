<template>
  <div
    class="relative h-[156px] border border-purple-300 rounded-lg p-4 bg-light-panels dark:bg-dark-panels shadow-sm hover:shadow-md transition"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="flex items-center justify-between mb-2">
      <div class="flex items-center">
        <img
          :src="
            isHovered
              ? integration.icon.replace('.svg', '_hover.svg')
              : integration.icon
          "
          alt=""
          class="w-8 h-8 mr-2 rounded-full"
        />
        <h3 class="text-lg font-semibold">{{ integration.name }}</h3>
      </div>
      <div>
        <label class="switch">
          <input type="checkbox" :checked="connected" />
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <div v-if="connected">
      <p class="text-sm text-gray-600">
        Имя пользователя: {{ integration.username }}
      </p>
      <p class="text-sm text-gray-600">API key: {{ integration.apiKey }}</p>
    </div>

    <div v-else>
      <a
        href="#"
        class="text-purple-500 underline text-sm hover:text-purple-700"
      >
        {{ integration.instruction }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    integration: {
      type: Object,
      required: true,
    },
    connected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isHovered: false, // Для отслеживания состояния наведения
    };
  },
};
</script>

<style scoped>
/* Контейнер переключателя */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
}

/* Скрываем стандартный чекбокс */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Стили для переключателя */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e5e5e5; /* Серый фон для выключенного состояния */
  border-radius: 25px;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1);
  transition: background 0.4s;
}

/* Круглый ползунок */
.slider::before {
  content: "";
  position: absolute;
  height: 19px;
  width: 19px;
  left: 3px;
  bottom: 3px;
  background: radial-gradient(circle, #ffffff, #d4cbfa, #c3aaf7);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(190, 160, 255, 0.6); /* Свечение вокруг ползунка */
  transition: transform 0.4s, box-shadow 0.4s;
}

/* Состояние "включено" */
input:checked + .slider {
  background: linear-gradient(90deg, #a393fc, #cbb2ff); /* Цветной фон */
}

input:checked + .slider::before {
  transform: translateX(25px); /* Перемещение вправо */
  background: radial-gradient(
    circle,
    #ffffff,
    #cbb2ff,
    #a393fc
  ); /* Цветной градиент */
  box-shadow: 0 0 20px rgba(140, 110, 240, 0.8); /* Цветное свечение */
}
</style>
