<template>
  <div
    class="
      h-[365px]
      bg-red-500
      rounded-lg
      mt-[30px]
      p-[40px]
      card-size
      lg:mr-[20px]
      relative
      cursor-pointer
    "
    :style="`width:${widthCard};`"
  >
    <div class="flex flex-col">
      <span class="text-white text-4xl font-medium">{{ title }}</span>
      <div class="flex flex-row mt-[40px]">
        <ProfilePicture/>
        <div class="ml-[10px] mt-[5px] text-white">
          <p class="text-sm font-semibold">{{ author }}</p>
          <p class="text-xs font-light">
            {{ views }} views - {{ createdSince }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="bg-neutral-800/50 px-[10px] absolute right-3 bottom-3 rounded-md"
    >
      <span class="text-xs font-light text-white">{{ videoSize }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  widthCard: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  createdSince: { type: String, required: true },
  views: { type: String, required: true },
  videoSize: { type: String, required: true },
})
</script>

<style>
@media only screen and (max-width: 1024px) {
  .card-size {
    width: 100%!important;
  }
}
</style>