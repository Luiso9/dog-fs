<template>
  <div class="container mx-auto">
    <div class="heading mt-8 mb-5 flex flex-row justify-between">
      <div class="inline-flex items-end gap-2">
        <span>Proud to be part of</span>
        <h1 class="text-primary-100 text-2xl leading-8 font-bold">Pet Sellers</h1>
      </div>

      <ButtonBase :right-icon="ChevronRightIcon" :intent="'text'" class="w-auto">
        View all our sellers
      </ButtonBase>
    </div>

    <div class="renten pb-6">
      <ol class="flex flex-row gap-5 justify-around">
        <li><img src="https://placehold.co/150x150" alt=""></li>
        <li><img src="https://placehold.co/150x150" alt=""></li>
        <li><img src="https://placehold.co/150x150" alt=""></li>
        <li><img src="https://placehold.co/150x150" alt=""></li>
        <li><img src="https://placehold.co/150x150" alt=""></li>
        <li><img src="https://placehold.co/150x150" alt=""></li>
        <li><img src="https://placehold.co/150x150" alt=""></li>
      </ol>
    </div>

    <div
      class="banner relative z-20 my-8 flex h-auto max-h-[640px] w-auto flex-col items-center justify-center rounded-[20px] bg-[#FFB775] md:flex-row md:items-center md:justify-around lg:justify-around"
    >
      <div class="flex w-fit flex-col px-5 py-0 lg:w-1/2">
        <div class="text-primary-80 py-8 text-left">
          <h2 class="text-5xl font-extrabold">Adoption 🐾</h2>
          <h3 class="text-4xl font-bold">We need help. so do they.</h3>
          <p class="pt-3 text-left text-xs">
            Adopt a pet and give it a home, it will be love you back unconditionally.
          </p>
        </div>

        <div class="btn-group flex gap-4 lg:pt-6">
          <ButtonBase intent="primary">Explore Now</ButtonBase>
          <ButtonBase class="text-white" :right-icon="PlayCircleIcon" intent="text"
            >View Intro</ButtonBase
          >
        </div>
      </div>

      <!-- Image -->
      <img src="@/assets/perikanan/hand_ad.png" alt="Woman holding a puppy" class="woman" />
    </div>
  </div>
</template>

<script setup>
import { ChevronRightIcon, PlayCircleIcon } from '@heroicons/vue/24/outline'
import ButtonBase from '../base/ButtonBase.vue'
</script>

<style scoped>
.banner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-user-drag: none;
  user-select: none;
}

@media (max-width: 768px) {
  .banner {
    background-image: url('@/assets/perikanan/accent.svg');
  }
}

@media (min-width: 768px) {
  .banner {
    background-image: url('@/assets/perikanan/banner_ad.png');
  }
}

/* Prevent dragging the image */
.woman {
  -webkit-user-drag: none;
  user-select: none;
}
</style>
