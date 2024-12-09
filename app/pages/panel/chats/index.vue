<script setup lang="ts">
definePageMeta({
	layout: 'panel',
})
</script>

<template>
	<PanelContent>
		<div class="flex h-screen bg-gray-100">
			<!-- Sidebar - Chat List -->
			<div class="w-1/4 bg-white border-r border-gray-200">
				<!-- Search -->
				<div class="p-4 border-b border-gray-200">
					<div class="relative">
						<input
							type="text"
							placeholder="Search chats..."
							class="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<span class="absolute right-3 top-2.5 text-gray-400">
							<svg
								class="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</span>
					</div>
				</div>

				<!-- Chat List -->
				<div class="overflow-y-auto h-[calc(100vh-5rem)]">
					<div
						v-for="i in 5"
						:key="i"
						class="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
					>
						<div class="flex items-center space-x-3">
							<div class="w-12 h-12 bg-gray-300 rounded-full"></div>
							<div class="flex-1">
								<h3 class="text-sm font-semibold text-gray-900">
									User Name {{ i }}
								</h3>
								<p class="text-sm text-gray-500 truncate">
									Latest message preview...
								</p>
							</div>
							<div class="text-xs text-gray-400">12:30</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Main Chat Area -->
			<div class="flex-1 flex flex-col">
				<!-- Chat Header -->
				<div class="p-4 bg-white border-b border-gray-200">
					<div class="flex items-center space-x-3">
						<div class="w-10 h-10 bg-gray-300 rounded-full"></div>
						<div>
							<h2 class="text-lg font-semibold">Selected User</h2>
							<p class="text-sm text-gray-500">Online</p>
						</div>
					</div>
				</div>

				<!-- Messages Area -->
				<div class="flex-1 overflow-y-auto p-4 space-y-4">
					<div
						v-for="i in 5"
						:key="i"
						:class="i % 2 === 0 ? 'flex justify-end' : 'flex justify-start'"
					>
						<div
							:class="
								i % 2 === 0
									? 'bg-blue-500 text-white'
									: 'bg-gray-200 text-gray-800'
							"
							class="max-w-[70%] rounded-lg p-3"
						>
							<p class="text-sm">
								This is a sample message that might be quite long to test the
								layout and wrapping of text in our chat bubbles.
							</p>
							<span class="text-xs opacity-75 mt-1 block">12:{{ i }}0 PM</span>
						</div>
					</div>
				</div>

				<!-- Message Input -->
				<div class="p-4 bg-white border-t border-gray-200">
					<div class="flex items-center space-x-2">
						<button class="p-2 hover:bg-gray-100 rounded-full">
							<svg
								class="w-6 h-6 text-gray-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
								/>
							</svg>
						</button>
						<input
							type="text"
							placeholder="Type your message..."
							class="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<button
							class="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
						>
							<svg
								class="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</PanelContent>
</template>
