<script lang="ts" setup>
import { RouterLink } from "vue-router";
import ROUTE from "../config/route";

</script>
<template>
  <div
    class=" text-black ">
    <div class="flex items-center justify-center px-2">
      <div class="text-center">
        <h1 class="text-9xl font-bold">404</h1>
        <p class="text-2xl font-medium mt-4">Oops! Page not found</p>
        <p class="mt-4 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <RouterLink :to="ROUTE.HOME"
          class="px-6 py-3 bg-white font-bold rounded-full hover:bg-purple-100 transition duration-300 ease-in-out">
          Go Home
        </RouterLink>
      </div>
    </div>
  </div>
</template>