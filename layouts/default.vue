<template>
  <div class="bg-dark-blue-color min-h-screen pb-[50px]">
      <TheHeader/>
      <div class="flex flex-row relative">
        <TheMenuLeft/>
        <div class="w-[100%] lg:w-[85%]" @click="globalStore.setShowMobileMenu(false)">
          <slot/>
        </div>
      </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/stores/globalStore";
const globalStore = useGlobalStore();
</script>