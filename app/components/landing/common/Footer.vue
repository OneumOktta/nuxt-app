<script setup lang="ts">
const solutions = [
    { title: 'Недвижимость', path: '/solution/realty' },
    { title: 'Финансы', path: '/solution/finance' },
    { title: 'E-commerce', path: '/solution/ecom' },
    { title: 'Образование', path: '/solution/education' },
    { title: 'Здравоохранение', path: '/solution/health' },
    { title: 'Гостиничный бизнес', path: '/solution/hotels' },
]
</script>

<template>
	<footer class="bg-gray-400 container">
		<div class="mx-auto py-12">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<!-- Logo Column -->
				<div class="flex flex-col">
					<a href="/">
						<img src="/logo.svg" alt="Logo" class="h-12 w-auto mb-4" />
					</a>
				</div>

				<!-- Solutions Column -->
				<div class="flex flex-col">
					<h3 class="text-lg font-semibold mb-4">Решения</h3>
					<ul class="space-y-2">
						<li v-for="solution in solutions" :key="solution.path">
							<a :href="solution.path" class="text-gray-600 hover:text-gray-900">
								{{ solution.title }}
							</a>
						</li>
					</ul>
				</div>

				<!-- About Service Column -->
				<div class="flex flex-col">
					<h3 class="text-lg font-semibold mb-4">О сервисе</h3>
					<ul class="space-y-2">
						<li>
							<a href="#" class="text-gray-600 hover:text-gray-900">О нас</a>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-gray-900">Блог</a>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-gray-900">Карьера</a>
						</li>
						<li>
							<a href="#" class="text-gray-600 hover:text-gray-900"
								>Документация</a
							>
						</li>
					</ul>
				</div>

				<!-- Contacts Column -->
				<div class="flex flex-col">
					<h3 class="text-lg font-semibold mb-4">Контакты</h3>
					<ul class="space-y-2">
						<li>
							<a
								href="mailto:info@oneum.ru"
								class="text-gray-600 hover:text-gray-900 flex items-center"
							>
								<i class="fas fa-envelope mr-2"></i>
								info@oneum.ru
							</a>
						</li>
						<li>
							<a
								href="https://t.me/oneum"
								target="_blank"
								class="text-gray-600 hover:text-gray-900 flex items-center"
							>
								<i class="fab fa-telegram mr-2"></i>
								Telegram
							</a>
						</li>
						<li>
							<a
								href="https://vk.com/oneum"
								target="_blank"
								class="text-gray-600 hover:text-gray-900 flex items-center"
							>
								<i class="fab fa-vk mr-2"></i>
								VKontakte
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="border-t border-gray-300">
			<div class="mx-auto py-4">
				<div
					class="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0"
				>
					<div class="text-gray-600">&copy; 2024 ONEUM.IO</div>
					<div class="flex space-x-8">
						<a href="#" class="text-gray-600 hover:text-gray-900"
							>Политика конфиденциальности</a
						>
						<a href="#" class="text-gray-600 hover:text-gray-900"
							>Условия использования</a
						>
						<a href="#" class="text-gray-600 hover:text-gray-900"
							>Правовая информация</a
						>
					</div>
					<div class="md:w-[200px]"></div>
				</div>
			</div>
		</div>
	</footer>
</template>
