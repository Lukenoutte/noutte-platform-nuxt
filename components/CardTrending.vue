<template>
  <div
    class="
      mt-[15px]
      h-[180px]
      rounded-xl
      bg-light-blue-color
      w-[100%]
      p-[20px]
      flex flex-row
      relative
    "
  >
    <div
      class="
        rounded-full
        w-[30px]
        h-[30px]
        absolute
        top-[20px]
        right-[20px]
        cursor-pointer
        flex
        justify-center
        items-center
      "
      @click="onClickToFavorite"
      :class="{'bg-main-color': isFavorite, 'bg-darkest-grey-color': !isFavorite}"
    >
     <font-awesome-icon icon="heart" :class="{'text-grey3-color': !isFavorite, 'text-white': isFavorite}" />
    </div>
    <div class="bg-white h-[100%] w-[220px] rounded-xl relative cursor-pointer">
      <div
        class="
          bg-neutral-800/50
          px-[10px]
          absolute
          right-2
          bottom-2
          rounded-md
          cursor-pointer
        "
      >
        <span class="text-xs font-light text-white">2 min</span>
      </div>
    </div>
    <div class="ml-[20px]">
      <p class="text-white font-medium text-2xl cursor-pointer">How to basic</p>
      <div class="mt-[15px] text-xs text-grey2-color font-light">
        <span>125.00 views</span>
        <span class="ml-[20px]">12.00 likes</span>
      </div>
      <div class="flex flex-row mt-[20px]">
        <ProfilePicture/>
        <div class="mt-[5px] ml-[15px] font-light">
          <p class="text-white text-xs cursor-pointer">Author</p>
          <p class="mt-[5px] text-grey2-color text-[11px]">
            4 days ago
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const isFavorite = ref(false)
  const onClickToFavorite = () => {
    isFavorite.value = !isFavorite.value
  }
</script>
