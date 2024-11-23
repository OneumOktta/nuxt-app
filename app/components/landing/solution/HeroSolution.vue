<script setup lang="ts">
defineProps<{
	pageBadge: string
	title: string
	description: string
	illustration?: string
}>()

const scrollToOrder = () => {
	const orderForm = document.querySelector('#order-form')
	if (orderForm) {
		orderForm.scrollIntoView({ behavior: 'smooth' })
	}
}
</script>

<template>
	<section class="py-10">
		<div class="container mx-auto px-4">
			<div class="flex items-center gap-12">
				<!-- Left Content -->
				<div class="flex-1 max-w-[600px] flex flex-col items-start">
					<div class="px-4 py-2 bg-black/5 rounded-full text-sm mb-6">
						{{ pageBadge }}
					</div>

					<h1 class="text-5xl font-bold leading-tight mb-6">
						{{ title }}
					</h1>

					<p class="text-lg leading-relaxed text-black/70 mb-8">
						{{ description }}
					</p>

					<div>
						<div class="flex flex-col items-center gap-3">
							<button
								class="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
								@click="scrollToOrder"
							>
								Заказать демонстрацию
							</button>
							<span class="text-sm text-black/60">14 дней бесплатно</span>
						</div>
					</div>
				</div>

				<!-- Right Illustration -->
				<div class="flex-1 flex justify-center items-center">
					<img
						v-if="illustration"
						:src="illustration"
						class="max-w-full h-auto"
						alt="Solution illustration"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
