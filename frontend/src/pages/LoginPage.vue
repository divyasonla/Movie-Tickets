<!-- LoginPage.vue -->
<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
      <form @submit.prevent="submitLogin">
        <!-- Username -->
        <div class="mb-4">
          <label for="username" class="block text-sm font-semibold text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            class="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        
        <!-- Password -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-4">
        Don't have an account? <router-link to="/register" class="text-blue-500 hover:underline">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const submitLogin = () => {
  if (username.value && password.value) {
    // Handle login logic here (e.g., API call)
    console.log('Logging in with:', username.value, password.value);
    // Redirect after successful login
    // Example: this.$router.push('/dashboard');
  }
};
</script>

