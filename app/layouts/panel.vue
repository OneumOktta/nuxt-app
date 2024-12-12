<script setup lang="ts">
import PanelHeader from "~/components/panel/PanelHeader.vue";
import PanelSidebar from "~/components/panel/PanelSidebar.vue";
</script>

<template>
  <!-- <div class="min-h-screen flex flex-col">
    <PanelHeader />
    <div class="flex flex-1">
      <PanelSidebar />
      <main class="flex-1 pl-2 pr-6 pb-6 pt-2">
        <slot />
      </main>
    </div>
  </div> -->

  <div class="min-h-screen grid grid-rows-[auto_1fr] grid-cols-1 p-6 gap-4">
    <header class="row-start-1 col-span-full">
      <PanelHeader />
    </header>

    <div class="row-start-2 col-span-full grid grid-cols-[auto_1fr] gap-4">
      <aside class="col-start-1 h-full">
        <PanelSidebar />
      </aside>

      <main class="col-start-2">
        <slot />
      </main>
    </div>
  </div>
</template>
