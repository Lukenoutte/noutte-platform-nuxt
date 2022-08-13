<template>
  <NuxtLayout>
    <div class="min-h-screen pb-[50px]  ">
      <div class="px-[20px] lg:px-[0px]">
        <span class="text-white text-3xl font-semibold">Discover</span>
        <div class="flex mt-[30px] flex-col lg:flex-row">
          <CardDiscover
            widthCard="65%"
            title="How to do basic"
            author="Lucas Lima"
            views="2k"
            createdSince="2 weeks ago"
            videoSize="2 min"
          />
          <CardDiscover
            widthCard="35%"
            title="Skateboard"
            author="Pedro A."
            views="53k"
            createdSince="1 week ago"
            videoSize="10 min"
          />
        </div>
      </div>
      <div class="mt-[50px] px-[20px] lg:px-[0px]">
        <span class="text-white text-2xl font-medium">Most watched</span>
        <div class="mt-[30px] flex flex-col lg:flex-row">
          <CardMostWatched
            title="Skateboard"
            author="Pedro A."
            views="53k"
            createdSince="1 week ago"
            videoSize="10 min"
          />
          <CardMostWatched
            title="Skateboard"
            author="Pedro A."
            views="53k"
            createdSince="1 week ago"
            videoSize="10 min"
          />
          <CardMostWatched
            title="Skateboard"
            author="Pedro A."
            views="53k"
            createdSince="1 week ago"
            videoSize="10 min"
          />
          <CardMostWatched
            title="Skateboard"
            author="Pedro A."
            views="53k"
            createdSince="1 week ago"
            videoSize="10 min"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useVideosStore } from '~~/stores/videosStore'
const videoStore = useVideosStore()
</script>

