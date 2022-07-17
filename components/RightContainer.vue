<template>
  <div class="min-h-screen w-5/6 pr-[40px]">
    <div>
      <span class="text-white text-3xl font-semibold">Discover</span>
      <div class="flex flex-row mt-[30px]">
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
    <div class="mt-[60px]">
      <span class="text-white text-2xl font-medium">Most watched</span>
    </div>
  </div>
</template>

<script setup>
</script>

