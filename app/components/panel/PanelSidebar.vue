<script setup lang="ts">
import {
  panelNavigationUp,
  panelNavigationDown,
} from "~/constants/panel-navigation";
</script>

<template>
  <aside class="w-[100px] h-full">
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
