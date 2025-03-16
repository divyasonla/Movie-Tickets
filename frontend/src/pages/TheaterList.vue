<template>
  <NavBar />
  <div class="container p-4">
    <h1 class="title text-center text-blue-500">List of Theaters</h1>

    <ul v-if="theaters.data" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <li v-for="theater in theaters.data" :key="theater.name" class="bg-gray-200 shadow-lg p-4 rounded-lg cursor-pointer" @click="openModal(theater)">
        <p class="font-bold text-lg text-red-600 hover:underline">{{ theater.name }}</p>
        <p class="text-gray-600"><strong>Location:</strong> {{ theater.location }}</p>
        <p class="text-gray-600"><strong>Capacity:</strong> {{ theater.capacity }}</p>
        <p class="text-gray-700"><strong>Address:</strong> {{ theater.address }}</p>
      </li>
    </ul>

    <p v-else class="text-gray-600 text-center mt-6">No theaters available at the moment.</p>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="modal-content p-8 rounded-xl shadow-lg max-w-md mx-auto bg-gray-100" style="background-color: #e6e6ff">
        <img :src="selectedTheater.poster" alt="Movie Poster" class="modal-poster w-full h-64 object-cover mb-4 rounded-xl" />
        <h2 class="modal-title font-bold text-2xl text-blue-400 mb-4">{{ selectedTheater.name }}</h2>
        <p class="text-gray-800 text-sm"><span class="font-bold">Location:</span> {{ selectedTheater.location }}</p>
        <p class="text-gray-700 text-sm"><span class="font-bold">Capacity:</span> {{ selectedTheater.capacity }}</p>
        <p class="text-gray-700 text-sm"><span class="font-bold">Address:</span> {{ selectedTheater.address }}</p>

        <!-- Video Embed Section -->
        <div v-if="selectedTheater.video_link" class="mt-4">
          <p class="text-gray-700 text-sm font-bold">Watch Video:</p>
          <iframe 
            :src="formatVideoLink(selectedTheater.video_link)" 
            class="w-full h-64 rounded-lg"
            frameborder="0" 
            allowfullscreen>
          </iframe>
        </div>
        <div class="flex justify-between">

        <button @click="goToMovieList" class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">View Movies</button>

        <button @click="closeModal" class="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { createListResource } from 'frappe-ui';
import NavBar from './NavBar.vue';

const theaters = createListResource({
  doctype: 'Movie Theater',
  fields: ['name', 'location', 'capacity', 'address', 'poster', 'video_link',],
  auto: true,
});

const showModal = ref(false);
const selectedTheater = ref(null);
const router = useRouter();

const openModal = (theater) => {
  selectedTheater.value = theater;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const goToMovieList = () => {
  router.push('/MovieList');
};


// Function to format YouTube video links to embed format
const formatVideoLink = (url) => {
  if (!url) return '';

  // Convert YouTube watch link to embed format
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w\-]+)/;
  const match = url.match(youtubeRegex);

  if (match) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }

  return url; // If not YouTube, return original URL (for other video sources)
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}
.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
}
</style>
