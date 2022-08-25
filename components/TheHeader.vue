<template>
  <header class="flex flex-row py-[20px]">
    <div class="lg:hidden block"></div>
    <div class="h-10 w-[20%] lg:w-[15%] flex items-center">
      <font-awesome-icon
        icon="bars"
        @click="globalStore.setShowMobileMenu(!showMobileMenu)"
        class="text-white text-[20px] block lg:hidden ml-[20px] cursor-pointer"
      />
      <span class="pl-5 text-white font-semibold cursor-pointer">Noutte</span>
    </div>
    <div class="w-[60%] flex items-center hidden sm:block">
      <div class="relative w-4/6">
        <font-awesome-icon
          icon="magnifying-glass"
          class="
            absolute
            right-[20px]
            top-[35%]
            text-white text-sm
            cursor-pointer
          "
        />
        <input
          type="text"
          placeholder="Search"
          class="
            block
            bg-grey1-color
            h-[40px]
            w-[100%]
            font-medium
            rounded-md
            text-white
            px-5
            py-1
            outline-none
          "
        />
      </div>
    </div>
    <div
      class="
        h-10
        w-[200px]
        flex flex-row
        items-center
        justify-end
        absolute
        right-[20px]
      "
    >
      <div class="bg-white h-7 w-7 rounded-full cursor-pointer"></div>
      <span
        class="
          text-white text-sm
          cursor-pointer
          hover:bg-dark-grey-color
          p-[7px]
          mx-[10px]
          rounded-md
        "
        >Lucas Lima</span
      >
      <div class="text-white">
        <font-awesome-icon icon="bell" class="text-xl cursor-pointer" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useGlobalStore } from "~~/stores/globalStore"
const globalStore = useGlobalStore()
const { showMobileMenu } = storeToRefs(globalStore);
</script>

