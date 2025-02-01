<template>
  <div
    class="absolute right-0 left-0 mx-auto my-8 max-h-fit w-fit justify-center rounded-xl bg-white drop-shadow-lg"
  >
    <div class="container mx-auto">
      <div class="dog flex flex-row gap-16 px-10 py-[34px]">
        <div class="popul">
          <h2 class="text-primary-80 mx-8 inline-flex items-center text-lg font-bold">
            Popular <ArrowRightIcon class="mx-1 size-3" />
          </h2>
          <ul class="text-neutral-60 mt-2.5 grid grid-cols-2 text-sm">
            <li
              v-for="dog in dogs.popular"
              :key="dog"
              class="bg-neutral-0 hover:bg-primary-100 mx-8 cursor-pointer rounded-lg leading-7"
            >
              <span>{{ dog }}</span>
            </li>
          </ul>
        </div>
        <div class="large-dogs">
          <h2 class="text-primary-80 mx-8 inline-flex items-center text-lg font-bold">
            Large <ArrowRightIcon class="mx-1 size-3" />
          </h2>
          <ul class="text-neutral-60 mt-2.5 grid grid-cols-1 text-sm">
            <li
              v-for="dog in dogs.large"
              :key="dog"
              class="bg-neutral-0 hover:bg-primary-100 mx-8 cursor-pointer rounded-lg leading-7"
            >
              <span>{{ dog }}</span>
            </li>
          </ul>
        </div>
        <div class="small-dogs">
          <h2 class="text-primary-80 mx-8 inline-flex items-center text-lg font-bold">
            Small <ArrowRightIcon class="mx-1 size-3" />
          </h2>
          <ul class="text-neutral-60 mt-2.5 grid grid-cols-1 text-sm">
            <li
              v-for="dog in dogs.small"
              :key="dog"
              class="bg-neutral-0 hover:bg-primary-100 mx-8 cursor-pointer rounded-lg leading-7"
            >
              <span>{{ dog }}</span>
            </li>
          </ul>
        </div>

        <div class="banner">
          <img
            src="@/assets/perikanan/adopthitler.svg"
            alt="Advertisement"
            loading="lazy"
            class="w-auto sm:hidden"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import dogsData from '@/assets/perkapalan/dogs.js'

const dogs = {
  popular: dogsData.dogs
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 12)
    .map((dog) => dog.name),

  large: dogsData.dogs
    .filter((dog) => dog.breed === 'Large')
    .slice(0, 6)
    .map((dog) => dog.name),

  small: dogsData.dogs
    .filter((dog) => dog.breed === 'Small')
    .slice(0, 6)
    .map((dog) => dog.name),
}
</script>
