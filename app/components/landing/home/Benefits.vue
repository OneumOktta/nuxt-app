<script setup lang="ts">
const currentBenefits = [
	{
		title: 'Триггерные сообщения',
		description:
			'Создавайте неограниченное количество триггеров на страницах сайта, устанавливайте время появления, чтобы мотивировать пользователя к действию.',
	},
	{
		title: 'Аудиособщения',
		description:
			'Нейросеть распознает голосовые сообщения и отвечает также, как если бы ей написали текстом. Доступно в Telegram и Вконтакте.',
	},
	{
		title: 'Доступ для менеджеров',
		description:
			'Приглашайте сотрудников и выдавайте им права. Менеджер может в любой момент перехватить диалог и ответить пользователю.',
	},
	{
		title: 'Вызов человека',
		description:
			'Мы разработали алгоритм, при котором нейросеть понимаем, что пользователь хочет связаться с менеджером и отдает определенный сигнал в дашборд',
	},
	{
		title: 'Интеграции',
		description:
			'Получайте сообщения из любой соцсети или мессенджера абсолютно бесплатно, подключайте нейросеть в мессенджер и получайте привычный опыт для ваших клиентов.',
	},
	{
		title: 'Мультиязычность',
		description:
			'Нейросеть умеет отвечать на любом языке мира, также можно ограничить ответы на любом из языков.',
	},
]

const comingSoonBenefits = [
	{
		title: 'Аналитика',
		description:
			'Расширенная аналитика от нейросети по пользователям, диалогам и менеджерам.',
	},
	{
		title: 'Интеграция с Битрикс24',
		description:
			'Двухсторонняя интеграция отправляет информацию о контактах и сделках из Oneum в Битрикс24 и обратно.',
	},
]
</script>

<template>
	<section id="benefits" class="container bg-gray-100 mx-auto px-4 py-16">
		<h2 class="text-3xl font-bold text-center mb-12">Преимущества</h2>
		<div class="benefits-grid mb-8">
			<div
				v-for="benefit in currentBenefits"
				:key="benefit.title"
				class="benefit-wrapper"
			>
				<div class="benefit-bg"></div>
				<div class="benefit-card bg-gray-800 p-6">
					<div class="image-placeholder mb-6"></div>
					<h3 class="text-xl font-semibold text-white mb-3">
						{{ benefit.title }}
					</h3>
					<p class="text-gray-300">{{ benefit.description }}</p>
				</div>
			</div>
		</div>

		<div class="coming-soon-grid">
			<div
				v-for="benefit in comingSoonBenefits"
				:key="benefit.title"
				class="benefit-wrapper"
			>
				<div class="benefit-bg"></div>
				<div class="benefit-card bg-gray-800 p-6">
					<div class="coming-soon-badge">Скоро</div>
					<div class="image-placeholder mb-6"></div>
					<h3 class="text-xl font-semibold text-white mb-3">
						{{ benefit.title }}
					</h3>
					<p class="text-gray-300">{{ benefit.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.benefits-grid {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1.5rem;
}

.coming-soon-grid {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: 1.5rem;
}

@media (min-width: 768px) {
	.benefits-grid {
		grid-template-columns: repeat(2, 1fr);
	}
	.coming-soon-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1024px) {
	.benefits-grid {
		grid-template-columns: repeat(3, 1fr);
	}
	.coming-soon-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

.benefit-wrapper {
	position: relative;
	padding-top: 16px;
	height: 100%;
}

.benefit-bg {
	position: absolute;
	top: 0;
	left: 24px;
	right: 24px;
	height: 16px;
	background: rgba(0, 0, 0, 0.2);
	border-radius: 24px 24px 0 0;
	transition: opacity 0.3s ease;
}

.benefit-card {
	position: relative;
	border-radius: 24px;
	transform: translateY(0);
	transition: transform 0.3s ease;
	height: 100%;
}

.image-placeholder {
	width: 80px;
	height: 80px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 16px;
	margin: 0 auto;
}

.coming-soon-badge {
	position: absolute;
	top: 16px;
	left: 16px;
	background-color: rgba(255, 255, 255, 0.1);
	color: white;
	padding: 4px 12px;
	border-radius: 12px;
	font-size: 14px;
}

.benefit-wrapper:hover .benefit-card {
	transform: translateY(-16px);
}

.benefit-wrapper:hover .benefit-bg {
	opacity: 0;
}
</style>
