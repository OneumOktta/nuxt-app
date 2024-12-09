<template>
	<section class="container py-8 px-10 bg-transparent">
		<div class="flex justify-center">
			<NuxtImg
				src="main-img.png"
				alt="Презентация возможностей"
				class="w-full h-auto rounded-3xl"
			/>
		</div>
		<div class="grid grid-cols-3 gap-5 mt-5">
			<LandingCard
				title="Доступна 24/7"
				text="Нейросеть обеспечивает автоматическую поддержку клиентов, обрабатывая неограниченное количество запросов без необходимости ожидания."
			/>
			<LandingCard
				title="Отвечает как человек"
				text="Использует алгоритм глубокого обучения, поэтому ваши пользователи будут получать полезные ответы в естественной языковой манере."
			/>
			<LandingCard
				title="Учитывает историю запросов"
				text="Учитывает историю запросов, предпочтения и поведение пользователей. Благодаря этому лучше удовлетворяет их потребностям и дольше удерживает контакт."
			/>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
