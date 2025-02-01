<template>
  <div class="relative">
    <label v-if="inputProps.label" class="text-neutral-40 mb-2.5 block">{{
      inputProps.label
    }}</label>
    <div class="flex max-h-[48px] w-full items-center rounded-lg border border-[var(--neutral-40)]">
      <input
        :type="inputType"
        :placeholder="inputProps.placeholder"
        v-model="sanitizedInput"
        class="text-neutral-60 max-h-[48px] w-full max-w-[400px] rounded-lg px-6 py-3.5 focus:outline-none"
        :class="inputProps.rightIcon ? 'pr-4' : ''"
      />
      <component
        :is="currentIcon"
        class="text-neutral-60 mr-4 ml-2.5 size-6 h-6 w-6 cursor-pointer"
        v-if="showIcon"
        @click="togglePasswordVisibility"
      />
    </div>
    <div
      v-if="errorMessage"
      class="text-state-pink mt-2 inline-flex items-center text-xs"
      style="margin-top: 10px"
    >
      <ExclamationCircleIcon class="mr-1 size-4.5" /> {{ errorMessage }}
    </div>
    <div
      v-if="inputProps.desc"
      class="text-neutral-40 mt-2 max-h-[48px] w-full max-w-[400px] text-left text-xs break-words whitespace-normal"
      style="margin-top: 10px"
    >
      <span>{{ inputProps.desc }}</span>
    </div>
  </div>
</template>

<script setup>
import { ExclamationCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import { ref, computed, watch } from 'vue'

const inputProps = defineProps({
  rightIcon: Object,
  validator: String,
  desc: String,
  label: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
})

const inputValue = ref('')
const errorMessage = ref('')
const isPasswordVisible = ref(false)

const inputType = computed(() => {
  if (inputProps.type === 'password' && isPasswordVisible.value) {
    return 'text'
  }
  return inputProps.type
})

const currentIcon = computed(() => {
  if (inputProps.type === 'password') {
    return isPasswordVisible.value ? EyeIcon : EyeSlashIcon
  }
  return inputProps.rightIcon
})

const showIcon = computed(() => {
  return inputProps.type === 'password' || inputProps.rightIcon
})

const sanitizedInput = computed({
  get() {
    return inputValue.value.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  },
  set(value) {
    inputValue.value = value
  },
})

watch(inputValue, (newValue) => {
  if (!newValue) {
    errorMessage.value = inputProps.validator || 'This field is required'
  } else {
    errorMessage.value = ''
  }
})

function togglePasswordVisibility() {
  if (inputProps.type === 'password') {
    isPasswordVisible.value = !isPasswordVisible.value
  }
}
</script>
