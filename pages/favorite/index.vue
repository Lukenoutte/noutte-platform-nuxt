<template>
  <NuxtLayout>
    <div class="flex flex-col lg:flex-row">
      <div class="w-[100%] lg:w-[65%] p-[20px] lg:p-[0px]">
        <h1 class="text-white text-3xl font-semibold">Favorite</h1>
        <div class="mt-[100px] flex justify-center items-center">
          <font-awesome-icon
              icon="heart-crack"
              class="text-light-blue-color text-[70px] lg:text-[100px]"
            />
            <p class="text-light-blue-color text-[20px] lg:text-[25px] ml-[20px] font-bold">Nothing to see here...</p>
        </div>
      </div>
      <div class="w-[100%] lg:w-[35%]">
        <MostPopupar/>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
</script>
