<template>
  <nav class="hidden md:block lg:block md:w-full lg:w-full gap-2">
    <div class="flex flex-row justify-around items-center">
      <ul
        class="flex items-center gap-12 flex-row font-bold text-primary-80 cursor-pointer leading-6"
      >
        <a href="/">
          <img src="@/assets/perikanan/Frame.svg" alt="" />
        </a>
        <li>Home</li>
        <li @mouseover="active = true" @mouseleave="active = false">
          Category
          <transition name="fade">
            <span v-if="active">
              <MegaMenu />
            </span>
          </transition>
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <!-- Default -->
      <div class="inline-flex items-center gap-2.5 md:hidden lg:flex">
        <MagnifyingGlassIcon class="size-5" />
        <input type="text" placeholder="Search something here!" />
        <ButtonBase :intent="'primary'" class="w-fit text-base font-bold"
          >Join the community</ButtonBase
        >
        <DropDown
          v-model:selected="selectedValue"
          :options="[
            { value: 'vnd', label: 'VND' },
            { value: 'eng', label: 'ENG' },
            { value: 'id', label: 'ID' },
          ]"
          @change="handleDropdownChange"
          class="w-auto border-none"
        >
          <template #label="{ selectedValue }">
            {{ selectedValue ? `Selected: ${selectedValue}` : 'VND' }}
          </template>
        </DropDown>
      </div>
      <!-- Icon Ony -->
      <div class="inline-flex items-center gap-2 lg:hidden w-auto h-auto p-8">
        <MagnifyingGlassIcon class="size-5" />
        <HeartIcon class="size-5" />
        <ShoppingCartIcon class="size-5" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline'
import ButtonBase from './ButtonBase.vue'
import MegaMenu from './MegaMenu.vue'
import DropDown from './DropDown.vue'
import { ref } from 'vue'
const selectedValue = ref('vnd')
const handleDropdownChange = (value) => {
  console.log('Selected value:', value)
}

const active = ref(false)
</script>
