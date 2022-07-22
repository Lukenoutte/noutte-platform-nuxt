<template>
  <div class="min-h-screen w-1/6">
    <span class="text-menu-title-color font-bold text-xs mb-[10px] ml-[20px]"
      >MENU</span
    >
    <MenuItem
      v-for="(menuItem, index) in menuItems" :key="index"
      :title="menuItem.title"
      :isSelected="$route.path === menuItem.route"
      :pageRoute="menuItem.route"
      @click.stop="selectMenuItem(menuItem.title)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const menuItems = [
  { title: 'Discover', route: '/' },
  { title: 'Trending', route: '/trending' },
  { title: 'Playlists', route: '/playlists' }
]


</script>

