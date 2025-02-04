<template>
  <div class="mx-4 lg:container lg:mx-auto">
    <div class="heading mt-8 mb-5 flex flex-col items-start justify-center">
      <span>You already know ?</span>
      <h1 class="text-primary-100 text-2xl leading-8 font-bold">Useful Pet Knowledge</h1>
    </div>
    <div
      class="flex h-full w-auto flex-col items-center gap-3 overflow-hidden pb-2 lg:flex lg:min-w-full lg:flex-row"
    >
      <CardBase
        v-for="dog in displayedDogs"
        :key="dog.name"
        :imageSrc="'https://placehold.co/300x200'"
        :imageAlt="dog.name"
        :title="'What is a Pomeranian? How to Identify Pomeranian Dogs'"
        :desc="'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.'"
        :width="'w-full'"
        :label="{ text: 'Pet Knowledge' }"
      />
    </div>
    <ButtonBase
      :right-icon="ArrowLongRightIcon"
      :intent="'text'"
      class="hidden-on-large-screen mx-auto mt-5 mb-10 w-full"
      >View More</ButtonBase
    >
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import dogsData from '@/assets/perkapalan/dogs.js'
import CardBase from '@/components/ui/CardBase.vue'
import ButtonBase from '../base/ButtonBase.vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const dogs = ref(dogsData.dogs)

const displayedDogs = computed(() => {
  if (window.innerWidth >= 768) {
    return dogs.value.slice(0, 4)
  } else {
    return dogs.value.slice(0, 3)
  }
})
console.log(displayedDogs)
</script>

<style scoped>
@media (min-width: 768px) {
  .hidden-on-large-screen {
    display: none;
  }
}
</style>
