<template>
  <div class="slider-container bg-[#0a0a2e] min-h-screen">
    <NavBar />

    <!-- Slider Section -->
    <div class="relative overflow-hidden">
      <div class="relative h-[75vh]">
        <TransitionGroup name="slide">
          <div 
            v-for="(slide, index) in slides" 
            :key="slide.id" 
            v-show="currentSlide === index" 
            class="absolute inset-0 h-full"
          >
            <div class="flex items-center justify-between px-20 h-full">
              <img :src="slide.image" :alt="slide.title" class="w-full h-[75%] object-cover" />
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- Navigation Dots -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <div 
          v-for="(slide, index) in slides" 
          :key="`dot-${slide.id}`" 
          @click="currentSlide = index"
          :class="[
            'w-2 h-2 rounded-full cursor-pointer transition-all duration-300',
            currentSlide === index ? 'bg-white w-4' : 'bg-gray-500'
          ]"
        ></div>
      </div>

      <!-- Navigation Arrows -->
      <button @click="prevSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70">
        <ChevronLeftIcon class="w-6 h-6" />
      </button>
      <button @click="nextSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70">
        <ChevronRightIcon class="w-6 h-6" />
      </button>
    </div>

    <!-- Movies List Section -->
    <h2 class="text-white text-2xl font-bold my-6 px-6">Movies</h2>
    
    <div class="movies-container overflow-x-auto whitespace-nowrap px-6 h-60">
      <div 
        v-for="movie in movies.data" 
        :key="movie.poster" 
        class="w-[600px] h-48 object-cover rounded-lg"
      >
        <img :src="movie.poster" :alt="movie.name" class="w-full h-48 object-cover rounded-lg" />
        <h3 class="text-white text-sm break-words mt-2">{{ movie.title }}</h3>
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
import { ref, onMounted } from 'vue'
import { 
  HomeIcon, CarIcon, PalmtreeIcon, SmileIcon, 
  TheaterIcon, HeartIcon, RocketIcon, WandIcon,
  ChevronLeftIcon, ChevronRightIcon 
} from 'lucide-vue-next'
import { createListResource } from 'frappe-ui'
import NavBar from './NavBar.vue'

// Movies Data
const movies = createListResource({
  doctype: 'movie',
  fields: ['name', 'poster', 'title'],
  auto: true,
});

// Slider Data
const slides = [
  { image: 'https://www.pinkvilla.com/images/2024-10/1733737418_avatar-the-dark-knight.jpg' },
  { image: 'https://media.wired.com/photos/59de99f39db9cf4266631b87/master/w_2560,c_limit/Movies-TopArt.jpg' },
  { image: 'https://www.cartoonbrew.com/wp-content/uploads/2023/11/2024_features_1.jpg' },
  { image: 'https://sm.ign.com/ign_za/news/i/inside-out/inside-out-2-just-crossed-1-billion-in-record-time-for-an-an_q8r8.jpg' },
  { image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/10/mixcollage-19-oct-2024-08-39-pm-8608.jpg' },
  { image: 'https://media.licdn.com/dms/image/v2/D4D22AQH-o4AcZicryw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1712471139898?e=2147483647&v=beta&t=-qMeyJjdKE7rag7O_XoHb-vMT9soccnJ-9hj4tsRmks' }
]

// Autoplay and Navigation
const currentSlide = ref(0)
const autoplayInterval = ref(null)

const nextSlide = () => currentSlide.value = (currentSlide.value + 1) % slides.length
const prevSlide = () => currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length

const startAutoplay = () => autoplayInterval.value = setInterval(nextSlide, 5000)
const stopAutoplay = () => clearInterval(autoplayInterval.value)

onMounted(() => startAutoplay())

// Genres Data
const genres = [
  { name: 'FAMILY', icon: HomeIcon, class: 'bg-gradient-to-br from-blue-400 to-purple-600' },
  { name: 'ACTION', icon: CarIcon, class: 'bg-gradient-to-br from-purple-600 to-purple-800' },
  { name: 'ADVENTURE', icon: PalmtreeIcon, class: 'bg-gradient-to-br from-blue-300 to-purple-500' },
  { name: 'COMEDY', icon: SmileIcon, class: 'bg-gradient-to-br from-purple-800 to-purple-900' },
  { name: 'DRAMA', icon: TheaterIcon, class: 'bg-gradient-to-br from-purple-700 to-blue-900' },
  { name: 'ROMANCE', icon: HeartIcon, class: 'bg-gradient-to-br from-purple-500 to-purple-700' },
  { name: 'SCI-FI', icon: RocketIcon, class: 'bg-gradient-to-br from-blue-600 to-purple-800' },
  { name: 'FANTASY', icon: WandIcon, class: 'bg-gradient-to-br from-blue-400 to-purple-600' },
  
]
</script>

<style scoped>
.movies-container {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  gap: 10px;
  padding-bottom: 10px;
}
</style>
