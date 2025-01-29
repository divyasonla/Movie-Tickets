<template>
    <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 ">
        <!-- Navbar -->
        <!-- <Navbar /> -->

        <!-- Space between Navbar and List -->
        <div class="mt-6 sm:mt-[10%] md:mt-10 lg:mt-12 flex flex-row justify-center items-center"></div>

        <!-- Header -->
        <h1 
            class="font-bold text-red-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6 text-center"
        >
            List of Movies
        </h1>

        <!-- Movie List -->
        <ul 
            v-if="movies.data" 
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 w-full mx-auto"
        >
            <li 
                v-for="movie in movies.data" 
                :key="movie.name" 
                class="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
            >
                <!-- Movie Poster -->
                <img 
                    :src="movie.poster" 
                    alt="Movie Poster" 
                    class="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
                />

                <!-- Movie Details -->
                <div class="p-3 sm:p-4 md:p-5 lg:p-6 flex-1">
                    <!-- Movie Title -->
                    <router-link 
                        :to="{ name: 'MovieDetails', params: { movieName: movie.name } }" 
                        class="font-bold text-lg sm:text-xl md:text-2xl text-red-600 text-center hover:underline block mb-2"
                    >
                        {{ movie.title }}
                    </router-link>

                    <!-- Movie Description -->
                    <p v-if="movie.description" class="text-gray-600 text-sm sm:text-base md:text-lg text-center">
                        {{ movie.description }}
                    </p>
                </div>
            </li>
        </ul>

        <!-- Fallback if no movies -->
        <p 
            v-else 
            class="text-gray-600 text-center mt-6 text-lg sm:text-xl md:text-2xl"
        >
            No movies available at the moment.
        </p>
    </div>
</template>

<script setup>
import { createListResource } from 'frappe-ui';
// import Navbar from "../components/Navbar.vue";

const movies = createListResource({
    doctype: 'movie',
    fields: ['name', 'title', 'release_date', 'director', 'poster'],
    auto: true,
});
</script>
