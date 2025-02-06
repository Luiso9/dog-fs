<template>
  <div
    :class="[
      'bg-neutral-0 max-h-lg z-10 flex h-full flex-col justify-center rounded-xl p-2 drop-shadow-lg',
      widthClass,
    ]"
  >
    <img
      class="h-[200px] w-auto rounded-xl object-cover"
      :src="cardProps.imageSrc"
      loading="lazy"
      :alt="cardProps.imageAlt"
    />
    <div class="flex flex-col gap-1 p-2 pt-2">
      <div
        v-if="cardProps.label"
        class="bg-state-blue flex h-auto w-fit items-center rounded-full text-neutral-100"
      >
        <span class="title text-neutral-0 px-2.5 py-0.5 text-xs">{{
          cardProps.label.text
        }}</span>
      </div>
      <h1 class="text-start font-bold line-clamp-1 text-lg">{{ cardProps.title }}</h1>
      <div class="flex flex-col gap-2 text-base text-neutral-100 md:flex-row lg:flex-row">
        <span class="description line-clamp-4">{{ cardProps.desc }}</span>
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
  desc: String,
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
