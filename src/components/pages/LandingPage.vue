<template>
  <div class="hero object-contain">
    <div
      class="flex h-full min-h-[500px] w-full min-w-full flex-col overflow-x-clip rounded-b-[20px] md:h-full md:min-h-full lg:h-full lg:max-h-full lg:flex-row"
    >
      <div class="blob relative z-10">
        <div
          class="bg-secondary-100 blob1 absolute top-[-691px] left-[-250.83px] h-[635px] w-[635px] rotate-[-250.42deg] rounded-[61px]"
        ></div>
      </div>

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
        <p class="text-neutral-80 mt-3 w-3/4 text-xs leading-4 md:w-xs md:text-base md:leading-6">
          Having a pet means you have more joy, a new friend, a happy person who will always be with
          you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <div class="btn-group mt-8 flex gap-4">
          <ButtonBase class="size-auto" :right-icon="PlayCircleIcon" :intent="'text'">
            View Intro
          </ButtonBase>
          <ButtonBase class="size-auto" :intent="'primary'">Explore Now</ButtonBase>
        </div>
      </div>

      <div class="relative w-full md:w-1/2 lg:w-1/2">
        <img
          src="@/assets/perikanan/inu_group.png"
          alt="Group of dogs"
          class="w-full rounded-b-[20px] md:hidden"
        />
        <img
          src="@/assets/perikanan/inu_long.png"
          alt="Group of dogs"
          class="hidden lg:block lg:h-full lg:w-full lg:object-cover"
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
  z-index: 0;
}

.hero {
  background:
    url('../../assets/perikanan/accent.png') no-repeat bottom / contain,
    linear-gradient(to left, #fceed5, #fceed5, #ffe7ba);
}

@media (max-width: 768px) {
  .hero {
    background: linear-gradient(to left, #fceed5, #fceed5, #ffe7ba);
  }
}
</style>
