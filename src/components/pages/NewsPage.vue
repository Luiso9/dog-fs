<template>
  <div class="mx-4">
    <div class="heading mt-8 mb-5 flex flex-col items-start justify-center">
      <span>You already know ?</span>
      <h1 class="text-primary-100 text-2xl leading-8 font-bold">Useful Pet Knowledge</h1>
    </div>
    <div class="grid grid-cols-1 place-items-center items-center gap-3 overflow-x-hidden pb-2">
      <CardBase
        v-for="dog in dogs.slice(0, 4)"
        :key="dog.name"
        :imageSrc="'https://media.discordapp.net/attachments/1139151633624862810/1335171309537198100/image.png?ex=679f32ae&is=679de12e&hm=d52d4cf236708304247fa99470b76834ccbc776f0fed038121a6fb539aeec140&=&width=585&height=384'"
        :imageAlt="dog.name"
        :title="'What is a Pomeranian? How to Identify Pomeranian Dogs'"
        :desc="'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.'"
        :width="'w-full'"
        :label="{ text: 'Pet Knowledge' }"
      />
    </div>
    <ButtonBase :right-icon="ArrowLongRightIcon" :intent="'text'" class="mx-auto mt-5 mb-10 w-full"
      >View More</ButtonBase
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dogsData from '@/assets/perkapalan/dogs.js'
import CardBase from '@/components/ui/CardBase.vue'
import ButtonBase from '../base/ButtonBase.vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const dogs = ref(dogsData.dogs)
</script>
