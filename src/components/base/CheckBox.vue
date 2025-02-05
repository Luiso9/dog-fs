<template>
  <label class="inline-flex cursor-pointer items-center gap-2 text-sm">
    <div class="relative h-5 w-5">
      <input
      type="checkbox"
      :checked="modelValue === value"
      :disabled="disabled"
      @change="handleChange"
      class="peer absolute inset-0 h-full w-full appearance-none rounded-sm border-[1px] border-[#CCD1D2] bg-transparent checked:border-[#003459] checked:bg-[#003459] focus:ring-0 focus:outline-none disabled:border-[#99a2a5] disabled:bg-[#ccd1d2]"
      />
      <CheckIcon
      class="pointer-events-none absolute top-1/2 left-1/2 hidden size-4 -translate-x-1/2 -translate-y-1/2 transform text-white peer-checked:block"
      />
    </div>
    <div
      v-if="!hidden"
      :class="bgColor"
      class="h-5 w-5 rounded-full transition-all duration-200"
    ></div>
    <span class="text-neutral-80" :class="{ 'text-neutral-60': disabled }">
      <slot></slot>
    </span>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { CheckIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: String,
    default: 'bg-red-200',
  },
  hidden: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const handleChange = () => {
  emit('update:modelValue', props.modelValue === props.value ? '' : props.value)
}
</script>
