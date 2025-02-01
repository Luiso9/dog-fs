<template>
  <label class="flex cursor-pointer items-center gap-2">
    <div class="relative h-5 w-5">
      <input
        type="radio"
        :checked="radioProps.checked"
        :disabled="radioProps.disabled"
        @change="handleChange"
        class="peer absolute inset-0 h-full w-full appearance-none rounded-full border-[1px] border-[#667479] bg-transparent checked:border-[#003459] checked:bg-[#003459] focus:ring-0 focus:outline-none disabled:border-[#99a2a5] disabled:bg-[#ccd1d2]"
      />
      <div
        class="pointer-events-none absolute top-1/2 left-1/2 hidden size-2.5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white peer-checked:block"
      ></div>
    </div>
    <span class="text-neutral-80" :class="{ 'text-neutral-60': radioProps.disabled }">
      <slot></slot>
    </span>
  </label>
</template>

<script setup>
const radioProps = defineProps({
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
