<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
	useHead({
		title: "Noutte",
		meta: [
			{
				name: "description",
				content: "Your video platform",
			},
			{
				property: "og:title",
				content: "Noutte",
			},
			{
				property: "og:description",
				content: "Noutte - Your video platform",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:site_name",
				content: "Noutte",
			},
		],
	});
</script>