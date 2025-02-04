<template>
  <div class="" ref="dropdownRef">
    <div class="dropdown relative inline-block">
      <button
        class="flex w-auto cursor-pointer items-center justify-around rounded-full py-2 pr-3 pl-4 focus:border-[#00A7E7]"
        @click="toggleDropdown"
        :class="borderClass"
      >
        <span class="truncate">{{ selectedLabel }}</span>
        <component
          :is="isOpen ? ChevronUpIcon : ChevronDownIcon"
          class="mx-1 size-3 font-bold transition-transform duration-200"
        />
      </button>

      <ul
        v-if="isOpen"
        class="dropdown-menu absolute z-50 mt-1.5 w-full max-w-96 rounded-2xl border-[1px] border-[#CCD1D2] bg-white text-sm shadow-lg"
      >
        <li
          v-for="option in options"
          :key="option.value"
          class="cursor-pointer pt-2.5 pb-2 pl-5 first:rounded-t-2xl last:rounded-b-2xl hover:bg-[#EBEEEF] hover:text-[#00171f]"
          :class="{ 'bg-primary-100 text-neutral-0': option.value === selected }"
          @click="selectOption(option)"
        >
          <span v-html="option.label"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
  selected: {
    type: String,
    default: '',
  },
  border: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:selected', 'change'])

const isOpen = ref(false)
const dropdownRef = ref(null)

const selectedLabel = computed(() => {
  const selectedOption = props.options.find((option) => option.value === props.selected)
  return selectedOption ? selectedOption.label : 'Select an option'
})

const borderClass = computed(() => {
  return props.border ? 'border border-[#ccd1d2]' : 'border-none'
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option) => {
  emit('update:selected', option.value)
  emit('change', option.value)
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
ul {
  z-index: 200;
}
</style>
