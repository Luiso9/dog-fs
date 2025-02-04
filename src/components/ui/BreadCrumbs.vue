<template>
  <div class="container mx-auto flex justify-start" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 px-4 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center">
        <a
          href="#"
          class="text-neutral-60 inline-flex items-center text-sm font-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        >
          Home
        </a>
      </li>
      <li>
        <div class="flex items-center">
          <ChevronRightIcon class="size-3" />
          <a
            href="#"
            class="text-neutral-60 ms-1 text-sm font-medium hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
          >
            Dog</a
          >
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <ChevronRightIcon class="size-3" />

          <span class="text-neutral-40 ms-1 text-sm font-medium md:ms-2 dark:text-gray-400"
            >Small Dog</span
          >
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>
