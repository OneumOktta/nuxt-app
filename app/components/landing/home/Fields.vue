<script setup lang="ts">
  import { ref } from 'vue'

  interface Card {
    title: string
    description: string
    icon: string
  }

  interface TabContent {
    name: string
    cards: Card[]
  }

  const activeTab = ref(0)

  const tabs: TabContent[] = [
    {
      name: 'Недвижимость',
      cards: [
        {
          title: 'Автоматизация общения',
          description:
            'Мгновенные ответы на типовые вопросы клиентов о недвижимости, характеристиках объектов и условиях сделок',
          icon: '🏠',
        },
        {
          title: 'Описание объектов',
          description:
            'Создание привлекательных и информативных описаний объектов недвижимости для листингов и презентаций',
          icon: '📝',
        },
        {
          title: 'Анализ рынка',
          description:
            'Помощь в анализе рыночных трендов и формировании конкурентных предложений',
          icon: '📊',
        },
      ],
    },
    {
      name: 'Финансы',
      cards: [
        {
          title: 'Финансовый анализ',
          description:
            'Помощь в анализе финансовых данных и подготовке отчетов для принятия решений',
          icon: '💰',
        },
        {
          title: 'Консультации',
          description:
            'Предоставление базовых финансовых консультаций и разъяснение сложных финансовых концепций',
          icon: '💡',
        },
        {
          title: 'Риск-менеджмент',
          description:
            'Помощь в выявлении и оценке потенциальных финансовых рисков',
          icon: '⚠️',
        },
      ],
    },
    {
      name: 'E-commerce',
      cards: [
        {
          title: 'Описания товаров',
          description:
            'Создание уникальных и привлекательных описаний товаров для онлайн-магазина',
          icon: '🛍️',
        },
        {
          title: 'Поддержка клиентов',
          description:
            'Автоматизированные ответы на вопросы о доставке, возвратах и характеристиках товаров',
          icon: '🤝',
        },
        {
          title: 'Персонализация',
          description:
            'Помощь в создании персонализированных рекомендаций для покупателей',
          icon: '🎯',
        },
      ],
    },
    {
      name: 'Образование',
      cards: [
        {
          title: 'Планы уроков',
          description:
            'Помощь в создании структурированных и интерактивных планов занятий',
          icon: '📚',
        },
        {
          title: 'Проверка работ',
          description:
            'Помощь в проверке и оценке студенческих работ, предоставление конструктивной обратной связи',
          icon: '✅',
        },
        {
          title: 'Адаптация материалов',
          description:
            'Адаптация учебных материалов под различные уровни и стили обучения',
          icon: '🎓',
        },
      ],
    },
    {
      name: 'Здравоохранение',
      cards: [
        {
          title: 'Административная поддержка',
          description:
            'Помощь в управлении расписанием и обработке медицинской документации',
          icon: '📋',
        },
        {
          title: 'Информирование пациентов',
          description:
            'Предоставление общей медицинской информации и ответы на типовые вопросы',
          icon: '🏥',
        },
        {
          title: 'Анализ данных',
          description:
            'Помощь в анализе медицинских данных и подготовке отчетов',
          icon: '📊',
        },
      ],
    },
    {
      name: 'Гостиничный бизнес',
      cards: [
        {
          title: 'Обслуживание гостей',
          description:
            'Автоматизированные ответы на вопросы о услугах отеля и местных достопримечательностях',
          icon: '🏨',
        },
        {
          title: 'Управление бронированием',
          description:
            'Помощь в обработке запросов на бронирование и управлении календарем занятости',
          icon: '📅',
        },
        {
          title: 'Анализ отзывов',
          description:
            'Анализ отзывов гостей и предложения по улучшению качества обслуживания',
          icon: '⭐',
        },
      ],
    },
  ]
</script>

<template>
  <div class="w-full bg-gray-100 py-12">
    <div class="mx-auto max-w-[1200px] px-4">
      <h2 class="mb-8 text-center text-3xl font-bold">
        Универсальность и гибкость ChatGPT делают его подходящим инструментом
        для многих коммерческих сфер — выберите свою
      </h2>

      <!-- Tabs -->
      <div class="mb-12">
        <div class="flex justify-center border-b border-gray-200">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            class="relative px-6 py-3 text-lg transition-all duration-300"
            :class="[
              activeTab === index
                ? 'font-medium text-blue-600'
                : 'text-gray-500 hover:text-gray-700',
            ]"
            @click="activeTab = index"
          >
            {{ tab.name }}
            <div
              class="absolute bottom-0 left-0 h-0.5 w-full transition-all duration-300"
              :class="[activeTab === index ? 'bg-blue-600' : 'bg-transparent']"
            ></div>
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(card, index) in tabs[activeTab].cards"
          :key="index"
          class="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div class="mb-4 text-4xl">{{ card.icon }}</div>
          <h3 class="mb-3 text-xl font-semibold">{{ card.title }}</h3>
          <p class="text-gray-600">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Removed the container style */
</style>
