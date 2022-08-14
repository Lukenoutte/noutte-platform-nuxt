<template>
  <NuxtLayout>
    <div class="flex flex-col lg:flex-row">
      <div class="w-[100%] lg:w-[65%] p-[20px] p-[20px] lg:p-[0px]">
        <h1 class="text-white text-3xl font-semibold">Trending</h1>
        <div class="mt-[20px]">
          <CardHorizontal
            v-for="(video, index) in videoStore.trendingList"
            :key="index"
            :videoTrending="video"
          />
        </div>
      </div>
      <div class="w-[100%] lg:w-[35%]">
        <MostPopupar />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import { useVideoStore } from '~~/stores/videoStore'
  const videoStore = useVideoStore()
</script>
