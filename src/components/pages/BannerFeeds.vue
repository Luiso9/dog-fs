<template>
  <div
    class="banner bg-primary-100 relative z-20 mx-4 my-8 flex h-full max-h-[640px] w-fit flex-col items-center justify-center rounded-[20px]"
  >
    <div class="pretext text-primary-80 px-6 pt-8 text-center">
      <h2 class="text-4xl leading-14 font-bold">One More Friend</h2>
      <h3 class="text-base leading-9 font-bold">Thousands More Fun!</h3>
      <p class="text-xs">
        Having a pet means you have more joy, a new friend, a happy person who will always be with
        you to have fun. We have 200+ different pets that can meet your needs!
      </p>
    </div>
    <div class="btn-group flex flex-row pt-8">
      <ButtonBase class="h-auto w-auto text-white" :right-icon="PlayCircleIcon" :intent="'text'"
        >View Intro</ButtonBase
      >
      <ButtonBase class="h-auto w-auto" :intent="'primary'">Explore Now</ButtonBase>
    </div>
    <img
      src="@/assets/perikanan/horizontal-shot-adult-girl-jeans-overalls-kissing-cute-puppy-while-raising-it-air-young-girl-being-love-with-her-dog-clothed-trendy-jumper-display-affection 3.png"
      alt="Women holding a puppy"
      class="woman"
    />
  </div>
</template>

<script setup>
import { PlayCircleIcon } from '@heroicons/vue/24/outline'
import ButtonBase from '../base/ButtonBase.vue'
</script>

<style scoped>
.banner {
  background-image: url('@/assets/perikanan/accent.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-user-drag: none;
  user-select: none;
}

.woman {
  -webkit-user-drag: none;
  user-select: none;
}
</style>
