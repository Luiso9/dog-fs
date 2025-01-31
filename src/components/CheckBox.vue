<template>
  <label class="flex items-center cursor-pointer gap-2">
    <div class="relative w-5 h-5">
      <input
        type="checkbox"
        :checked="checkProps.checked"
        :disabled="checkProps.disabled"
        @change="handleChange"
        class="peer absolute inset-0 w-full h-full appearance-none border-[1px] border-[#667479] rounded-sm bg-transparent focus:outline-none focus:ring-0 checked:bg-[#003459] checked:border-[#003459] disabled:border-[#99a2a5] disabled:bg-[#ccd1d2]"
      />
      <CheckIcon
        class="size-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden peer-checked:block pointer-events-none"
      />
    </div>
    <span class="text-neutral-80" :class="{ 'text-neutral-60': checkProps.disabled }">
      <slot></slot>
    </span>
  </label>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'

// variations
const checkProps = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['change'])

const handleChange = (event) => {
  emit('change', event.target.checked)
}
</script>
