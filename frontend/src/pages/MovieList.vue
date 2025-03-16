<template>
  <NavBar />
  <div class="container p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
    <h1 class="title text-center text-red-500">List of Movies</h1>

    <!-- Filter Section -->
   <div class="filter-section mb-6 flex flex-wrap gap-4 justify-center">
      <input v-model="searchQuery" type="text" placeholder="Search by movie name" class="border p-2 w-1/3 rounded-lg bg-gray-900" />
      
    </div>

    <!-- Movie List Categorized by Movie Type -->
    <div v-for="(movies, type) in categorizedMovies" :key="type" class="mb-8">
      <h2 class="text-xl font-bold text-blue-600 mb-4">{{ type }}</h2>
      
      <div v-if="movies.length" class="movies-container flex gap-4 overflow-x-auto p-4">
        <div 
          v-for="movie in movies" 
          :key="movie.name" 
          class="movie-item bg-white shadow-lg rounded-xl overflow-hidden flex-shrink-0 cursor-pointer group relative w-60"
          @click="openModal(movie)"
        >
          <!-- Movie Poster -->
          <img 
            :src="movie.poster" 
            alt="Movie Poster" 
            class="movie-poster w-full h-72 object-cover group-hover:blur-sm transition-all duration-300"
          />
            <div class="absolute top-4 right-4 px-2 bg-emerald-700 py-1 rounded-md">
             <p class="flex items-center gap-1 justify-center text-white-900 text-white font-bold">
               <span>{{ movie.vote }}</span>
               <Icon icon="material-symbols:star-rounded" color="blue" />
             </p>
           </div>

          <!-- Movie Info -->
          <div class="movie-info p-3">
            <router-link 
              :to="{ name: 'MovieDetails', params: { movieName: movie.name } }" 
              class="movie-title font-bold text-lg text-red-600 text-center hover:underline block mb-2"
            >
              {{ movie.title }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- No Movies Message -->
      <p v-else class="text-gray-600 text-center mt-4">No movies available in this category.</p>
    </div>

    <!-- Modal for Movie Details -->
    <div v-if="showModal" class="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="modal-content p-8 rounded-xl shadow-lg max-w-md mx-auto bg-gray-100" style="background-color: #e6e6ff">
        <img :src="selectedMovie.poster" alt="Movie Poster" class="modal-poster w-1/2 h-64 object-cover mb-4 mx-auto block" />
        
        <h2 class="modal-title font-bold text-2xl text-blue-400 mb-4 text-center">{{ selectedMovie.title }}</h2>
        
        <p class="text-gray-800 text-sm text-center"><span class="font-bold">Released on:</span> {{ selectedMovie.release_date }}</p>
        <p class="text-gray-700 text-sm text-center"><span class="font-bold">Director:</span> {{ selectedMovie.director }}</p>
         <p class="text-gray-700 text-sm text-center"><span class="font-bold">Duration:</span> {{ selectedMovie.movie_duration }}</p>
        <p class="text-gray-700 text-sm text-center"><span class="font-bold">Language:</span> {{ selectedMovie.language }}</p>

        <p class="text-gray-600 text-sm text-center"><span class="font-bold">Description:</span> {{ selectedMovie.synopsis }}</p>
        <div v-if="selectedMovie.movie_link" class="mt-4">
          <p class="text-gray-700 text-sm font-bold">Watch Video:</p>
          <iframe 
            :src="formatVideoLink(selectedMovie.movie_link) + '?controls=0&showinfo=0&modestbranding=1&rel=0'"
            class="w-full h-64 rounded-lg"
            frameborder="0" 
            allowfullscreen>
          </iframe>
        </div>
        <div class="flex justify-between">
       <button @click="closeModal" class="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 text-left">
          Close
        </button>

        <router-link :to="{ name: 'MovieDetails', params: { movieName: selectedMovie.name } }" class="block mt-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition duration-300 text-right">
            Book Tickets
          </button>
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { createListResource } from 'frappe-ui';
import { Icon } from '@iconify/vue';
import NavBar from './NavBar.vue';

const movies = createListResource({
  doctype: 'movie',
  fields: ['name', 'title', 'release_date', 'director', 'poster', 'vote','synopsis', 'movie_type','movie_duration','language','movie_link'],
  auto: true,
});

const showModal = ref(false);
const selectedMovie = ref(null);
const searchQuery = ref("");

// Modal Open Function
const openModal = (movie) => {
  selectedMovie.value = movie;
  showModal.value = true;
};

// Modal Close Function
const closeModal = () => {
  showModal.value = false;
};

// Filtered Movies
const filteredMovies = computed(() => {
  if (!searchQuery.value) return movies.data || [];
  return (movies.data || []).filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});


// Categorized Movies
const categorizedMovies = computed(() => {
  const categories = {};
  filteredMovies.value.forEach(movie => {
    if (!categories[movie.movie_type]) categories[movie.movie_type] = [];
    categories[movie.movie_type].push(movie);
  });
  return categories;
});
const formatVideoLink = (url) => {
  if (!url) return '';

  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w\-]+)/;
  const match = url.match(youtubeRegex);

  if (match) {
    return `https://www.youtube.com/embed/${match[2]}?controls=0&showinfo=0&modestbranding=1&rel=0`;
  }

  return url; 
};

// Clear Filters
// const clearFilters = () => {
//   searchQuery.value = "";
// };
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

.movies-container {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
}

.movie-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.movie-item:hover {
  transform: scale(1.05);
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
