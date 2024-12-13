<script setup lang="ts">
  import { navigateTo } from '#app'
  import { computed, ref } from 'vue'
  import {
    solutionDescriptions,
    solutionImages,
    solutions,
  } from '~/constants/solutions'
  import type { Solution } from '~/types/navlink.types'

  const selectedSolution = ref(solutions[0])

  const isSelected = computed(() => (solution: Solution) => {
    return solution.path === selectedSolution.value.path
  })
</script>

<template>
  <section id="solutions" class="container py-24">
    <h2 class="mb-16 text-center text-5xl font-semibold">
      Универсальность и гибкость OneumGPT
    </h2>

    <div class="rounded-3xl bg-light-panels p-8 dark:bg-dark-panels">
      <div class="flex gap-16">
        <div class="w-[40%] flex-shrink-0">
          <!-- Заголовок табов -->
          <h3
            class="mb-10 text-2xl font-medium text-light-text dark:text-dark-text"
          >
            Делают его подходящим инструментом для многих сфер
          </h3>

          <!-- Табы -->
          <div class="space-y-4">
            <button
              v-for="solution in solutions"
              :key="solution.path"
              class="relative w-full text-left"
              @click="selectedSolution = solution"
            >
              <!-- Разделительная черта -->
              <div
                class="mb-4 h-[2.5px] transition-colors duration-300"
                :class="[
                  isSelected(solution)
                    ? 'bg-gradient-to-r from-lightPink to-lightBlue'
                    : 'bg-light-text/10 dark:bg-dark-text/10',
                ]"
              />

              <!-- Контент таба -->
              <div
                class="transition-colors duration-300"
                :class="[
                  isSelected(solution)
                    ? 'text-light-text dark:text-dark-text'
                    : 'text-light-text/40 hover:text-light-text/60 dark:text-dark-text/40 dark:hover:text-dark-text/60',
                ]"
              >
                <h4 class="mb-2 text-sm font-bold transition-colors">
                  {{ solution.name }}
                </h4>
                <p class="text-sm leading-snug">
                  {{ solutionDescriptions[solution.path] }}
                </p>
              </div>
            </button>
          </div>

          <!-- Кнопка "Подробнее" -->
          <div class="mb-3 mt-8">
            <GradientButton
              :to="selectedSolution.path"
              @click="() => navigateTo(selectedSolution.path)"
            >
              Подробнее
            </GradientButton>
          </div>
        </div>

        <div class="relative w-[60%]">
          <!-- Фоновое изображение -->
          <NuxtImg
            src="solution/solution-bg.png"
            alt="Solution Background"
            class="absolute inset-0 h-full w-full rounded-2xl object-cover"
          />

          <!-- Изображение решения -->
          <div class="absolute inset-0 flex items-center justify-center">
            <NuxtImg
              :src="solutionImages[selectedSolution.path]"
              :alt="selectedSolution.name"
              class="relative z-10 h-auto w-[70%] transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
