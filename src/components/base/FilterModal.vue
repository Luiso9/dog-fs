<template>
  <div
    v-if="modalFilter"
    class="modal bg-opacity-50 bg-neutral-10 fixed inset-0 z-50 flex items-center justify-center lg:hidden"
  >
    <div class="w-9/10 rounded-lg bg-white p-6 lg:w-1/3">
      <div class="mb-4 flex items-center justify-between">
        <h2 class="text-primary-100 text-2xl font-bold">Filter</h2>
        <button @click="$emit('close-modal')" class="cursor-pointer text-xl text-gray-500">
          X
        </button>
      </div>

      <!-- Filter Options -->
      <div class="Filter mt-4 w-full text-neutral-100">
        <ul class="flex flex-col gap-2">
          <h3 class="text-lg font-bold">Gender</h3>
          <li>
            <CheckBox v-model="dogStore.filters.selectedGender" value="Male">Male</CheckBox>
          </li>
          <li>
            <CheckBox v-model="dogStore.filters.selectedGender" value="Female">Female</CheckBox>
          </li>
          <hr class="text-neutral-10 my-4" />
        </ul>

        <h3 class="text-lg font-bold">Color</h3>
        <ul class="flex flex-row gap-2">
          <div class="flex flex-col gap-2">
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
          </div>
          <div class="flex flex-col gap-2">
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
          </div>
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

      <div class="mt-4">
        <button
          @click="$emit('close-modal')"
          class="bg-primary-100 text-neutral-10 cursor-pinter w-full rounded-lg py-2"
        >
          Apply Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDogStore } from '@/store/dogStore'
import CheckBox from './CheckBox.vue'
import InputPrice from './InputPrice.vue'

const dogStore = useDogStore()

defineProps({
  modalFilter: Boolean,
})

defineEmits(['close-modal'])
</script>
