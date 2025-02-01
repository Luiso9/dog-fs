<template>
  <div
    class="relative z-10 mx-auto flex h-full min-h-[500px] w-full min-w-full flex-col overflow-x-clip rounded-b-[20px] bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]"
  >
    <div
      class="bg-secondary-100 absolute top-[-691px] left-[-250.83px] z-20 h-[635px] w-[635px] rotate-[-250.42deg] rounded-[61px]"
    ></div>

    <div class="heading text-primary-80 mx-4 flex flex-col items-start justify-start pt-10">
      <h1 class="text-5xl leading-[56px] font-extrabold">One More Friend</h1>
      <div class="inline-flex items-center">
        <h2 class="text-2xl leading-[36px] font-bold">Thousands More Fun!</h2>

        <div class="relative mx-2">
          <div
            class="bg-secondary-100 absolute top-[-7.63px] left-[2.41px] h-[15.93px] w-[15.93px] rotate-[9.62deg] rounded-[4px] opacity-50"
          ></div>

          <div class="bg-primary-80 h-[12.44px] w-[12.44px] rotate-[30.59deg] rounded-[4px]"></div>
        </div>
      </div>
      <p class="text-neutral-80 pt-3 text-xs leading-4">
        Having a pet means you have more joy, a new friend, a happy person who will always be with
        you to have fun. We have 200+ different pets that can meet your needs!
      </p>
      <div class="btn-group flex flex-row gap-4 pt-8">
        <ButtonBase class="h-auto w-auto" :right-icon="PlayCircleIcon" :intent="'text'"
          >View Intro</ButtonBase
        >
        <ButtonBase class="h-auto w-auto" :intent="'primary'">Explore Now</ButtonBase>
      </div>
    </div>
    <div class="inu mx-0 w-full px-0">
      <img
        src="@/assets/perikanan/inu_group.png"
        alt="Dog in group"
        class="w-full rounded-b-[20px] md:hidden"
      />
    </div>
  </div>

</template>

<script setup>
import ButtonBase from '../base/ButtonBase.vue'
import { PlayCircleIcon } from '@heroicons/vue/24/outline'
</script>
