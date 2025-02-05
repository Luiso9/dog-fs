<template>
  <footer
    class="mx-auto mt-16 flex h-full max-h-[440px] w-screen items-center justify-center bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]"
  >
    <div class="top_layer pt-20 pb-10">
      <div
        class="card-banner bg-primary-100 flex flex-row items-center justify-center rounded-2xl p-8"
      >
        <div class="group_1 w-[400px]">
          <span class="text-neutral-0 text-left text-2xl font-bold antialiased"
            >Register now so you don't miss our programs</span
          >
        </div>
        <div
          class="group_2 inline-flex max-h-[72px] max-w-[707px] items-center gap-3 rounded-[14px] bg-white p-3"
        >
          <InputFields :placeholder="'Enter your email'" class="h-full w-full" />
          <ButtonBase class="h-auto w-full rounded-lg">Subscribe Now</ButtonBase>
        </div>
      </div>

      <div class="mid_l flex flex-row justify-between py-10 leading-6 text-neutral-100">
        <ul class="inline-flex items-center gap-10 text-base">
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul class="inline-flex items-center gap-10">
          <li><FontAwesomeIcon :icon="faFacebook" /></li>
          <li><FontAwesomeIcon :icon="faTwitter" /></li>
          <li><FontAwesomeIcon :icon="faInstagram" /></li>
          <li><FontAwesomeIcon :icon="faYoutube" /></li>
        </ul>
      </div>

      <hr class="text-neutral-60" />

      <div class="finale flex w-full justify-between pt-10 leading-6 text-neutral-100">
        <ul class="text-neutral-60 inline-flex gap-52 text-sm">
          <li>© 2022 Monito. All rights reserved.</li>
          <img src="../../assets/perikanan/Frame.svg" alt="" />
          <li>Terms of Service <span class="ml-3"> Privacy Policy </span></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import InputFields from '../base/InputFields.vue'
import ButtonBase from '../base/ButtonBase.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
</script>
