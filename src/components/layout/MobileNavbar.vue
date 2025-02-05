<template>
  <nav>
    <div class="w-full gap-2 p-4">
      <ul class="flex flex-row items-center justify-between">
        <div class="relative">
          <Bars3Icon @click="toggleDropdown" class="size-8 cursor-pointer" />
          <div
            v-if="isDropdownOpen"
            class="text-primary-80 bg-neutral-0 absolute -left-4 z-50 mt-2 w-screen rounded-lg shadow-lg backdrop-blur-md"
          >
            <ul class="p-4 py-2 leading-4 font-semibold">
              <li class="cursor-pointer px-4 py-2 text-center hover:bg-gray-200">
                <RouterLink to="/"> Home </RouterLink>
              </li>
              <li class="cursor-pointer px-4 py-2 text-center hover:bg-gray-200">
                <RouterLink to="/product"> Categories </RouterLink>
              </li>
              <li class="cursor-pointer px-4 py-2 text-center hover:bg-gray-200">About</li>
              <li class="cursor-pointer px-4 py-2 text-center hover:bg-gray-200">Contact</li>
            </ul>
          </div>
        </div>

        <img src="@/assets/perikanan/Frame.svg" alt="Monito Logo" class="z-50" />

        <MagnifyingGlassIcon class="z-50 size-6" />
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// State to control dropdown visibility
const isDropdownOpen = ref(false)

// Toggle function for dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<style scoped>
* {
  z-index: 999;
}
</style>
