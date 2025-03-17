<template>
  <nav class="bg-gray-800 text-white p-4 relative">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-semibold">Movie App</div>

      <!-- Hamburger Menu Button (Mobile) -->
      <button @click="toggleMenu" class="lg:hidden text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <!-- Navigation Links -->
      <div 
        class="lg:flex lg:space-x-6 lg:items-center absolute lg:static w-full lg:w-auto top-16 left-0 right-0 bg-gray-900 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out z-50"
        :class="isMenuOpen ? 'block' : 'hidden lg:flex'"
      >
        <router-link to="/" class="block py-2 lg:py-0 px-4 text-white hover:underline" @click="closeMenu">Home</router-link>
        <router-link to="/movies" class="block py-2 lg:py-0 px-4 text-white hover:underline" @click="closeMenu">Movie List</router-link>
        <router-link to="/login" class="block py-2 lg:py-0 px-4 text-white hover:underline" @click="closeMenu">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false, 
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false; // Navbar close karne ka function
    }
  }
}
</script>

<style scoped>
/* Ensure navbar is on top */
nav {
  z-index: 1000;
}
</style>
