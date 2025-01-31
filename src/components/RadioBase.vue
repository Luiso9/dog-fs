<template>
  <label class="flex items-center cursor-pointer gap-2">
    <div class="relative w-5 h-5">
      <input
        type="radio"
        :checked="radioProps.checked"
        :disabled="radioProps.disabled"
        @change="handleChange"
        class="peer absolute inset-0 w-full h-full appearance-none border-[1px] border-[#667479] rounded-full bg-transparent focus:outline-none focus:ring-0 checked:bg-[#003459] checked:border-[#003459] disabled:border-[#99a2a5] disabled:bg-[#ccd1d2]"
      />
      <div
        class="size-2.5 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden peer-checked:block pointer-events-none"
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
