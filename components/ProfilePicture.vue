<template>
  <div
      class="
        bg-white
        rounded-full
        w-[50px]
        h-[50px]
        cursor-pointer
      "
      :class="`${newClasses ? newClasses : 'relative'}`"
    >
      <div
        class="
          rounded-full
          w-[15px]
          h-[15px]
          bg-blue-500
          border-solid border-2
          absolute
          top-[72%]
          right-0
          flex
          justify-center
          items-center
        "
      >
        <font-awesome-icon icon="check" class="text-white text-[7px]" />
      </div>
    </div>
</template>

<script setup>
  defineProps({
    newClasses: { type: String }
  })
</script>
