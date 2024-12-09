<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Solution } from '~/types/navlink.types'
import {
	solutions,
	solutionDescriptions,
	solutionImages,
} from '~/constants/solutions'
import { navigateTo } from '#app'

const selectedSolution = ref(solutions[0])

const isSelected = computed(() => (solution: Solution) => {
	return solution.path === selectedSolution.value.path
})
</script>

<template>
	<section class="container py-24" id="solutions">
		<h2 class="text-5xl font-semibold text-center mb-16">
			Универсальность и гибкость OneumGPT
		</h2>

		<div class="bg-light-panels dark:bg-dark-panels rounded-3xl p-8">
			<div class="flex gap-16">
				<div class="w-[40%] flex-shrink-0">
					<!-- Заголовок табов -->
					<h3
						class="text-2xl font-medium text-light-text dark:text-dark-text mb-10"
					>
						Делают его подходящим инструментом для многих сфер
					</h3>

					<!-- Табы -->
					<div class="space-y-4">
						<button
							v-for="solution in solutions"
							:key="solution.path"
							@click="selectedSolution = solution"
							class="w-full text-left relative"
						>
							<!-- Разделительная черта -->
							<div
								class="h-[2.5px] mb-4 transition-colors duration-300"
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
										: 'text-light-text/40 dark:text-dark-text/40 hover:text-light-text/60 dark:hover:text-dark-text/60',
								]"
							>
								<h4 class="text-sm font-bold mb-2 transition-colors">
									{{ solution.name }}
								</h4>
								<p class="text-sm leading-snug">
									{{ solutionDescriptions[solution.path] }}
								</p>
							</div>
						</button>
					</div>

					<!-- Кнопка "Подробнее" -->
					<div class="mt-8 mb-3">
						<GradientButton
							:to="selectedSolution.path"
							@click="() => navigateTo(selectedSolution.path)"
						>
							Подробнее
						</GradientButton>
					</div>
				</div>

				<div class="w-[60%] relative">
					<!-- Фоновое изображение -->
					<NuxtImg
						src="solution/solution-bg.png"
						alt="Solution Background"
						class="absolute inset-0 w-full h-full object-cover rounded-2xl"
					/>

					<!-- Изображение решения -->
					<div class="absolute inset-0 flex items-center justify-center">
						<NuxtImg
							:src="solutionImages[selectedSolution.path]"
							:alt="selectedSolution.name"
							class="w-[70%] h-auto transition-all duration-300 relative z-10"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
