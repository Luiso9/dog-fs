<template>
  <div class="relative">
    <label v-if="label" class="text-neutral-40 mb-2.5 block">{{ label }}</label>
    <div class="flex max-h-[48px] w-full items-center rounded-lg border-b-2 border-b-[#EBEEEF]">
      <input
        type="number"
        placeholder="Min"
        v-model.number="minPrice"
        class="text-neutral-60 max-h-[48px] w-1/2 max-w-[200px] rounded-lg px-6 py-3.5 focus:outline-none"
      />
      <span class="text-neutral-60 mx-2"></span>
      <input
        type="number"
        placeholder="Max"
        v-model.number="maxPrice"
        class="text-neutral-60 max-h-[48px] w-1/2 max-w-[200px] rounded-lg px-6 py-3.5 focus:outline-none"
      />
    </div>

    <div v-if="errorMessage" class="text-state-pink mt-2 inline-flex items-center text-xs">
      <ExclamationCircleIcon class="mr-1 size-4.5" /> {{ errorMessage }}
    </div>

    <div
      v-if="desc"
      class="text-neutral-40 mt-2 max-h-[48px] w-full max-w-[400px] text-left text-xs break-words whitespace-normal"
    >
      <span>{{ desc }}</span>
    </div>
  </div>
</template>

<script setup>
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: Object,
  label: String,
  desc: String,
})

const emit = defineEmits(['update:modelValue'])

const minPrice = ref(props.modelValue?.min ?? null)
const maxPrice = ref(props.modelValue?.max ?? null)
const errorMessage = ref('')

watch([minPrice, maxPrice], () => {
  if (minPrice.value !== null && maxPrice.value !== null && minPrice.value > maxPrice.value) {
    errorMessage.value = 'Min price cannot be greater than max price'
  } else {
    errorMessage.value = ''
    emit('update:modelValue', { min: minPrice.value, max: maxPrice.value })
  }
})
</script>
