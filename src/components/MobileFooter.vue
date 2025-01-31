<template>
  <footer>
    <div
      class="h-auto w-auto mx-auto bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]"
    >
      <div class="top_layer pt-10 flex flex-col justify-center items-center">
        <div class="card-banner max-w-96 bg-primary-100 rounded-2xl p-4">
          <div class="group_1 pb-4">
            <span class="text-xl font-bold text-neutral-0 antialiased text-left"
              >Register now so you don't miss our programs</span
            >
          </div>
          <div class="group_2 flex flex-col gap-y-3 items-center bg-white rounded-[14px] p-3">
            <InputFields :placeholder="'Enter your email'" class="w-full h-full" />
            <ButtonBase class="rounded-lg  h-auto">Subscribe Now</ButtonBase>
          </div>
        </div>

        <div class="mid_l flex flex-col justify-center py-10 gap-y-5 text-neutral-100 leading-6">
          <ul class="inline-flex items-center gap-10 text-base">
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul class="inline-flex items-center justify-center gap-10">
            <li><MoonIcon class="size-5" /></li>
            <li><MoonIcon class="size-5" /></li>
            <li><MoonIcon class="size-5" /></li>
            <li><MoonIcon class="size-5" /></li>
          </ul>
        </div>

        <hr class="text-neutral-60" />

        <div class="finale flex flex-col justify-center items-center pt-10 w-full text-neutral-100 leading-6">
        <ul class="flex flex-col justify-center items-center text-neutral-60 text-sm">
          <img src="@/assets/perikanan/frame.svg" alt="Logo" class="w-32" />
          <li class="pt-8 pb-2">Terms of Service <span> Privacy Policy </span></li>
          <li class="pb-5">© 2022 Monito. All rights reserved.</li>
        </ul>
      </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import InputFields from './InputFields.vue'
import ButtonBase from './ButtonBase.vue'
import { MoonIcon } from '@heroicons/vue/24/solid'
</script>
