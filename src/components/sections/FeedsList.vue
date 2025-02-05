<template>
  <div class="px-4 md:container md:mx-auto">
    <div class="dropdown flex items-center justify-between lg:hidden">
      <DropDown
        v-model:selected="dogStore.selectedOption"
        :options="dogStore.sortOptions"
        @update:selected="dogStore.sortDogs"
        class="z-50 w-auto"
        :border="true"
      />

      <span
        class="text-primary-100 flex items-center gap-2 text-xl font-bold cursor-pointer"
        @click="modalFilter = true"
      >
        <FunnelIcon class="size-7" />
        Filter
      </span>
    </div>

    <!-- Modal -->
    <FilterModal :modalFilter="modalFilter" @close-modal="modalFilter = false" />

    <div class="mt-8 mb-5 flex flex-wrap items-baseline justify-between lg:flex">
      <div class="hidden w-full flex-col md:hidden lg:flex lg:w-1/4">
        <h1 class="text-primary-100 text-2xl font-bold">Filter</h1>
        <div class="Filter mt-4 w-3/4 text-neutral-100">
          <ul class="flex flex-col gap-2">
            <h3 class="text-lg font-bold">Gender</h3>
            <li>
              <CheckBox v-model="dogStore.filters.selectedGender" value="Male">Male</CheckBox>
            </li>
            <li>
              <CheckBox v-model="dogStore.filters.selectedGender" value="Female">FeMale</CheckBox>
            </li>
            <hr class="text-neutral-10 my-4" />
          </ul>
          <ul class="flex flex-col gap-2">
            <h3 class="text-lg font-bold">Color</h3>
            <li>
              <CheckBox
                v-model="dogStore.filters.selectedColor"
                :bg-color="'bg-state-pink'"
                :hidden="false"
                :value="'Red'"
              >
                Red</CheckBox
              >
            </li>
            <li>
              <CheckBox
                v-model="dogStore.filters.selectedColor"
                :bg-color="'bg-state-orange'"
                :hidden="false"
                :value="'Apricot'"
              >
                Apricot</CheckBox
              >
            </li>
            <li>
              <CheckBox
                v-model="dogStore.filters.selectedColor"
                :bg-color="'bg-neutral-80'"
                :hidden="false"
                :value="'Black'"
              >
                Black</CheckBox
              >
            </li>
            <li>
              <CheckBox
                v-model="dogStore.filters.selectedColor"
                :bg-color="'bg-neutral-10'"
                :hidden="false"
                :value="'Black & White'"
              >
                Black & White</CheckBox
              >
            </li>
            <li>
              <CheckBox
                v-model="dogStore.filters.selectedColor"
                :bg-color="'bg-[#CECECE]'"
                :hidden="false"
                :value="'Silver'"
              >
                Silver</CheckBox
              >
            </li>
            <li>
              <CheckBox
                v-model="dogStore.filters.selectedColor"
                :bg-color="'bg-[#FFF7CE]'"
                :hidden="false"
                :value="'Tan'"
              >
                Tan</CheckBox
              >
            </li>
            <hr class="text-neutral-10 my-4" />
          </ul>
          <ul class="flex flex-col">
            <h3 class="text-lg font-bold">Price</h3>
            <span class="flex flex-row flex-wrap">
              <InputPrice v-model="dogStore.filters.selectedPrice" />
            </span>
            <hr class="text-neutral-10 my-4" />
          </ul>
          <ul class="flex flex-col gap-2">
            <h3 class="text-lg font-bold">Breed</h3>
            <li v-for="breed in ['Small', 'Medium', 'Large']" :key="breed">
              <CheckBox v-model="dogStore.filters.selectedBreed" :value="breed">
                {{ breed }}
              </CheckBox>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex w-full flex-col lg:w-3/4">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row items-baseline gap-2">
            <h1 class="text-primary-100 text-2xl font-bold">Small Dog</h1>
            <span class="text-neutral-60 text-sm">71 Puppies</span>
          </div>
          <DropDown
            v-model:selected="dogStore.selectedOption"
            :options="dogStore.sortOptions"
            @update:selected="dogStore.sortDogs"
            class="z-50 hidden w-auto lg:flex"
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
      @update:currentPage="dogStore.currentPage = $event"
    />
  </div>
</template>

<script setup>
import CompactCard from '@/components/ui/CompactCard.vue'
import { FunnelIcon } from '@heroicons/vue/24/outline'
import DropDown from '../ui/DropDown.vue'
import InputPrice from '../base/InputPrice.vue'
import { useDogStore } from '@/store/dogStore'
import PaginationPage from '../base/PaginationPage.vue'
import CheckBox from '../base/CheckBox.vue'
import { ref } from 'vue'
import FilterModal from '../base/FilterModal.vue'

const modalFilter = ref(false)

const dogStore = useDogStore()
</script>

<style scoped>
ul {
  z-index: 99;
}

.modal {
  z-index: 9999;
}
</style>
