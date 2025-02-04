<template>
  <div class="hero">
    <div
      class="bg-secondary-100 blob absolute top-[-691px] left-[-250.83px] h-[635px] w-[635px] rotate-[-250.42deg] rounded-[61px]"
    ></div>

    <div
      class="relative flex h-full min-h-[500px] w-full min-w-full flex-col overflow-hidden rounded-b-[20px] md:h-full md:min-h-full lg:h-full lg:min-h-[695px] lg:flex-row"
    >
      <!-- Blob -->
      <div
        class="bg-primary-100 blob2 absolute top-[355px] left-[710px] min-h-[635px] min-w-[635px] rotate-[9.33deg] rounded-[99px]"
      ></div>
      <div
        class="bg-secondary-100 blob2 absolute top-[320px] left-[755px] min-h-[635px] min-w-[635px] rotate-[23.23deg] rounded-[99px]"
      ></div>
      <div
        class="bg-secondary-100 blob2 absolute top-[695px] left-[55px] min-h-[635px] min-w-[635px] rotate-[-33.23deg] rounded-[99px]"
      ></div>

      <!-- me -->
      <div class="flex flex-col justify-center px-4 py-10 md:w-1/2 md:px-8 lg:w-1/2 lg:px-12">
        <h1 class="text-primary-80 text-5xl leading-[56px] font-extrabold md:text-6xl">
          One More Friend
        </h1>
        <div class="mt-4 inline-flex items-center">
          <h2 class="text-2xl leading-[36px] font-bold md:text-3xl">Thousands More Fun!</h2>
          <div class="relative mx-2">
            <div
              class="bg-secondary-100 absolute top-[-7.63px] left-[2.41px] h-[15.93px] w-[15.93px] rotate-[9.62deg] rounded-[4px] opacity-50"
            ></div>
            <div
              class="bg-primary-80 h-[12.44px] w-[12.44px] rotate-[30.59deg] rounded-[4px]"
            ></div>
          </div>
        </div>
        <p class="text-neutral-80 mt-3 w-3/4 text-xs leading-4 md:w-full md:text-base md:leading-6">
          Having a pet means you have more joy, a new friend, a happy person who will always be with
          you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <div class="btn-group mt-8 flex gap-4">
          <ButtonBase class="h-auto w-auto" :right-icon="PlayCircleIcon" :intent="'text'">
            View Intro
          </ButtonBase>
          <ButtonBase class="h-auto w-auto" :intent="'primary'">Explore Now</ButtonBase>
        </div>
      </div>

      <div class="relative w-full md:w-1/2 lg:w-1/2">
        <img
          src="@/assets/perikanan/inu_group.png"
          alt="Dog in group"
          class="w-full rounded-b-[20px] md:hidden"
        />
        <img
          src="@/assets/perikanan/good-humored-woman-holds-dog-laughing-pink-background-emotional-sort-haired-girl-grey-hoodie-poses-with-corgi-isolated 1.png"
          alt="Dog in group"
          class="hidden md:hidden lg:block lg:h-full lg:w-full lg:object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonBase from '../base/ButtonBase.vue'
import { PlayCircleIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
.blob {
  overflow: visible;
  z-index: 1;
}

.blob {
  overflow: hidden;
  z-index: 1;
}

.hero {
  background: linear-gradient(to left, #fceed5, #fceed5, #ffe7ba);
  position: relative;
  z-index: 0;
}

@media (max-width: 768px) {
  .hero {
    background: linear-gradient(to left, #fceed5, #fceed5, #ffe7ba);
  }
}
</style>
