<template>
  <div class="absolute left-0 right-0 justify-center my-8 w-fit mx-auto max-h-fit rounded-xl bg-white drop-shadow-lg">
    <div class="container mx-auto">
      <div class="dog flex flex-row py-[34px] px-10 gap-16">
        <div class="popul">
          <h2 class="text-lg font-bold mx-8 text-primary-80 inline-flex items-center">
            Popular <ArrowRightIcon class="size-3 mx-1" />
          </h2>
          <ul class="grid grid-cols-2 text-sm text-neutral-60 mt-2.5">
            <li
              v-for="dog in dogs.popular"
              :key="dog.name"
              class="rounded-lg bg-neutral-0 mx-8 leading-7 cursor-pointer hover:bg-primary-100"
            >
              <span>{{ dog.name }}</span>
            </li>
          </ul>
        </div>
        <div class="large-dogs">
          <h2 class="text-lg font-bold mx-8 text-primary-80 inline-flex items-center">
            Large <ArrowRightIcon class="size-3 mx-1" />
          </h2>
          <ul class="grid grid-cols-1 text-sm text-neutral-60 mt-2.5">
            <li
              v-for="dog in dogs.large"
              :key="dog.name"
              class="rounded-lg bg-neutral-0 mx-8 leading-7 cursor-pointer hover:bg-primary-100"
            >
              <span>{{ dog.name }}</span>
            </li>
          </ul>
        </div>
        <div class="small-dogs">
          <h2 class="text-lg font-bold mx-8 text-primary-80 inline-flex items-center">
            Small <ArrowRightIcon class="size-3 mx-1" />
          </h2>
          <ul class="grid grid-cols-1 text-sm text-neutral-60 mt-2.5">
            <li
              v-for="dog in dogs.small"
              :key="dog.name"
              class="rounded-lg bg-neutral-0 mx-8 leading-7 cursor-pointer hover:bg-primary-100"
            >
              <span>{{ dog.name }}</span>
            </li>
          </ul>
        </div>

        <div class="banner">
          <img src="@/assets/perikanan/adopthitler.svg" alt="Advertisement" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

const dogs = {
  popular: [
    { name: 'Buddy' },
    { name: 'Charlie' },
    { name: 'Max' },
    { name: 'Hitler' },
    { name: 'Lucy' },
    { name: 'Daisy' },
    { name: 'Rocky' },
    { name: 'Cooper' },
    { name: 'Bailey' },
    { name: 'Luna' },
    { name: 'Milo' },
    { name: 'Sadie' },
  ],
  small: [
    { name: 'Peanut' },
    { name: 'Gizmo' },
    { name: 'Mochi' },
    { name: 'Oreo' },
    { name: 'Teddy' },
    { name: 'Coco' },
  ],
  large: [
    { name: 'Zeus' },
    { name: 'Titan' },
    { name: 'Bear' },
    { name: 'Bruno' },
    { name: 'Duke' },
    { name: 'Thor' },
  ],
}
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
