<template>
  <div class="bg-dark-blue-color min-h-screen">
      <TheHeader/>
      <div class="flex flex-row">
        <TheMenuLeft/>
        <div class="w-[85%]">
          <slot/>
        </div>
      </div>
  </div>
</template>

<script setup>
</script>