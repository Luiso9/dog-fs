<template>
  <div class="mx-4 flex h-auto w-auto flex-col rounded-b-[20px] py-8 md:container md:mx-auto">
    <div
      class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]"
    >
      <img
        src="@/assets/perikanan/puppy.png"
        loading="lazy"
        alt="Dog in group"
        class="dog absolute hidden size-fit rounded-b-[16px] object-cover object-bottom lg:flex"
      />
      <div
        class="bg-primary-100 absolute bottom-[-120px] left-[600px] hidden size-[816px] rotate-[-155deg] rounded-[99px] md:block"
      ></div>
      <div
        class="heading text-primary-80 z-20 mx-4 flex flex-col items-start justify-start pt-8 md:px-4 md:py-4 lg:items-end"
      >
        <h1 class="text-5xl leading-[60px] font-extrabold lg:text-[#FDFDFD]">One More Friend</h1>

        <div class="inline-flex items-center">
          <h2 class="text-3xl leading-[38px] font-bold lg:text-[#FDFDFD]">Thousands More Fun!</h2>

          <div class="relative mx-2 lg:hidden">
            <div
              class="bg-secondary-100 absolute top-[-7.63px] left-[2.41px] h-[15.93px] w-[15.93px] rotate-[9.62deg] rounded-[4px] opacity-50"
            ></div>

            <div
              class="bg-primary-80 h-[12.44px] w-[12.44px] rotate-[30.59deg] rounded-[4px]"
            ></div>
          </div>
        </div>

        <p
          class="sm:text-neutral-80 pt-3 text-xs leading-4 md:w-sm md:leading-[18px] lg:text-right lg:text-[#FDFDFD]"
        >
          Having a pet means you have more joy, a new friend, a happy person who will always be with
          you to have fun. We have 200+ different pets that can meet your needs!
        </p>

        <div class="btn-group flex flex-row gap-4 pt-8 md:py-4 lg:hidden">
          <ButtonBase class="h-auto w-auto" :right-icon="PlayCircleIcon" :intent="'text'"
            >View Intro</ButtonBase
          >
          <ButtonBase class="h-auto w-auto" :intent="'primary'">Explore Now</ButtonBase>
        </div>
        <div class="btn-group hidden flex-row gap-4 pt-8 md:py-4 lg:flex">
          <ButtonBase
            class="text-neutral-0 h-auto w-auto"
            :right-icon="PlayCircleIcon"
            :intent="'text'"
            >View Intro</ButtonBase
          >
          <ButtonBase class="h-auto w-auto" :intent="'primary'">Explore Now</ButtonBase>
        </div>
      </div>
      <div class="inu mx-0 h-full w-full px-0">
        <img
          src="@/assets/perikanan/Group3.png"
          loading="lazy"
          alt="Dog in group"
          class="h-full w-full rounded-b-[16px] md:hidden"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonBase from '../base/ButtonBase.vue'
import { PlayCircleIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
h1,
h2,
p,
.dog,
ButtonBase,
.btn-group {
  z-index: 22;
}
</style>
