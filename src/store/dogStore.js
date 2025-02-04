import { defineStore } from 'pinia'
import { computed, reactive, ref, watch, onMounted } from 'vue'
import dogsData from '@/assets/perkapalan/dogs.js'

export const useDogStore = defineStore('dogStore', () => {
  const dogs = ref([...dogsData.dogs])
  const loading = ref(false)

  // console.log(dogs.value)

  const filters = reactive({
    selectedGender: [],
    selectedBreed: '',
    selectedColor: '',
    selectedPrice: { min: null, max: null },
  })

  const selectedOption = ref('popular')

  const sortOptions = [
    { value: 'popular', label: 'Sort by: Popular' },
    { value: 'newest', label: 'Sort by: Newest' },
    { value: 'price_low_high', label: 'Price: Low to High' },
    { value: 'price_high_low', label: 'Price: High to Low' },
  ]

  const currentPage = ref(1)
  const itemsPerPage = ref(8)

  const placeholderImage = 'https://placehold.co/500'

  const updateItemsPerPage = () => {
    const width = window.innerWidth
    if (width >= 1024) {
      itemsPerPage.value = 15
    } else if (width >= 768) {
      itemsPerPage.value = 9
    } else if (width >= 640) {
      itemsPerPage.value = 6
    } else {
      itemsPerPage.value = 4
    }
  }

  const filteredDogs = computed(() => {
    loading.value = true
    setTimeout(() => (loading.value = false), 500)

    return dogs.value.filter((dog) => {
      const matchGender =
        filters.selectedGender.length === 0 || filters.selectedGender.includes(dog.gender)
      const matchBreed = !filters.selectedBreed || dog.breed === filters.selectedBreed
      const matchColor = !filters.selectedColor || dog.color === filters.selectedColor
      const matchPrice =
        (filters.selectedPrice.min === null || dog.price >= filters.selectedPrice.min) &&
        (filters.selectedPrice.max === null || dog.price <= filters.selectedPrice.max)

      return matchGender && matchBreed && matchColor && matchPrice
    })
  })

  const sortedDogs = computed(() => {
    return [...filteredDogs.value].sort((a, b) => {
      switch (selectedOption.value) {
        case 'newest':
          return new Date(b.date) - new Date(a.date)
        case 'price_low_high':
          return a.price - b.price
        case 'price_high_low':
          return b.price - a.price
        default:
          return 0
      }
    })
  })

  const totalPages = computed(() => Math.ceil(sortedDogs.value.length / itemsPerPage.value))

  const paginatedDogs = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    return sortedDogs.value.slice(start, start + itemsPerPage.value)
  })

  const resetFilters = () => {
    filters.selectedGender = []
    filters.selectedBreed = ''
    filters.selectedColor = ''
    filters.selectedPrice = { min: null, max: null }
  }

  watch([filters, selectedOption], () => {
    currentPage.value = 1
  })

  onMounted(() => {
    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
  })

  return {
    filters,
    selectedOption,
    sortOptions,
    currentPage,
    itemsPerPage,
    totalPages,
    paginatedDogs,
    loading,
    resetFilters,
    placeholderImage,
  }
})
