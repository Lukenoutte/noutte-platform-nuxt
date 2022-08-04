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
        h-[32px]
        w-[32px]
        rounded-xl
        flex
        justify-center
        items-center
      "
      :class="{ 'bg-main-color': isSelected, 'bg-grey1-color': !isSelected }"
    >
      <font-awesome-icon :icon="iconName" class="text-md" :class="{ 'text-white': isSelected, 'text-grey3-color': !isSelected }" />
    </div>
    <span
      class="ml-[15px] text-grey3-color font-medium"
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