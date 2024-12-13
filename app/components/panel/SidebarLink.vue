<script setup lang="ts">
  interface Props {
    icon: string
    text: string
    to: string
    roles?: string[] // массив ролей, которым доступна ссылка
  }

  defineProps<Props>()

  // TODO: Добавить проверку роли пользователя
  const userHasAccess = computed(() => true) // временно всегда true
</script>

<template>
  <NuxtLink
    v-if="userHasAccess"
    :to="to"
    class="group relative mx-auto flex h-[64px] w-[92px] flex-col items-center rounded-2xl py-2"
  >
    <div
      class="absolute -bottom-1.5 -left-1.5 -right-1.5 -top-1 rounded-2xl bg-gradient-to-r from-lightPink to-lightBlue opacity-0 blur-sm transition-opacity group-hover:opacity-50"
      :class="{ 'opacity-50': $route.path === to }"
    />

    <div
      class="absolute inset-0 rounded-2xl bg-light-panels dark:bg-dark-panels"
    />

    <Icon
      :name="icon"
      class="relative z-10 mb-1 h-8 w-8 text-light-text transition-colors group-hover:text-lightPink dark:text-dark-text"
      :class="{ 'text-lightPink': $route.path === to }"
    />
    <span class="relative z-10 text-xs text-light-text dark:text-dark-text">
      {{ text }}
    </span>
  </NuxtLink>
</template>
