<template>
  <div class="py-[10px] flex flex-row items-center">
    <div class="bg-[#353340] h-[32px] w-[32px] rounded-xl flex justify-center items-center"
        :class="{'bg-[#ff7551]': isSelected}">
      <i class="text-[#808191]" :class="{'!text-white': isSelected}">a</i>
    </div>
    <span class="ml-[15px] text-[#808191] font-medium" :class="{'!text-white': isSelected}">{{title}}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  isSelected: Boolean,
  iconName: String
})

const { isSelected } = toRefs(props);
</script>