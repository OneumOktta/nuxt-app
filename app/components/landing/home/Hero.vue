<script setup lang="ts">
  const scrollToOrderForm = () => {
    const orderForm = document.querySelector('#order-form')
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' })
    }
  }
</script>

<template>
  <section class="container py-24">
    <h1 class="mx-auto select-none text-center">
      <span class="text-7xl font-semibold leading-[1.2]">
        Поддержка, продажи и повышение качества обслуживания в чате с нейросетью
        <span class="relative inline-block px-3 py-1">
          <span class="relative z-10">ChatGPT</span>
          <span
            class="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-lightPink to-lightBlue"
          />
        </span>
      </span>
    </h1>
    <div class="relative mt-14 flex justify-center">
      <div class="absolute left-[calc(50%-320px)] top-4">
        <div class="animate-float relative flex flex-col items-center">
          <NuxtImg
            src="hero-arrow.svg"
            alt="arrow"
            class="mb-4 h-[80px] w-[120px]"
          />
          <p class="max-w-[240px] select-none text-center text-sm">
            За 15 минут в зуме расскажем и покажем функционал чата
          </p>
        </div>
      </div>
      <BlackButton @click="scrollToOrderForm">
        Заказать демонстрацию
      </BlackButton>
    </div>
  </section>
</template>

<style scoped>
  @keyframes float {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>
