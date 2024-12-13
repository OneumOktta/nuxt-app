<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  const isDark = ref(false)

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    isDark.value =
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)

    updateTheme()

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          isDark.value = e.matches
          updateTheme()
        }
      })
  })

  const updateTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateTheme()
  }
</script>

<template>
  <button
    class="fixed bottom-6 left-6 z-50 p-2 transition-all duration-300 hover:scale-125"
    aria-label="Toggle theme"
    @click="toggleTheme"
  >
    <img
      v-if="isDark"
      src="/icon-sun.svg"
      alt="Switch to light mode"
      class="h-12 w-12"
    />
    <img
      v-else
      src="/icon-moon.svg"
      alt="Switch to dark mode"
      class="h-12 w-12"
    />
  </button>
</template>
