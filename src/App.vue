<script setup>
import { RouterView } from 'vue-router'
import CompactCard from './components/CompactCard.vue'
import { GiftIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <main class="flex flex-col items-center justify-center gap-8 h-screen">
    <CompactCard
      imageSrc="https://media.discordapp.net/attachments/809988356611112980/1334532665503780885/image_2.png?ex=679cdfe5&is=679b8e65&hm=41848d435c058f535f9802612df9d89ea40cb177647bf8475b24445168380899&=&width=211&height=211"
      imageAlt="Image description"
      title="MO231 - Pomeranian White"
      gender="Male"
      age="02 Months"
      price="$1,200"
    />
    <CompactCard
      imageSrc="https://media.discordapp.net/attachments/809988356611112980/1334532665503780885/image_2.png?ex=679cdfe5&is=679b8e65&hm=41848d435c058f535f9802612df9d89ea40cb177647bf8475b24445168380899&=&width=211&height=211"
      imageAlt="Image description"
      title="MO231 - Pomeranian White"
      gender="Male"
      age="02 Months"
      price="$1,200"
      :label="{ icon: GiftIcon, text: 'Free Shipping' }"
    />
  </main>
  <RouterView />
</template>
