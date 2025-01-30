<template>
  <div
    class="max-w-[378px] h-auto bg-neutral-0 p-2 drop-shadow-lg rounded-xl flex justify-center flex-col"
  >
    <img
      class="w-66 h-66 object-cover rounded-xl mb-2"
      :src="cardProps.imageSrc"
      :alt="cardProps.imageAlt"
    />
    <div class="flex flex-col gap-1 pt-2 px-2">
      <h1 class="text-lg font-[Gilroy-Bold] text-start px-2">{{ cardProps.title }}</h1>
      <div class="flex flex-row gap-2 text-neutral-60 px-2">
        <span>
          Gender:
          <span class="font-[Gilroy-Bold]">{{ cardProps.gender }}</span>
        </span>
        <span>•</span>
        <span>
          Age:
          <span class="font-[Gilroy-Bold]">{{ cardProps.age }}</span>
        </span>
      </div>
      <div class="text-base font-[Gilroy-Bold] text-neutral-100 px-2 pb-5 ">{{ cardProps.price }}</div>
      <div v-if="cardProps.label" class="flex items-center bg-secondary-40 rounded-lg text-neutral-100 px-2.5 py-2.5 w-full">
        <component class="size-5 mr-2" :is="cardProps.label.icon"></component>
        <span class="mr-2">•</span>
        <span class="text-sm font-[Gilroy-Bold]">{{ cardProps.label.text }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
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
      return value === null || (typeof value.icon === 'string' && typeof value.text === 'string');
    }
  }
})
</script>
