<template>
  <div class="fixed top-15 left-30 mx-auto my-8 w-fit rounded-xl bg-white shadow-lg">
    <div class="container mx-auto">
      <div class="dog flex flex-row gap-16 px-10 py-[34px]">
        <div class="popul">
          <h2 class="text-primary-80 mx-8 inline-flex items-center text-lg font-bold">
            Popular <ArrowRightIcon class="mx-1 size-3" />
          </h2>
          <ul class="text-neutral-60 mt-2.5 grid grid-cols-2 text-sm">
            <li
              v-for="dog in popularDogs"
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
              v-for="dog in largeDogs"
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
              v-for="dog in smallDogs"
              :key="dog"
              class="bg-neutral-0 hover:bg-primary-100 mx-8 cursor-pointer rounded-lg leading-7"
            >
              <span>{{ dog }}</span>
            </li>
          </ul>
        </div>
        <img
          src="@/assets/perikanan/adopthitler.svg"
          alt="Advertisement"
          loading="lazy"
          class="w-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import dogsData from '@/assets/perkapalan/dogs.js'

const popularDogs = computed(() =>
  dogsData.dogs
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 12)
    .map((dog) => dog.name),
)

const largeDogs = computed(() =>
  dogsData.dogs
    .filter((dog) => dog.breed === 'Large')
    .slice(0, 6)
    .map((dog) => dog.name),
)

const smallDogs = computed(() =>
  dogsData.dogs
    .filter((dog) => dog.breed === 'Small')
    .slice(0, 6)
    .map((dog) => dog.name),
)
</script>
