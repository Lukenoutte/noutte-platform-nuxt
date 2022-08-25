<template>
  <div
    class="
      min-h-full
      w-[50%]
      md:w-[30%]
      lg:w-[15%]
      bg-dark-blue-color
      z-40
      absolute
      lg:relative lg:block
    "
    :class="{
      hidden: !showMobileMenu,
      'block bg-mobile-menu-color lg:bg-dark-blue-color pt-[20px] lg:pt-[0px]': showMobileMenu,
    }"
  >
    <span class="text-dark-grey-color font-bold text-xs mb-[10px] ml-[20px]"
      >MENU</span
    >
    <MenuItem
      v-for="(menuItem, index) in menuItems"
      :key="index"
      :title="menuItem.title"
      :isSelected="$route.path === menuItem.route"
      :pageRoute="menuItem.route"
      :iconName="menuItem.iconName"
      @click="globalStore.setShowMobileMenu(!showMobileMenu)"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~~/stores/globalStore";
const menuItems = [
  { title: "Discover", route: "/", iconName: "house" },
  { title: "Trending", route: "/trending", iconName: "arrow-trend-up" },
  { title: "Favorite", route: "/favorite", iconName: "heart" },
];

const globalStore = useGlobalStore();
const { showMobileMenu } = storeToRefs(globalStore);
</script>


