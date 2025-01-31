<script setup>
import { RouterView } from 'vue-router'
import DropDown from './components/DropDown.vue'
import { ref } from 'vue'
import NavigationBar from './components/NavigationBar.vue'
import MobileFooter from './components/MobileFooter.vue'

const selectedValue = ref('option1')
const handleDropdownChange = (value) => {
  console.log('Selected value:', value)
}
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main class="flex flex-col items-center justify-center gap-8 h-screen">
    <DropDown
      v-model:selected="selectedValue"
      :options="[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]"
      @change="handleDropdownChange"
    />

    <!-- Disabled Dropdown -->
    <DropDown
      :options="[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]"
      selected="option1"
      disabled
    />
    <RouterView />
  </main>
  <MobileFooter />
</template>
