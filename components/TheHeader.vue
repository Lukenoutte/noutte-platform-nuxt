<template>
  <header class="flex flex-row py-[20px]">
    <div class="h-10 w-[15%] flex items-center">
      <span class="pl-5 text-white font-semibold cursor-pointer">Noutte</span>
    </div>
    <div class="w-[60%] flex items-center">
      <div class="relative w-4/6">
        <font-awesome-icon
          icon="magnifying-glass"
          class="absolute right-[20px] top-[35%] text-white text-sm cursor-pointer"
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
      class="h-10 w-[200px] flex flex-row items-center absolute right-[45px]"
    >
      <div class="bg-white h-7 w-7 rounded-full"></div>
      <span class="ml-5 text-white text-sm">Lucas Lima</span>
      <div class="ml-5 text-white">
        <font-awesome-icon icon="bell" class="text-xl cursor-pointer" />
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

