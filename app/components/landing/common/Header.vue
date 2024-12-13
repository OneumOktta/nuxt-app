<script setup lang="ts">
  import { ref } from 'vue'
  import { headerLinks } from '~/constants/navigation'

  const isDropdownOpen = ref(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
</script>

<template>
  <header class="container flex items-center bg-transparent px-10 py-8">
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

    <nav class="mx-auto flex items-center gap-5">
      <button
        v-for="link in headerLinks"
        :key="link.name"
        class="group relative"
        @click="link.action"
      >
        <span class="relative">
          {{ link.name }}
          <span
            class="absolute bottom-[-2px] left-0 h-0.5 w-0 bg-light-text transition-all duration-300 group-hover:w-full dark:bg-dark-text"
          />
        </span>
      </button>
    </nav>

    <div class="flex flex-shrink-0 items-center gap-[20px]">
      <NuxtLink to="/panel/login" class="group relative">
        <span class="relative">
          Войти
          <span
            class="absolute bottom-[-2px] left-0 h-0.5 w-0 bg-light-text transition-all duration-300 group-hover:w-full dark:bg-dark-text"
          />
        </span>
      </NuxtLink>

      <GradientButton @click="() => navigateTo('/registration')">
        Создать аккаунт
      </GradientButton>
    </div>
  </header>
</template>

<style scoped></style>
