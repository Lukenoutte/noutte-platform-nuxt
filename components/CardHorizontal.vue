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
        bottom-[20px]
        lg:top-[20px]
        right-[20px]
        cursor-pointer
        flex
        justify-center
        items-center
      "
      @click="onClickToFavorite"
      :class="{
        'bg-main-color': isFavorited,
        'bg-darkest-grey-color': !isFavorited,
      }"
    >
      <font-awesome-icon
        icon="heart"
        :class="{
          'text-grey3-color': !isFavorited,
          'text-white': isFavorited,
        }"
      />
    </div>
    <div
      class="
        bg-white
        h-[100%]
        w-[40%]
        md:w-[35%]
        rounded-xl
        relative
        cursor-pointer
      "
    >
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
        <span class="text-xs font-light text-white">{{
          videoTrending.videoSize
        }}</span>
      </div>
    </div>
    <div class="ml-[20px] w-[60%]">
      <p class="text-white font-medium text-sm lg:text-xl cursor-pointer">
        {{ videoTrending.title }}
      </p>
      <div class="mt-[15px] text-xs text-grey2-color font-light">
        <span>{{ videoTrending.views }} views</span>
        <span class="ml-[20px]">{{ videoTrending.likes }} likes</span>
      </div>
      <div class="flex flex-row mt-[20px]">
        <ProfilePicture newClasses="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] relative"/>
        <div class="mt-[5px] ml-[15px] font-light">
          <p class="text-white text-xs cursor-pointer">
            {{ videoTrending.author }}
          </p>
          <p class="mt-[5px] text-grey2-color text-[11px]">
            {{ videoTrending.createdSince }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useGlobalStore } from "~~/stores/globalStore";
const globalStore = useGlobalStore();
const onClickToFavorite = () => {
  globalStore.handleFavorited(props.videoTrending);
};
const isFavorited = computed(() => {
  return globalStore.isFavorited(props.videoTrending.id)
})
const props = defineProps({
  videoTrending: { type: Object, required: true },
});
</script>
