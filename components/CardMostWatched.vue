<template>
  <div
    class="
      h-[315px]
      w-[100%]
      lg:255px
      mt-[20px]
      bg-light-blue-color
      rounded-xl
      lg:mr-[20px]
      lg:mt-[0px]
      relative
    "
  >
    <div class="bg-neutral-800/50 px-[10px] absolute right-3 top-3 rounded-md cursor-pointer">
      <span class="text-xs font-light text-white">{{ videoSize }}</span>
    </div>
    <div class="bg-main-color h-1/2 rounded-t-xl cursor-pointer"></div>
    <ProfilePicture newClasses="absolute top-[43%] right-[20px]"/>
    <div class="px-[30px] pt-[15px] relative">
      <p class="text-sm text-grey2-color font-normal">{{ author }}</p>
      <p class="mt-[10px] font-medium text-white">{{ title }}</p>
    </div>
    <p class="text-xs mt-[20px] text-grey2-color font-light absolute bottom-[15px] left-[30px]">
      {{ `${views} views - ${createdSince}` }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  author: { type: String, required: true },
  createdSince: { type: String, required: true },
  views: { type: String, required: true },
  videoSize: { type: String, required: true },
})
</script>