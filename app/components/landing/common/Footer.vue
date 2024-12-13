<script setup lang="ts">
  import { serviceLinks } from '~/constants/navigation'
  import { solutions } from '~/constants/solutions'
</script>

<template>
  <footer class="container transition-colors">
    <div class="mx-auto py-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <!-- Logo Column -->
        <div class="flex flex-col">
          <NuxtLink to="/" class="h-12 flex-shrink-0">
            <NuxtImg
              src="logo-light.svg"
              alt="Logo"
              class="block h-full w-auto dark:hidden"
            />
            <NuxtImg
              src="logo-dark.svg"
              alt="Logo"
              class="hidden h-full w-auto dark:block"
            />
          </NuxtLink>
        </div>

        <!-- Solutions Column -->
        <div class="flex flex-col">
          <h3
            class="mb-4 text-lg font-semibold text-light-text dark:text-dark-text"
          >
            Решения
          </h3>
          <ul class="space-y-2">
            <li v-for="solution in solutions" :key="solution.path">
              <a
                :href="solution.path"
                class="text-light-text/60 transition-colors hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text"
              >
                {{ solution.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- About Service Column -->
        <div class="flex flex-col">
          <h3
            class="mb-4 text-lg font-semibold text-light-text dark:text-dark-text"
          >
            О сервисе
          </h3>
          <ul class="space-y-2">
            <li v-for="link in serviceLinks" :key="link.path">
              <a
                :href="link.path"
                class="flex items-center text-light-text/60 transition-colors hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text"
                :class="{ 'cursor-not-allowed opacity-50': link.disabled }"
                @click="link.disabled && $event.preventDefault()"
              >
                {{ link.name }}
                <Icon
                  v-if="link.disabled"
                  name="basil:lock-outline"
                  class="ml-2 h-4 w-4 text-lightPink"
                />
              </a>
            </li>
          </ul>
        </div>

        <!-- Contacts Column -->
        <div class="flex flex-col">
          <h3
            class="mb-4 text-lg font-semibold text-light-text dark:text-dark-text"
          >
            Контакты
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="mailto:info@oneum.ru"
                class="flex items-center text-light-text/60 transition-colors hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text"
              >
                <Icon
                  name="basil:envelope-outline"
                  class="mr-2 h-5 w-5 text-lightPink"
                />
                info@oneum.ru
              </a>
            </li>
            <li>
              <a
                href="https://t.me/oneum"
                target="_blank"
                class="flex items-center text-light-text/60 transition-colors hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text"
              >
                <Icon
                  name="basil:telegram-outline"
                  class="mr-2 h-5 w-5 text-lightPink"
                />
                Telegram
              </a>
            </li>
            <li>
              <a
                href="https://vk.com/oneum"
                target="_blank"
                class="flex items-center text-light-text/60 transition-colors hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text"
              >
                <Icon
                  name="basil:vk-outline"
                  class="mr-2 h-5 w-5 text-lightPink"
                />
                VKontakte
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="border-t border-light-text/10 dark:border-dark-text/10">
      <div class="mx-auto py-4">
        <div
          class="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0"
        >
          <div class="text-light-text/60 dark:text-dark-text/60">
            &copy; 2024 ONEUM.IO
          </div>
          <div class="flex space-x-8">
            <a
              class="text-light-text/60 transition-colors hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text"
              href="#"
            >
              Политика конфиденциальности
            </a>
            <a
              class="text-light-text/60 transition-colors hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text"
              href="#"
            >
              Условия использования
            </a>
            <a
              class="text-light-text/60 transition-colors hover:text-light-text dark:text-dark-text/60 dark:hover:text-dark-text"
              href="#"
            >
              Правовая информация
            </a>
          </div>
          <div class="md:w-[200px]"></div>
        </div>
      </div>
    </div>
  </footer>
</template>
