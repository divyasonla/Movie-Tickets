<template>
  <div class="slider-container bg-[#0a0a2e] min-h-screen">
    <NavBar />

    <!-- Slider Section -->
    <div class="relative overflow-hidden">
      <div class="relative h-[40vh] md:h-[40vh] lg:h-[60vh]">
        <TransitionGroup name="slide">
          <div 
            v-for="(slide, index) in slides" 
            :key="index" 
            v-show="currentSlide === index" 
            class="absolute inset-0 w-full h-full"
          >
            <div class="flex items-center justify-center h-full">
              <img :src="slide.image" :alt="slide.title" 
                   class="w-full h-full object-cover rounded-lg sm:h-[30vh] md:h-[50vh] lg:h-full" />
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>

    <!-- Movies List Section -->
    <h2 class="text-white text-2xl font-bold my-4 px-4">Movies</h2>
    <div class="movies-container overflow-x-auto whitespace-nowrap px-4">
      <div class="flex space-x-4">
        <div 
          v-for="movie in movies.data" 
          :key="movie.name" 
          class="movie-card relative w-[160px] sm:w-[200px] md:w-[230px] lg:w-[250px] flex-shrink-0"
          @click="goToMovie(movie.name)"
        >
          <img :src="movie.poster" :alt="movie.name" class="w-full h-[250px] md:h-[300px] lg:h-[330px] object-cover rounded-lg"
          />
          
          <!-- Overlay -->
          <div class="overlay absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300">
            <h3 class="text-white text-sm font-bold text-center px-2">{{ movie.title }}</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Genres Section -->
    <h2 class="text-white text-2xl font-bold my-6 px-6">Genres</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-6">
      <div v-for="genre in genres" :key="genre.name" :class="genre.class">
        <div class="genre-content">
          <component :is="genre.icon" class="w-8 h-10 mb-2" />
          <span>{{ genre.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { 
  HomeIcon, CarIcon, PalmtreeIcon, SmileIcon, 
  TheaterIcon, HeartIcon, RocketIcon, WandIcon
} from 'lucide-vue-next';
import { createListResource } from 'frappe-ui';
import NavBar from './NavBar.vue';

const router = useRouter(); 

const movies = createListResource({
  doctype: 'movie',
  fields: ['name', 'poster', 'title'],
  auto: true,
});

const slides = [
  { image: 'https://www.pinkvilla.com/images/2024-10/1733737418_avatar-the-dark-knight.jpg' },
  { image: 'https://media.wired.com/photos/59de99f39db9cf4266631b87/master/w_2560,c_limit/Movies-TopArt.jpg' },
  { image: 'https://www.cartoonbrew.com/wp-content/uploads/2023/11/2024_features_1.jpg' }
];

const currentSlide = ref(0);
const nextSlide = () => currentSlide.value = (currentSlide.value + 1) % slides.length;
onMounted(() => setInterval(nextSlide, 5000));

const genres = [
  { name: 'FAMILY', icon: HomeIcon, class: 'bg-blue-500' },
  { name: 'ACTION', icon: CarIcon, class: 'bg-red-500' },
  { name: 'ADVENTURE', icon: PalmtreeIcon, class: 'bg-green-500' },
  { name: 'COMEDY', icon: SmileIcon, class: 'bg-yellow-500' },
  { name: 'DRAMA', icon: TheaterIcon, class: 'bg-purple-500' },
  { name: 'ROMANCE', icon: HeartIcon, class: 'bg-pink-500' },
  { name: 'SCI-FI', icon: RocketIcon, class: 'bg-indigo-500' },
  { name: 'FANTASY', icon: WandIcon, class: 'bg-gray-500' }
];

// Function to navigate to Movie Details Page
const goToMovie = (movieName) => {
  router.push(`/movies/${movieName}`);
};
</script>

<style scoped>
.movies-container {
  display: flex;
  overflow-x: auto;
  padding-bottom: 10px;
}

/* Hover Effect for Movie Name */
.movie-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
}

.movie-card:hover .overlay {
  opacity: 1;
}
</style>
