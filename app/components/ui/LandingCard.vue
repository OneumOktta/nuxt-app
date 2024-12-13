<script setup lang="ts">
  defineProps<{
    title: string
    text: string
    icon?: string
  }>()
</script>

<template>
  <div
    class="select-none rounded-3xl bg-light-panels p-8 transition-all duration-300 hover:scale-[1.02] dark:bg-dark-panels"
  >
    <div class="flex items-start gap-4">
      <NuxtImg
        v-if="icon"
        :src="icon"
        :alt="title"
        class="mt-1 h-6 w-6 flex-shrink-0"
      />
      <div>
        <h3 class="mb-4 text-xl font-semibold">{{ title }}</h3>
        <p
          class="text-sm font-medium leading-relaxed text-light-text dark:text-dark-text"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
