<script setup lang="ts">
  import { ref } from 'vue'
  import { z } from 'zod'
  import { orderFormSchema, type OrderFormData } from '~/schemas/order.schema'
  import type { ApiFormError } from '~/types/api.types'

  const activeTab = ref('phone')
  const loading = ref(false)
  const success = ref(false)
  const error = ref('')

  const OrderFormData = ref<OrderFormData>({
    name: '',
    email: '',
    phone: '',
    companyName: '',
  })

  const validateForm = (data: OrderFormData) => {
    try {
      orderFormSchema.parse(data)
      return []
    } catch (err) {
      if (err instanceof z.ZodError) {
        return err.errors.map((e) => e.message)
      }
      return ['Ошибка валидации формы']
    }
  }

  const translateError = (error: string | undefined) => {
    if (!error) return ''
    if (error === 'Similar order already exists within last 24 hours') {
      return 'Похожая заявка с таким email уже существует. Пожалуйста, подождите 24 часа перед повторной отправкой.'
    }
    return error
  }

  const handleSubmit = async () => {
    try {
      const validationErrors = validateForm(OrderFormData.value)
      if (validationErrors.length > 0) {
        error.value = validationErrors.join('. ')
        return
      }

      loading.value = true
      error.value = ''

      const dataToSend = { ...OrderFormData.value }
      if (!dataToSend.phone.trim()) dataToSend.phone = ''

      await $fetch('/api/landing/order', {
        method: 'POST',
        body: dataToSend,
      })

      success.value = true
      OrderFormData.value = {
        name: '',
        email: '',
        companyName: '',
        phone: '',
      }
    } catch (err: unknown) {
      const apiError = err as ApiFormError
      error.value =
        translateError(apiError.data?.message) ||
        'Произошла ошибка при отправке формы'
    } finally {
      loading.value = false
    }
  }

  const handleTelegramSubmit = () => {
    window.open('https://t.me/your_telegram_bot', '_blank')
  }
</script>

<template>
  <section id="order-form" class="container py-24">
    <div class="rounded-3xl bg-light-panels p-12 dark:bg-dark-panels">
      <div class="mx-auto max-w-3xl">
        <div class="mb-8 text-center">
          <h2
            class="mb-2 text-5xl font-semibold text-light-text dark:text-dark-text"
          >
            Оставьте заявку на демонстрацию сервиса
          </h2>
          <p class="text-xl text-light-text/60 dark:text-dark-text/60">
            14 дней бесплатно
          </p>
        </div>

        <div
          class="mb-6 flex justify-center border-b border-light-text/10 dark:border-dark-text/10"
        >
          <div class="flex">
            <button
              :class="[
                'px-6 py-3 font-medium transition-colors',
                activeTab === 'phone'
                  ? 'border-b-2 border-lightPink text-lightPink'
                  : 'text-light-text/40 hover:text-light-text/60 dark:text-dark-text/40 dark:hover:text-dark-text/60',
              ]"
              @click="activeTab = 'phone'"
            >
              По телефону или почте
            </button>
            <button
              :class="[
                'px-6 py-3 font-medium',
                activeTab === 'telegram'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500',
              ]"
              @click="activeTab = 'telegram'"
            >
              Через Telegram
            </button>
          </div>
        </div>

        <div class="min-h-[400px]">
          <div v-if="activeTab === 'phone'" class="space-y-4">
            <div class="grid grid-cols-1 gap-4">
              <BaseInput
                id="name"
                v-model="OrderFormData.name"
                label="Имя и фамилия"
                icon="basil:user-outline"
                required
              />
              <BaseInput
                id="email"
                v-model="OrderFormData.email"
                type="email"
                label="Email"
                icon="basil:envelope-outline"
                required
              />
              <BaseInput
                id="phone"
                v-model="OrderFormData.phone"
                type="tel"
                label="Номер телефона"
                icon="basil:phone-outline"
                required
              />
              <BaseInput
                id="companyName"
                v-model="OrderFormData.companyName"
                label="Название компании"
                icon="stash:people-group"
                required
              />
            </div>

            <button
              class="w-full rounded-2xl bg-gradient-to-r from-lightPink to-lightBlue px-6 py-4 text-dark-text shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl disabled:opacity-50"
              :disabled="loading"
              @click="handleSubmit"
            >
              {{ loading ? 'Отправка...' : 'Отправить заявку' }}
            </button>

            <div v-if="error" class="mt-4 text-center text-red-500">
              {{ error }}
            </div>

            <div v-if="success" class="mt-4 text-center text-green-500">
              Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
            </div>

            <p
              class="text-center text-sm text-light-text/40 dark:text-dark-text/40"
            >
              Нажимая на кнопку, вы даете согласие на обработку персональных
              данных.
            </p>
          </div>

          <div
            v-if="activeTab === 'telegram'"
            class="flex h-full flex-col items-center justify-center py-8"
          >
            <h3
              class="mb-4 text-xl font-medium text-light-text dark:text-dark-text"
            >
              Напишите нам в Telegram
            </h3>
            <p
              class="mb-6 max-w-md text-center text-light-text/60 dark:text-dark-text/60"
            >
              Ответим вам в течении 10 минут и договоримся о демонстрации
              сервиса.
            </p>
            <button
              class="inline-flex items-center rounded-2xl bg-gradient-to-r from-lightPink to-lightBlue px-6 py-4 text-dark-text shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl"
              @click="handleTelegramSubmit"
            >
              Перейти в Telegram
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
