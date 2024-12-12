<script setup lang="ts">
import PanelHeader from "~/components/panel/PanelHeader.vue";
import PanelSidebar from "~/components/panel/PanelSidebar.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <PanelHeader />
    <div class="flex flex-1">
      <PanelSidebar />
      <main class="flex-1 pl-2 pr-6 pb-6 pt-2">
        <slot />
      </main>
    </div>
  </div>
</template>
