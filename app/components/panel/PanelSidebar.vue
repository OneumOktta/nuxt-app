<script setup lang="ts">
import {
	panelNavigationUp,
	panelNavigationDown,
} from '~/constants/panel-navigation'
</script>

<template>
	<aside class="pt-2 pb-6 ml-6 mr-2 w-24">
		<div class="bg-light-panels dark:bg-dark-panels rounded-2xl h-full">
			<div class="flex flex-col h-full py-4">
				<!-- Верхние ссылки -->
				<nav class="flex-none flex flex-col gap-4">
					<SidebarLink
						v-for="link in panelNavigationUp"
						:key="link.to"
						v-bind="link"
					/>
				</nav>

				<div class="flex-1"></div>

				<!-- Нижние ссылки -->
				<nav class="flex-none flex flex-col gap-4">
					<SidebarLink
						v-for="link in panelNavigationDown"
						:key="link.to"
						v-bind="link"
					/>
				</nav>
			</div>
		</div>
	</aside>
</template>
