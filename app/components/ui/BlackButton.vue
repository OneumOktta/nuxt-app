<script setup lang="ts">
  defineProps<{
    to?: string
  }>()
</script>

<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    class="group relative cursor-pointer rounded-2xl border-2 border-transparent bg-greyDark px-6 py-4 text-dark-text shadow-lg transition-all duration-300 hover:shadow-xl dark:border-2 dark:border-lightPink"
  >
    <slot />
    <div
      class="absolute -bottom-1 -left-4 -right-4 -z-10 h-12 rounded-full bg-gradient-to-r from-lightPink to-lightBlue opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"
    />
  </component>
</template>
