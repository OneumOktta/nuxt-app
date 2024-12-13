<script setup lang="ts">
  import {
    panelNavigationDown,
    panelNavigationUp,
  } from '~/constants/panel-navigation'
</script>

<template>
  <aside class="ml-6 mr-2 w-24 pb-6 pt-2">
    <div class="h-full rounded-2xl bg-light-panels dark:bg-dark-panels">
      <div class="flex h-full flex-col py-4">
        <!-- Верхние ссылки -->
        <nav class="flex flex-none flex-col gap-4">
          <SidebarLink
            v-for="link in panelNavigationUp"
            :key="link.to"
            v-bind="link"
          />
        </nav>

        <div class="flex-1"></div>

        <!-- Нижние ссылки -->
        <nav class="flex flex-none flex-col gap-4">
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
