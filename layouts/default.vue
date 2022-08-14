<template>
  <div class="bg-dark-blue-color min-h-screen pb-[50px]">
      <TheHeader/>
      <div class="flex flex-row">
        <TheMenuLeft/>
        <div class="w-[100%] lg:w-[85%]">
          <slot/>
        </div>
      </div>
  </div>
</template>

<script setup>
</script>