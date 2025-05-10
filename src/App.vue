<script setup lang="ts">
import { RouterView } from "vue-router"
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <main class="px-5 py-4 h-full grow">
    <RouterView />
  </main>
  <Footer />
</template>
