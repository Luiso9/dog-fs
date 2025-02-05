<template>
  <div class="bg-neutral-0 mx-4 md:container lg:container lg:mx-auto">
    <div
      class="heading mt-8 mb-5 flex flex-col items-start justify-center sm:flex lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="flex-1 flex-col flex-wrap">
        <span>Whats new?</span>
        <h1 class="text-primary-100 text-2xl leading-8 font-bold">
          Take a look at some of our pets
        </h1>
      </div>

      <ButtonBase
        :right-icon="ArrowLongRightIcon"
        :intent="'text'"
        class="hidden-on-small-screen mx-auto w-auto lg:flex"
      >
        View More
      </ButtonBase>
    </div>

    <div
      class="mx-auto grid grid-cols-2 place-items-center items-center gap-3 overflow-hidden pb-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-7"
    >
      <CompactCard
        v-for="dog in dogs.slice(0, 4)"
        :key="dog.name"
        :imageSrc="dog.image || placeholderImage"
        :imageAlt="dog.name"
        :title="dog.name"
        :gender="dog.gender"
        :age="'02 months'"
        :price="`$${dog.price}`"
      />
      <CompactCard
        v-for="dog in dogs.slice(4, 8)"
        :key="dog.name"
        :imageSrc="dog.image || placeholderImage"
        :imageAlt="dog.name"
        :title="dog.name"
        :gender="dog.gender"
        :age="'2 years'"
        :price="`$${dog.price}`"
      />
    </div>
    <div class="md:hidden lg:hidden">
      <ButtonBase
        :right-icon="ArrowLongRightIcon"
        :intent="'text'"
        class="mx-auto my-2 w-full"
        :hidden="true"
      >
        View More
      </ButtonBase>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dogsData from '@/assets/perkapalan/dogs.js'
import CompactCard from '@/components/ui/CompactCard.vue'
import ButtonBase from '../base/ButtonBase.vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const placeholderImage = 'https://picsum.photos/seed/dogs/500/500'

const dogs = ref(dogsData.dogs)
</script>

<style>
@media (max-width: 768px) {
  .hidden-on-small-screen {
    display: none;
  }
}
</style>
