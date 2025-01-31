<template>
  <div class="p-10" ref="dropdownRef">
    <div class="dropdown inline-block relative leading-5 max-w-[200px]">
      <button
        class="w-auto max-h-[88px] pl-5 pr-3 py-2 border-none rounded-full bg-white flex items-center justify-around cursor-pointer focus:border-[#00A7E7]"
        @click="toggleDropdown"
      >
        <span class="truncate">{{ selectedLabel }}</span>
        <component
          :is="isOpen ? ChevronUpIcon : ChevronDownIcon"
          class="size-3 mx-1 font-bold transition-transform duration-200"
        />
      </button>

      <ul
        v-if="isOpen"
        class="dropdown-menu rounded-2xl absolute z-10 w-full mt-1.5 bg-white border-[1px] border-[#CCD1D2] shadow-lg text-sm"
      >
        <li
          v-for="option in options"
          :key="option.value"
          class="cursor-pointer hover:bg-[#EBEEEF] first:rounded-t-2xl last:rounded-b-2xl hover:text-[#00171f] pt-2.5 pb-2 pl-5"
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
})

const emit = defineEmits(['update:selected', 'change'])

const isOpen = ref(false)
const dropdownRef = ref(null)

const selectedLabel = computed(() => {
  const selectedOption = props.options.find((option) => option.value === props.selected)
  return selectedOption ? selectedOption.label : 'Select an option'
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
