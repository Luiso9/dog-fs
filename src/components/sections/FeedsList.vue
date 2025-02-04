<template>
  <div class="container mx-auto">
    <div class="dropdown flex items-center justify-between">
      <DropDown
        v-model:selected="selectedOption"
        :options="sortOptions"
        @update:selected="sortDogs"
        class="z-50 w-auto"
        :border="true"
      />
      <span class="text-primary-100 flex items-center gap-2 text-xl font-bold">
        <FunnelIcon class="size-7" />
        Filter
      </span>
    </div>

    <div
      class="mt-8 mb-5 flex flex-row-reverse items-baseline justify-end gap-3.5 md:flex-row-reverse md:items-baseline md:justify-end"
    >
      <span class="text-neutral-60 text-sm">{{ dogs.length }} Puppies</span>
      <h1 class="text-primary-100 text-2xl font-bold">Small Dog</h1>
    </div>

    <div class="grid grid-cols-2 gap-4 pb-2 md:grid-cols-3 lg:grid-cols-4 overflow-visible">
      <CompactCard
        v-for="dog in paginatedDogs"
        :key="dog.name"
        :imageSrc="dog.image || placeholderImage"
        :imageAlt="dog.name"
        :title="dog.name"
        :gender="dog.gender"
        :age="dog.age"
        :price="`$${dog.price}`"
      />
    </div>

    <PaginationPage
      :totalPages="totalPages"
      :currentPage="currentPage"
      @update:currentPage="currentPage = $event"
    />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from 'vue'
import dogsData from '@/assets/perkapalan/dogs.js'
import CompactCard from '@/components/ui/CompactCard.vue'
import { FunnelIcon } from '@heroicons/vue/24/outline'
import DropDown from '../ui/DropDown.vue'
import PaginationPage from '../base/PaginationPage.vue'

const selectedOption = ref('popular')
const dogs = ref(dogsData.dogs)
const currentPage = ref(1)
const placeholderImage = 'https://placehold.co/500'

const itemsPerPage = ref(8)

const updateItemsPerPage = () => {
  const width = window.innerWidth
  if (width >= 1024) {
    itemsPerPage.value = 12
  } else if (width >= 768) {
    itemsPerPage.value = 9
  } else if (width >= 640) {
    itemsPerPage.value = 6
  } else {
    itemsPerPage.value = 4
  }
}

const sortOptions = [
  { value: 'popular', label: 'Sort by: Popular' },
  { value: 'newest', label: 'Sort by: Newest' },
  { value: 'price_low_high', label: 'Price: Low to High' },
  { value: 'price_high_low', label: 'Price: High to Low' },
]

const filteredDogs = ref([...dogs.value])

const totalPages = computed(() => Math.ceil(filteredDogs.value.length / itemsPerPage.value))

const paginatedDogs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return filteredDogs.value.slice(start, start + itemsPerPage.value)
})

const sortDogs = () => {
  switch (selectedOption.value) {
    case 'newest':
      filteredDogs.value.sort((a, b) => new Date(b.date) - new Date(a.date))
      break
    case 'price_low_high':
      filteredDogs.value.sort((a, b) => a.price - b.price)
      break
    case 'price_high_low':
      filteredDogs.value.sort((a, b) => b.price - a.price)
      break
    default:
      filteredDogs.value = [...dogs.value]
  }
}

onMounted(() => {
  updateItemsPerPage()
  window.addEventListener('resize', updateItemsPerPage)
})

watchEffect(sortDogs)
</script>

<style scoped>
ul {
  z-index: 9999;
}
</style>
