<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

// State to hold the banner data
const banner = ref({
  title: "",
  description: "",
  poster: "",
});

// Fetch data from the Banner Doctype using Frappe's API
const fetchBannerData = async () => {
  try {
    // Replace with your Frappe server URL and API endpoint to fetch the Banner data
    const response = await fetch("http://127.0.0.1:8010/api/resource/Banner"); // Adjust the URL and name
    
    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    
    const data = await response.json();
    console.log(data); // Log the response for debugging
    
    // Ensure the response contains the expected structure
    if (data && data.data) {
      banner.value = {
        title: data.data.title,
        description: data.data.description,
        poster: data.data.poster, // Assuming the poster is a URL to the image
      };
    } else {
      console.error("Unexpected response structure:", data);
    }
  } catch (error) {
    console.error("Error fetching banner data:", error);
  }
};

// Fetch the data when the component is mounted
onMounted(() => {
  fetchBannerData();
});
</script>

<template>
  <div
    class="w-screen h-screen"
    :style="{
      backgroundImage: 'url(' + banner.poster + ')', // Dynamic background image
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    }"
  >
    <div class="text-white p-10 flex flex-col justify-center w-full h-full bg-gradient-to-r from-black to-transparent">
      <!-- Display the Banner title -->
      <h1 class="text-8xl font-bold">{{ banner.title }}</h1>
      
      <!-- Display description with a length limit -->
      <p class="mt-2 w-1/2 text-sm text-neutral-400">
        {{ banner.description.length <= 200 ? banner.description : banner.description.slice(0, 200) + "..." }}
      </p>
      
      <!-- Link to the movie detail page or other page -->
      <RouterLink
        :to="`/movie.title/${banner.title}`"
        class="flex items-center gap-1 px-6 py-4 rounded-md bg-green-700 w-fit mt-4 transition hover:bg-neutral-800 font-semibold"
      >
        <span>View More</span>
        <span>
          <Icon icon="ic:round-play-arrow" />
        </span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* You can add some styles here if necessary */
</style>
