<template>
  <header class="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10 transition-colors duration-300">
    <nav class="container mx-auto px-6 py-3">
      <div class="flex justify-between items-center">
        <a href="#" class="text-2xl font-bold text-primary-light dark:text-primary-dark">Badr Nejaa</a>
        <div class="hidden md:flex space-x-6">
          <a href="#about"
            class="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300">About</a>
          <a href="#projects"
            class="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300">Projects</a>
          <a href="#contact"
            class="hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-300">Contact</a>
        </div>
        <div class="flex items-center">
          <button id="darkModeToggle"
            class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 mr-4"
            aria-label="Toggle dark mode">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          <button id="mobileMenuToggle" class="md:hidden focus:outline-none" aria-label="Toggle mobile menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <div id="mobileMenu" class="md:hidden hidden bg-white dark:bg-gray-800 transition-colors duration-300">
      <a href="#about"
        class="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">About</a>
      <a href="#projects"
        class="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Projects</a>
      <a href="#contact"
        class="block py-2 px-4 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">Contact</a>
    </div>
  </header>
</template>