<template>
  <div class="container mx-auto">
    <div class="dropdown flex items-center justify-between lg:hidden">
      <DropDown
        v-model:selected="dogStore.selectedOption"
        :options="dogStore.sortOptions"
        @update:selected="dogStore.sortDogs"
        class="z-50 w-auto"
        :border="true"
      />

      <span class="text-primary-100 flex items-center gap-2 text-xl font-bold">
        <FunnelIcon class="size-7" />
        Filter
      </span>
    </div>

    <div class="mt-8 mb-5 hidden flex-wrap items-baseline justify-between lg:flex">
      <div class="flex w-full flex-col md:w-1/4">
        <h1 class="text-primary-100 text-2xl font-bold">Filter</h1>
        <div class="Filter mt-4">
          <ul>
            <h3>Gender</h3>
            <li>
              <CheckBox
                :checked="dogStore.filters.selectedGender.includes('Male')"
                @change="dogStore.filters.selectedGender.push('Male')"
              >
                Male
              </CheckBox>
            </li>
            <li>
              <CheckBox
                :checked="dogStore.filters.selectedGender.includes('Female')"
                @change="dogStore.filters.selectedGender.push('Female')"
              >
                Female
              </CheckBox>
            </li>
          </ul>
          <ul>
            <h3>Color</h3>
            <li>Red</li>
            <li>Apricot</li>
            <li>Black</li>
            <li>Black & White</li>
            <li>Silver</li>
            <li>Tan</li>
          </ul>
          <ul class="flex flex-row">
            <h3>Price</h3>
            <li>Min</li>
            <li>Max</li>
          </ul>
          <ul>
            <h3>Breed</h3>
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>
          </ul>
        </div>
      </div>
      <div class="flex w-full flex-col md:w-3/4">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row items-baseline gap-2">
            <h1 class="text-primary-100 text-2xl font-bold">Small Dog</h1>
            <span class="text-neutral-60 text-sm">71 Puppies</span>
          </div>
          <DropDown
            v-model:selected="dogStore.selectedOption"
            :options="dogStore.sortOptions"
            @update:selected="dogStore.sortDogs"
            class="z-50 w-auto"
            :border="true"
          />
        </div>
        <div
          class="mt-4 grid grid-cols-2 gap-4 overflow-visible pb-2 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2"
        >
          <CompactCard
            v-for="dog in dogStore.paginatedDogs"
            :key="dog.name"
            :imageSrc="dog.image || dogStore.placeholderImage"
            :imageAlt="dog.name"
            :title="dog.name"
            :gender="dog.gender"
            :age="'2 Years'"
            :price="`$${dog.price}`"
          />
        </div>
      </div>
    </div>

    <PaginationPage
      :totalPages="dogStore.totalPages"
      :currentPage="dogStore.currentPage"
      @update:currentPage="dogStore.currentPage = dogStore.totalPages"
    />
  </div>
</template>

<script setup>
import CompactCard from '@/components/ui/CompactCard.vue'
import { FunnelIcon } from '@heroicons/vue/24/outline'
import DropDown from '../ui/DropDown.vue'
import { useDogStore } from '@/store/dogStore'
import PaginationPage from '../base/PaginationPage.vue'
import CheckBox from '../base/CheckBox.vue'

const dogStore = useDogStore()
</script>

<style scoped>
ul {
  z-index: 9999;
}
</style>
