<template>
  <div class="mx-4">
    <div class="heading mt-8 mb-5 flex flex-col items-start justify-center">
      <span>Whats new?</span>
      <h1 class="text-primary-100 text-2xl leading-8 font-bold">Take a look at some of our pets</h1>
    </div>
    <div
      class="mx-auto grid grid-cols-2 place-items-center items-center gap-3 overflow-x-hidden pb-2"
    >
      <CompactCard
        v-for="dog in dogs.slice(0, 4)"
        :key="dog.name"
        :imageSrc="dog.image"
        :imageAlt="dog.name"
        :title="dog.name"
        :gender="dog.gender"
        :age="'02 months'"
        :price="`$${dog.price}`"
      />
      <CompactCard
        v-for="dog in dogs.slice(4, 8)"
        :key="dog.name"
        :imageSrc="dog.image"
        :imageAlt="dog.name"
        :title="dog.name"
        :gender="dog.gender"
        :age="'2 years'"
        :price="`$${dog.price}`"
      />
    </div>
    <ButtonBase :right-icon="ArrowLongRightIcon" :intent="'text'" class="mx-auto my-2 w-full"
      >View More</ButtonBase
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dogsData from '@/assets/perkapalan/dogs.js'
import CompactCard from '@/components/ui/CompactCard.vue'
import ButtonBase from '../base/ButtonBase.vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const dogs = ref(dogsData.dogs)
</script>
