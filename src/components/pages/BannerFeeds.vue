<template>
  <div class="lg:container lg:mx-auto mx-4">
    <div
      class="banner bg-primary-100 relative z-20 my-8 flex h-auto max-h-[640px] w-auto flex-col items-center justify-center rounded-[20px] md:flex-row-reverse md:items-center md:justify-around lg:justify-around"
    >
      <!-- Text Content -->
      <div class="flex w-fit flex-col items-center px-5 py-0 lg:w-1/2">
        <div class="text-primary-80 py-8 text-center md:text-right lg:py-0">
          <h2 class="text-4xl font-bold md:text-5xl md:font-extrabold">One More Friend</h2>
          <h3 class="text-base font-bold">Thousands More Fun!</h3>
          <p class="pt-3 text-center text-xs md:max-w-96 md:text-right">
            Having a pet means you have more joy, a new friend, a happy person who will always be
            with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
        </div>

        <!-- Buttons -->
        <div class="btn-group flex gap-4 lg:pt-6">
          <ButtonBase class="text-white" :right-icon="PlayCircleIcon" intent="text"
            >View Intro</ButtonBase
          >
          <ButtonBase intent="primary">Explore Now</ButtonBase>
        </div>
      </div>

      <!-- Image -->
      <img
        src="@/assets/perikanan/horizontal-shot-adult-girl-jeans-overalls-kissing-cute-puppy-while-raising-it-air-young-girl-being-love-with-her-dog-clothed-trendy-jumper-display-affection 3.png"
        alt="Woman holding a puppy"
        class="woman"
      />
    </div>
  </div>
</template>

<script setup>
import { PlayCircleIcon } from '@heroicons/vue/24/outline'
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
    background-image: url('@/assets/perikanan/banner_accent.png');
  }
}

/* Prevent dragging the image */
.woman {
  -webkit-user-drag: none;
  user-select: none;
}
</style>
