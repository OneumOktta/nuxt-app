<script setup lang="ts"></script>

<template>
  <main class="flex min-h-screen p-6">
    <div
      class="flex w-full flex-col rounded-3xl bg-light-panels dark:bg-dark-panels"
    >
      <NuxtLink to="/" class="ml-8 mt-8 inline-block h-12">
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
      <div class="flex flex-1 items-center justify-center p-12">
        <slot />
      </div>
    </div>
  </main>
</template>
