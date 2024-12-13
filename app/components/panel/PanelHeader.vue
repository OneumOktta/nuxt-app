<script setup lang="ts">
  const user = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
  }
</script>

<template>
  <header class="p-6 pb-2">
    <div
      class="flex items-center justify-between rounded-2xl bg-light-panels p-4 dark:bg-dark-panels"
    >
      <div class="flex items-center gap-4">
        <NuxtLink to="/panel" class="h-16">
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
    </div>
  </header>
</template>
