<script setup lang="ts">
definePageMeta({
	layout: 'auth',
})

const formData = ref({
	email: '',
	password: '',
})

const rememberMe = ref(false)

const handleSubmit = () => {
	// TODO: Реализовать авторизацию
	return navigateTo('/panel')
}
</script>

<template>
	<div class="w-1/3 mx-auto min-w-[400px]">
		<h1 class="text-3xl font-semibold mb-10 text-center">
			Рады видеть вас снова!
		</h1>

		<form @submit.prevent="handleSubmit" class="space-y-4">
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

			<div class="flex items-center justify-between">
				<BaseCheckbox v-model="rememberMe"> Запомнить меня </BaseCheckbox>

				<NuxtLink
					to="/panel/reset-password"
					class="text-lightPink hover:text-lightBlue transition-colors"
				>
					Забыли пароль?
				</NuxtLink>
			</div>

			<div class="space-y-10 pt-8">
				<GradientButton type="submit" class="w-full"> Войти </GradientButton>

				<!-- Social Login -->
				<div class="text-center">
					<p class="text-light-text/60 dark:text-dark-text/60 mb-4">
						Вы можете войти с помощью:
					</p>
					<div class="flex justify-center gap-4">
						<button
							class="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-light-text/10 dark:border-dark-text/10 hover:border-lightBlue transition-colors"
						>
							<Icon name="basil:telegram-outline" class="w-5 h-5" />
							<span>Telegram</span>
						</button>
						<button
							class="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-light-text/10 dark:border-dark-text/10 hover:border-lightBlue transition-colors"
						>
							<Icon name="basil:vk-outline" class="w-5 h-5" />
							<span>VKontakte</span>
						</button>
					</div>
				</div>

				<!-- Register Link -->
				<div class="text-center">
					<p class="text-light-text/60 dark:text-dark-text/60">
						У Вас нет аккаунта?
						<NuxtLink
							to="/registration"
							class="text-lightPink hover:text-lightBlue transition-colors"
						>
							Регистрация
						</NuxtLink>
					</p>
				</div>
			</div>
		</form>
	</div>
</template>
