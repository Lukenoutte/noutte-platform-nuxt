<template>
  <div
    class="
      h-[315px]
      w-[255px]
      bg-most-watched-card-bg
      rounded-xl
      mr-[20px]
      relative
    "
  >
    <div class="bg-neutral-800/50 px-[10px] absolute right-3 top-3 rounded-md">
      <span class="text-xs font-light text-white">{{ videoSize }}</span>
    </div>
    <div class="bg-red-500 h-1/2 rounded-t-xl cursor-pointer"></div>
    <div
      class="
        bg-white
        rounded-full
        w-[50px]
        h-[50px]
        absolute
        top-[45%]
        right-[25px]
        cursor-pointer
      "
    >
      <div
        class="
          rounded-full
          w-[15px]
          h-[15px]
          bg-blue-500
          border-solid border-2 border-most-watched-card-bg
          absolute
          top-[72%]
          right-0
        "
      >
        <div></div>
      </div>
    </div>
    <div class="px-[30px] pt-[20px]">
      <p class="text-sm text-most-watched-title font-normal cursor-pointer">{{ author }}</p>
      <p class="mt-[10px] font-medium text-white cursor-pointer">{{ title }}</p>
      <p class="text-xs mt-[20px] text-most-watched-title font-light">
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
});
</script>