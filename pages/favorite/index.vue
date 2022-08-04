<template>
  <NuxtLayout>
    <div class="flex flex-row">
      <div class="w-[65%]">
        <h1 class="text-white text-3xl font-semibold">Favorite</h1>
        <div class="mt-[100px] flex justify-center items-center">
          <font-awesome-icon
              icon="heart-crack"
              class="text-light-blue-color text-[100px]"
            />
            <p class="text-light-blue-color text-[25px] ml-[20px] font-bold">Nothing to see here...</p>
        </div>
      </div>
      <div class="w-[30%] pl-[30px] mt-[55px]">
        <div class="bg-light-blue-color h-[280px] w-[100%] rounded-xl p-[25px]">
          <p class="text-white text-md ml-[20px]">Popular</p>
          <div>
            <div class="flex flex-row mt-[20px] justify-center">
              <ProfilePicture newClasses="relative mr-[15%]"/>
              <ProfilePicture newClasses="relative mr-[15%]"/>
              <ProfilePicture/>
            </div>
            <div class="flex flex-row mt-[60px] justify-center">
              <ProfilePicture newClasses="relative mr-[15%]"/>
              <ProfilePicture newClasses="relative mr-[15%]"/>
              <ProfilePicture/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
</script>
