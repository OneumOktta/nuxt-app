<script setup lang="ts">
import {
  connectedIntegrations,
  availableIntegrations,
} from "~/constants/integrations";
import IntegrationCard from "~/pages/panel/integrations/IntegrationCard.vue";

definePageMeta({
  layout: "panel",
});

const requestNewIntegration = () => {
  alert("Запрос на новую интеграцию отправлен!");
};
</script>

<template>
  <PanelContent>
    <div class="min-h-screen bg-light-panels dark:bg-dark-panels px-28">
      <div class="flex items-center justify-between mb-8">
        <!-- Заголовок -->
        <h1 class="text-2xl text-[40px] font-bold mb-4">Интеграции</h1>

        <!-- Поиск -->
        <div class="mb-6 flex items-center">
          <div class="relative w-[687px] h-[48px]">
            <input
              type="text"
              placeholder="Поиск..."
              class="w-full h-full text-sm rounded-2xl border border-gray-300 bg-light-panels dark:bg-dark-panels px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <span
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <img
                src="/icons/search.svg"
                alt=""
                class="w-6 h-6 mr-2 rounded-full"
              />
            </span>
            <span
              class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <img src="/icons/close.svg" alt="" class="w-6 h-6 rounded-full" />
            </span>
          </div>
        </div>
      </div>

      <!-- Секции -->
      <div class="space-y-8">
        <!-- Подключенные -->
        <div>
          <h2 class="text-[22px] font-semibold mb-4">Подключенные</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <IntegrationCard
              v-for="integration in connectedIntegrations"
              :key="integration.id"
              :integration="integration"
              connected
            />
          </div>
        </div>

        <!-- Доступные -->
        <div>
          <h2 class="text-[22px] font-semibold mb-4">Доступные</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <IntegrationCard
              v-for="integration in availableIntegrations"
              :key="integration.id"
              :integration="integration"
            />
            <div
              class="flex flex-col items-center justify-center border-2 border-dashed border-purple-500 rounded-lg p-4 cursor-pointer hover:bg-purple-50"
            >
              <p>Запрос на новую интеграцию</p>
              <button
                @click="requestNewIntegration"
                class="text-purple-500 text-3xl font-bold flex items-center"
              >
                <img
                  src="/icons/widget_add.svg"
                  alt=""
                  width="60"
                  height="65"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Кнопка чата -->
      <button class="fixed bottom-9 right-9">
        <img src="/icons/widget_talk.svg" alt="" width="80" height="88" />
      </button>
    </div>
  </PanelContent>
</template>

<style lang="scss" scoped></style>
