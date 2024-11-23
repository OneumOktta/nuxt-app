<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isCollapsed = ref(false)
const showLogoutModal = ref(false)

const toggleSidebar = () => {
	isCollapsed.value = !isCollapsed.value
}

const handleLogout = () => {
	showLogoutModal.value = true
}

const confirmLogout = () => {
	showLogoutModal.value = false
	router.push('/')
}

const cancelLogout = () => {
	showLogoutModal.value = false
}

const navigationLinks = [
  {
    to: '/panel/chats',
    icon: 'i-heroicons-chat-bubble-left-right',
    label: 'Диалоги'
  },
  {
    to: '/panel/neuronet',
    icon: 'i-heroicons-cpu-chip',
    label: 'Нейросеть'
  },
  {
    to: '/panel/integrations',
    icon: 'i-heroicons-puzzle-piece',
    label: 'Интеграции'
  },
  {
    to: '/panel/users',
    icon: 'i-heroicons-users',
    label: 'Пользователи'
  },
  {
    to: '/panel/orders',
    icon: 'i-heroicons-document-text',
    label: 'Заявки'
  },
  {
    to: '/panel/settings',
    icon: 'i-heroicons-cog-6-tooth',
    label: 'Настройки'
  }
]
</script>

<template>
	<aside
		class="flex flex-col h-screen bg-gray-100 border-r border-gray-200 transition-all duration-300 overflow-hidden"
		:class="[isCollapsed ? 'w-[4.5rem]' : 'w-[16rem]']"
	>
		<!-- Header -->
		<div class="flex items-center p-4 border-b border-gray-200 whitespace-nowrap">
			<button
				@click="toggleSidebar"
				class="p-2 rounded-md text-gray-500 hover:bg-gray-100"
			>
				<Icon
					:name="isCollapsed ? 'i-heroicons-chevron-right' : 'i-heroicons-chevron-left'"
					class="w-5 h-5"
				/>
			</button>
			<div class="ml-3 overflow-hidden transition-all duration-300" :class="[isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100']">
				<span class="text-lg font-semibold">Oneum Dashboard</span>
			</div>
		</div>

		<!-- Navigation -->
		<nav class="flex-1 overflow-y-auto p-4 space-y-2">
			<NuxtLink
				v-for="link in navigationLinks"
				:key="link.to"
				:to="link.to"
				class="flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 group whitespace-nowrap"
				active-class="bg-gray-100 text-blue-600"
			>
				<Icon :name="link.icon" class="w-5 h-5 flex-shrink-0" />
				<div class="overflow-hidden transition-all duration-300" :class="[isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100 ml-3']">
					<span>{{ link.label }}</span>
				</div>
			</NuxtLink>
		</nav>

		<!-- Footer -->
		<div class="p-4 border-t border-gray-200">
			<div class="flex" :class="[isCollapsed ? 'justify-start' : 'justify-between']">
				<button v-if="!isCollapsed" class="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
					<Icon name="i-heroicons-cog-6-tooth" class="w-5 h-5" />
				</button>
				<button @click="handleLogout" class="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
					<Icon name="i-heroicons-arrow-right-on-rectangle" class="w-5 h-5" />
				</button>
			</div>
		</div>

		<!-- Logout Modal -->
		<div v-if="showLogoutModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div class="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
				<h2 class="text-lg font-semibold mb-4">Вы точно хотите выйти?</h2>
				<div class="flex justify-end space-x-3">
					<button
						@click="confirmLogout"
						class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
					>
						Да
					</button>
					<button
						@click="cancelLogout"
						class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
					>
						Нет
					</button>
				</div>
			</div>
		</div>
	</aside>
</template>
