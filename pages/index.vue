<template>
  <NuxtLayout>
    <div class="min-h-screen">
      <div class="px-[20px] lg:px-[0px]">
        <span class="text-white text-3xl font-semibold">Discover</span>
        <div class="flex flex-col lg:flex-row">
          <CardDiscover
            widthCard="65%"
            title="You could get paid to eat candy"
            author="Lucas Lima"
            views="2k"
            createdSince="2 weeks ago"
            videoSize="2 min"
            image="~/assets/images/candy.jpg"
          />
          <CardDiscover
            widthCard="35%"
            title="Spiders Can Fear Other Spiders"
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
            v-for="(video, index) in discoverVideos"
            :key="index"
            :title="video.title"
            :author="video.author"
            :views="video.views"
            :createdSince="video.createdSince"
            :videoSize="video.videoSize"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { discoverVideos } from '../utils'
</script>

