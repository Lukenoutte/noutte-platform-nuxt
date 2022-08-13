<template>
  <NuxtLayout>
    <div class="flex flex-col lg:flex-row">
      <div class="w-[100%] lg:w-[65%] p-[20px] p-[20px] lg:p-[0px]">
        <h1 class="text-white text-3xl font-semibold">Trending</h1>
        <div class="mt-[20px]">
          <CardTrending
            title="How to do basic"
            author="Lucas Lima"
            views="2k"
            createdSince="2 weeks ago"
            videoSize="2 min"
            likes="1.3k"
          />
          <CardTrending
            title="How to do basic"
            author="Lucas Lima"
            views="2k"
            createdSince="2 weeks ago"
            videoSize="2 min"
            likes="1.3k"
          />
          <CardTrending
            title="How to do basic"
            author="Lucas Lima"
            views="2k"
            createdSince="2 weeks ago"
            videoSize="2 min"
            likes="1.3k"
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
</script>
