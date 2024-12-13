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
        <div class="flex max-w-[600px] flex-1 flex-col items-start">
          <div class="mb-6 rounded-full bg-black/5 px-4 py-2 text-sm">
            {{ pageBadge }}
          </div>

          <h1 class="mb-6 text-5xl font-bold leading-tight">
            {{ title }}
          </h1>

          <p class="mb-8 text-lg leading-relaxed text-black/70">
            {{ description }}
          </p>

          <div>
            <div class="flex flex-col items-center gap-3">
              <button
                class="rounded-lg bg-blue-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-600"
                @click="scrollToOrder"
              >
                Заказать демонстрацию
              </button>
              <span class="text-sm text-black/60">14 дней бесплатно</span>
            </div>
          </div>
        </div>

        <!-- Right Illustration -->
        <div class="flex flex-1 items-center justify-center">
          <img
            v-if="illustration"
            :src="illustration"
            class="h-auto max-w-full"
            alt="Solution illustration"
          />
        </div>
      </div>
    </div>
  </section>
</template>
