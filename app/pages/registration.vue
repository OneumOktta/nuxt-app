<script setup lang="ts">
  definePageMeta({
    layout: 'auth',
  })

  const formData = ref({
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
  })

  const acceptTerms = ref(false)

  const features = [
    {
      icon: 'material-symbols-light:task-alt',
      text: 'Продажи',
    },
    {
      icon: 'material-symbols-light:task-alt',
      text: 'Поддержка',
    },
    {
      icon: 'material-symbols-light:task-alt',
      text: 'Повышение качества обслуживания',
    },
  ]

  const handleSubmit = () => {
    console.log('Registration form submitted:', formData.value)
  }
</script>

<template>
  <div class="mx-auto flex h-full max-w-7xl items-center justify-center gap-40">
    <!-- Левая часть -->
    <div class="flex-1">
      <h1 class="mb-10 text-3xl font-bold">
        Чат для сайта или приложения на основе GPT
      </h1>
      <p class="mb-8 text-lg text-light-text dark:text-dark-text">
        Расширьте свои возможности с помощью автоматизации
        <br />
        и искусственного интеллекта в одном окне:
      </p>

      <div class="space-y-6">
        <div
          v-for="feature in features"
          :key="feature.text"
          class="flex items-center gap-4"
        >
          <Icon
            :name="feature.icon"
            class="h-6 w-6 flex-shrink-0 text-lightBlue"
          />
          <span class="text-lg">{{ feature.text }}</span>
        </div>
      </div>
    </div>

    <!-- Правая часть -->
    <div class="flex-1">
      <h2 class="mb-10 text-center text-3xl font-semibold">Создайте аккаунт</h2>

      <form class="space-y-4" @submit.prevent="handleSubmit">
        <BaseInput
          id="email"
          v-model="formData.email"
          type="email"
          label="Электронная почта"
          icon="basil:envelope-outline"
          required
        />
        <BaseInput
          id="password"
          v-model="formData.password"
          type="password"
          label="Пароль"
          icon="basil:lock-outline"
          required
        />
        <BaseInput
          id="confirmPassword"
          v-model="formData.confirmPassword"
          type="password"
          label="Подтвердите пароль"
          icon="basil:lock-outline"
          required
        />
        <BaseInput
          id="company"
          v-model="formData.company"
          label="Название компании"
          icon="carbon:location-company"
          required
        />

        <!-- Terms Checkbox -->
        <div class="mt-8 space-y-4 pt-[24px]">
          <BaseCheckbox v-model="acceptTerms" required>
            Я согласен с
            <NuxtLink
              to="/terms"
              class="text-lightPink transition-colors hover:text-lightBlue"
            >
              Правилами и условиями
            </NuxtLink>
            Oneum и
            <NuxtLink
              to="/privacy"
              class="text-lightPink transition-colors hover:text-lightBlue"
            >
              Политикой конфиденциальности
            </NuxtLink>
          </BaseCheckbox>

          <div class="space-y-10">
            <GradientButton class="w-full">Зарегистрироваться</GradientButton>

            <!-- Social Login -->
            <div class="text-center">
              <p class="mb-4 text-light-text/60 dark:text-dark-text/60">
                Вы можете зарегистрироваться с помощью:
              </p>
              <div class="flex justify-center gap-4">
                <button
                  class="flex items-center gap-2 rounded-xl border-2 border-light-text/10 px-4 py-2 transition-colors hover:border-lightBlue dark:border-dark-text/10"
                >
                  <Icon name="basil:telegram-outline" class="h-5 w-5" />
                  <span>Telegram</span>
                </button>
                <button
                  class="flex items-center gap-2 rounded-xl border-2 border-light-text/10 px-4 py-2 transition-colors hover:border-lightBlue dark:border-dark-text/10"
                >
                  <Icon name="basil:vk-outline" class="h-5 w-5" />
                  <span>VKontakte</span>
                </button>
              </div>
            </div>

            <!-- Login Link -->
            <div class="text-center">
              <p class="text-light-text/60 dark:text-dark-text/60">
                У вас уже есть аккаунт?
                <NuxtLink
                  to="/panel/login"
                  class="text-lightPink transition-colors hover:text-lightBlue"
                >
                  Вход
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
