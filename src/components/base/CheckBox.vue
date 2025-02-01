<template>
  <label class="flex cursor-pointer items-center gap-2">
    <div class="relative h-5 w-5">
      <input
        type="checkbox"
        :checked="checkProps.checked"
        :disabled="checkProps.disabled"
        @change="handleChange"
        class="peer absolute inset-0 h-full w-full appearance-none rounded-sm border-[1px] border-[#667479] bg-transparent checked:border-[#003459] checked:bg-[#003459] focus:ring-0 focus:outline-none disabled:border-[#99a2a5] disabled:bg-[#ccd1d2]"
      />
      <CheckIcon
        class="pointer-events-none absolute top-1/2 left-1/2 hidden size-4 -translate-x-1/2 -translate-y-1/2 transform text-white peer-checked:block"
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
