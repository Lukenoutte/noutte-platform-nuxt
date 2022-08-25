<template>
  <div class="bg-dark-blue-color min-h-screen">
      <TheHeader/>
      <div class="flex flex-row relative">
        <TheMenuLeft/>
        <div class="w-[100%] lg:w-[85%] pb-[50px]" @click="globalStore.setShowMobileMenu(false)">
          <slot/>
        </div>
      </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/stores/globalStore";
const globalStore = useGlobalStore();
</script>