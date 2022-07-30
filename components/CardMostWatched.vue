<template>
  <div
    class="
      h-[315px]
      w-[255px]
      bg-card
      rounded-xl
      mr-[20px]
      relative
    "
  >
    <div class="bg-neutral-800/50 px-[10px] absolute right-3 top-3 rounded-md cursor-pointer">
      <span class="text-xs font-light text-white">{{ videoSize }}</span>
    </div>
    <div class="bg-red-500 h-1/2 rounded-t-xl cursor-pointer"></div>
    <ProfilePicture newClasses="absolute top-[43%] right-[20px]"/>
    <div class="px-[30px] pt-[20px]">
      <p class="text-sm text-grey-card font-normal">{{ author }}</p>
      <p class="mt-[10px] font-medium text-white">{{ title }}</p>
      <p class="text-xs mt-[20px] text-grey-card font-light">
        {{ `${views} views - ${createdSince}` }}
      </p>
    </div>
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