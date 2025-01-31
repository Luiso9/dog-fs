<template>
  <footer
    class="flex items-center justify-center mx-auto bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] w-screen h-full max-h-[440px]"
  >
    <div class="top_layer pt-20 pb-10">
      <div
        class="card-banner flex flex-row items-center justify-center bg-primary-100 rounded-2xl p-8"
      >
        <div class="group_1 w-[400px]">
          <span class="text-2xl font-bold text-neutral-0 antialiased text-left"
            >Register now so you don't miss our programs</span
          >
        </div>
        <div
          class="group_2 inline-flex items-center gap-3 max-w-[707px] max-h-[72px] bg-white p-3 rounded-[14px]"
        >
          <InputFields :placeholder="'Enter your email'" class="w-full h-full" />
          <ButtonBase class="rounded-lg w-full h-auto">Subscribe Now</ButtonBase>
        </div>
      </div>

      <div class="mid_l flex flex-row justify-between py-10 text-neutral-100 leading-6">
        <ul class="inline-flex items-center gap-10 text-base">
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul class="inline-flex items-center gap-10">
          <li><MoonIcon class="size-5" /></li>
          <li><MoonIcon class="size-5" /></li>
          <li><MoonIcon class="size-5" /></li>
          <li><MoonIcon class="size-5" /></li>
        </ul>
      </div>

      <hr class="text-neutral-60" />

      <div class="finale flex justify-between pt-10 w-full text-neutral-100 leading-6">
        <ul class="inline-flex gap-52 text-neutral-60 text-sm">
          <li>© 2022 Monito. All rights reserved.</li>
          <img src="@/assets/perikanan/frame.svg" alt="" />
          <li>Terms of Service <span class="ml-3"> Privacy Policy </span></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import InputFields from './InputFields.vue'
import ButtonBase from './ButtonBase.vue'
import { MoonIcon } from '@heroicons/vue/24/solid'
</script>
