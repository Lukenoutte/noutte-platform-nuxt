<template>
  <NuxtLink
    class="
      mt-[5px]
      py-[5px]
      flex flex-row
      items-center
      cursor-pointer
      hover:bg-sky-700
      rounded-md
      pl-[10px]
      ml-[10px]
      w-[90%]
    "
    :to="pageRoute"
  >
    <div
      class="
        bg-[#353340]
        h-[32px]
        w-[32px]
        rounded-xl
        flex
        justify-center
        items-center
      "
      :class="{ 'bg-[#ff7551]': isSelected }"
    >
      <font-awesome-icon :icon="iconName" class="text-md text-[#808191]" :class="{ 'text-white': isSelected }" />
    </div>
    <span
      class="ml-[15px] text-[#808191] font-medium"
      :class="{ 'text-white': isSelected }"
      >{{ title }}</span
    >
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  title: String,
  isSelected: Boolean,
  iconName: String,
  pageRoute: String,
});

const { isSelected } = toRefs(props);
</script>