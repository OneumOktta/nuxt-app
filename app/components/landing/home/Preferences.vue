<script setup lang="ts">
  const cards = [
    {
      icon: '🤖',
      title: 'Высокая точность',
      description:
        'Нейросеть не совершает ошибок. ChatGPT использует алгоритм глубокого обучения и огромное количество текстовых данных, при этом бот можно обучить определять шаблоны и ключевые слова/фразы для выдачи релевантных ответов.',
    },
    {
      icon: '💰',
      title: 'Масштабируемость',
      description:
        'Позволяет обрабатывать огромное число пользовательских запросов и действий. После интеграции бота с вашими сервисами нейросеть снижает нагрузку на команду сотрудников поддержки и улучшает время ответов клиентам.',
    },
    {
      icon: '📈',
      title: 'Вовлеченность пользователей',
      description:
        'Привлекает пользователей своим осмысленным образом. Нейросеть отвечает на вопросы в разговорном стиле, это делает пользовательский опыт более позитивным, увлекательным и повышает лояльность клиентов.',
    },
  ]
</script>

<template>
  <section class="w-full bg-gray-200">
    <div class="container mx-auto px-4 py-16">
      <!-- Заголовок секции -->
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-3xl font-bold">
          Нейросеть работает 24/7
          <br />
          и сокращает финансовые затраты
        </h2>
      </div>

      <!-- Карточки -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="w-full rounded-2xl bg-gray-800 p-8 shadow-lg transition-transform hover:scale-105 hover:transform"
        >
          <!-- Иконка/Псевдорисунок -->
          <div class="mb-6 flex h-16 w-16 items-center justify-center text-3xl">
            {{ card.icon }}
          </div>
          <!-- Заголовок карточки -->
          <h3 class="mb-4 text-left text-xl font-semibold text-white">
            {{ card.title }}
          </h3>
          <!-- Описание -->
          <p class="text-left text-gray-300">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .container {
    max-width: 1200px;
  }
</style>
