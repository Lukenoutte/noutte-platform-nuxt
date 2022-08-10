<template>
  <div class="min-h-screen w-[15%] hidden lg:block">
    <span class="text-dark-grey-color font-bold text-xs mb-[10px] ml-[20px]"
      >MENU</span
    >
    <MenuItem
      v-for="(menuItem, index) in menuItems" :key="index"
      :title="menuItem.title"
      :isSelected="$route.path === menuItem.route"
      :pageRoute="menuItem.route"
      :iconName="menuItem.iconName"
      @click.stop="selectMenuItem(menuItem.title)"
    />
  </div>
</template>

<script setup>
const menuItems = [
  { title: 'Discover', route: '/', iconName: 'house' },
  { title: 'Trending', route: '/trending', iconName: 'arrow-trend-up' },
  { title: 'Favorite', route: '/favorite', iconName: 'heart' }
]


</script>

