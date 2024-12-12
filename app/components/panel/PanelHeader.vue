<script setup lang="ts">
const user = {
  name: "Иван Иванов",
  email: "ivan@example.com",
};
</script>

<template>
  <header>
    <div
      class="bg-light-panels dark:bg-dark-panels rounded-2xl p-4 flex items-center justify-between"
    >
      <div class="flex items-center gap-4">
        <NuxtLink to="/panel" class="h-16">
          <NuxtImg
            src="logo-light.svg"
            alt="Logo"
            class="h-full w-auto block dark:hidden"
          />
          <NuxtImg
            src="logo-dark.svg"
            alt="Logo"
            class="h-full w-auto hidden dark:block"
          />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
