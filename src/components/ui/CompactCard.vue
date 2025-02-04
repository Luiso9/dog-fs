<template>
  <div
    :class="[
      'bg-neutral-0 flex h-auto flex-col justify-center rounded-xl p-2 drop-shadow-md',
      widthClass,
    ]"
  >
    <img
      class="mb-2 h-auto w-auto rounded-xl object-cover"
      :src="cardProps.imageSrc"
      :alt="cardProps.imageAlt"
    />
    <div class="flex flex-col gap-1 pt-2">
      <h1 class="px-2 text-start font-[Gilroy-Bold] text-lg">{{ cardProps.title }}</h1>
      <div class="text-neutral-60 flex flex-col gap-2 px-2 md:flex-row lg:flex-row">
        <span class="text-xs">
          Gene:
          <span class="font-[Gilroy-Bold]">{{ cardProps.gender }}</span>
        </span>
        <span class="text-xs">
          Age:
          <span class="font-[Gilroy-Bold]">{{ cardProps.age }}</span>
        </span>
      </div>
      <div class="px-2 pt-2 font-[Gilroy-Bold] text-base text-neutral-100 md:pb-5 lg:pb-5">
        {{ cardProps.price }}
      </div>
      <div
        v-if="cardProps.label"
        class="bg-secondary-40 flex w-auto items-center rounded-lg px-2.5 py-2.5 text-neutral-100"
      >
        <img src="../../assets/perikanan/gift.svg" alt="Gift Icon" />
        <span class="mx-2">•</span>
        <span class="font-[Gilroy-Bold] text-sm">{{ cardProps.label.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const cardProps = defineProps({
  imageSrc: String,
  imageAlt: String,
  title: String,
  gender: String,
  age: String,
  price: String,
  label: {
    type: Object,
    default: null,
    validator: (value) => {
      return value === null || (typeof value.icon === 'string' && typeof value.text === 'string')
    },
  },
  width: {
    type: String,
    default: 'max-w-fit',
  },
})

const widthClass = computed(() => cardProps.width)
</script>
