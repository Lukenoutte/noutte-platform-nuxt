<template>
  <NuxtLayout>
    <div class="flex flex-col lg:flex-row">
      <div class="w-[100%] lg:w-[65%] p-[20px] p-[20px] lg:p-[0px]" >
        <h1 class="text-white text-3xl font-semibold">Trending</h1>
        <div class="mt-[20px]">
          <CardTrending/>
          <CardTrending/>
          <CardTrending/>
        </div>
      </div>
    <MostPopupar/>
    </div>
  </NuxtLayout>
</template>

<script setup>
</script>
