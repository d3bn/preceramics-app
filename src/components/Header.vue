<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ROUTE from '../config/route';
import { ref } from 'vue';

const routes = [
  {
    name: "Home",
    url: ROUTE.HOME,
  },
  {
    name: "Arts",
    url: ROUTE.ARTS,
  },
];

const visibility = ref<boolean>(false);
</script>

<template>
  <header class="flex justify-between align-center py-10 px-5">
    <RouterLink :to="ROUTE.HOME" class="text-primary font-black uppercase tracking-widest text-3xl">Pre Ceramics</RouterLink>
    <button type="button" aria-label="menu" @click="visibility = !visibility"
      class="group flex cursor-pointer items-center justify-center">
      <div class="space-y-2">
        <span
          class="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
        <span
          class="block h-1 w-8 origin-center rounded-full bg-blue-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
      </div>
    </button>
  </header>

  <Teleport to="body">
    <div :class="{ hidden: visibility === false }" class="fixed h-full w-full z-10 top-0 bg-slate-800/50"
      @click.self="visibility = false">
      <div class="bg-blue-400 p-9 relative w-[400px] float-end h-full shadow-lg transition-transform ease-in-out"
        @dblclick.self="visibility = false">
        <nav class="flex flex-col gap-5">
          <RouterLink v-for="route in routes" :to="route.url" :class="{ 'text-yellow-50': $route.path === route.url }"
            class="text-primary font-medium tracking-widest text-2xl uppercase hover:text-yellow-50 hover:text-shadow-sm">
            {{ route.name }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </Teleport>
</template>