<template>
  <NavBar />
  <div class="container p-4">
    <h1 class="title text-center text-blue-500">List of Theaters</h1>
    
    <ul v-if="theaters.data" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <li v-for="theater in theaters.data" :key="theater.theater" class="bg-white shadow-lg p-4 rounded-lg">
        <h2 class="font-bold text-lg text-red-600">{{ theater.theater }}</h2>
        <p class="text-gray-700">Address: {{ theater.address }}</p>
        <p class="text-gray-600">Start Time: {{ theater.start_time }}</p>
      </li>
    </ul>
    
    <p v-else class="text-gray-600 text-center mt-6">No theaters available at the moment.</p>
  </div>
</template>

<script setup>
import { createListResource } from 'frappe-ui';
import NavBar from './NavBar.vue'

const theaters = createListResource({
  doctype: 'Theater Show',
  fields: ['theater', 'address', 'start_time'],
  auto: true,
});
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
</style>
