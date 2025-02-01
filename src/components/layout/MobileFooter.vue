<template>
  <footer>
    <div class="mx-auto h-auto w-auto bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]">
      <div class="top_layer flex flex-col items-center justify-center px-2 pt-10">
        <div class="card-banner bg-primary-100 max-w-96 rounded-2xl p-4">
          <div class="group_1 pb-4">
            <span class="text-neutral-0 text-left text-xl font-bold antialiased"
              >Register now so you don't miss our programs</span
            >
          </div>
          <div class="group_2 flex flex-col items-center gap-y-3 rounded-[14px] bg-white p-3">
            <InputFields :placeholder="'Enter your email'" class="h-full w-full" />
            <ButtonBase class="h-auto rounded-lg">Subscribe Now</ButtonBase>
          </div>
        </div>

        <div class="mid_l flex flex-col justify-center gap-y-5 py-10 leading-6 text-neutral-100">
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

        <div
          class="finale flex w-full flex-col items-center justify-center pt-10 leading-6 text-neutral-100"
        >
          <ul class="text-neutral-60 flex flex-col items-center justify-center text-sm">
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
import ButtonBase from '../base/ButtonBase.vue'
import { MoonIcon } from '@heroicons/vue/24/solid'
import InputFields from '../base/InputFields.vue'
</script>
