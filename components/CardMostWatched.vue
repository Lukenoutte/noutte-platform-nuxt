<template>
  <div class="h-[315px] w-[255px] bg-most-watched-card-bg rounded-xl mr-[20px] relative">
    <div class="bg-red-500 h-1/2 rounded-t-xl">

    </div>
    <div class="bg-white rounded-full w-[50px] h-[50px] absolute top-[45%] right-[25px]">

    </div>
    <div class="px-[30px] pt-[20px]">
      <p class="text-sm text-most-watched-title font-normal">{{ author }}</p>
      <p class="mt-[10px] font-medium text-white">{{ title }}</p>
      <p class="text-xs mt-[20px] text-most-watched-title font-light">{{ `${views} views - ${createdSince}` }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
  title: { type: String, required: true },
  author: { type: String, required: true },
  createdSince: { type: String, required: true },
  views: { type: String, required: true }
})
</script>