<template>
  <div class="mx-4 lg:container lg:mx-auto">
    <div class="heading mt-8 mb-5 flex flex-col items-start justify-center">
      <span>You already know ?</span>
      <h1 class="text-primary-100 text-2xl leading-8 font-bold">Useful Pet Knowledge</h1>
    </div>
    <div
      class="flex h-full w-auto flex-col items-center gap-3 overflow-hidden pb-2 md:grid md:grid-cols-3"
    >
      <CardBase
        :imageSrc="'https://picsum.photos/seed/4/300/200'"
        :title="'What is a Pomeranian? How to Identify Pomeranian Dogs'"
        :desc="'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.'"
        :width="'w-full'"
        :label="{ text: 'Pet Knowledge' }"
        class="w-full flex-1 flex-shrink-0"
      />
      <CardBase
        :imageSrc="'https://picsum.photos/seed/2/300/200'"
        :title="'Dog Diet You Need To Know'"
        :desc="'Dividing a dogs diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance. '"
        :width="'w-full'"
        :label="{ text: 'Pet Knowledge' }"
        class="w-full flex-1 flex-shrink-0"
      />
      <CardBase
        :imageSrc="'https://picsum.photos/seed/9/300/200'"
        :title="'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively'"
        :desc="'Dividing a dogs diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance. '"
        :label="{ text: 'Pet Knowledge' }"
        :width="'w-full'"
        class="w-full flex-1 flex-shrink-0"
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
import CardBase from '@/components/ui/CardBase.vue'
import ButtonBase from '../base/ButtonBase.vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
@media (min-width: 768px) {
  .hidden-on-large-screen {
    display: none;
  }
}
</style>
