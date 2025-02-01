<template>
  <nav class="mx-auto hidden gap-2 md:block md:w-full lg:block lg:w-full">
    <div class="mx-auto flex flex-row items-center justify-around">
      <ul
        class="text-primary-80 z-10 flex cursor-pointer flex-row items-center gap-12 leading-6 font-bold"
      >
        <a href="/">
          <img src="@/assets/perikanan/Frame.svg" alt="" class="h-auto w-full max-w-lg" />
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
      <div class="mx-auto inline-flex h-auto w-auto items-center gap-2 p-8 md:flex lg:hidden">
        <MagnifyingGlassIcon class="size-5" />
        <HeartIcon class="size-5" />
        <ShoppingCartIcon class="size-5" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline'
import ButtonBase from '../base/ButtonBase.vue'
import MegaMenu from './MegaMenu.vue'
import DropDown from '../ui/DropDown.vue'
import { ref } from 'vue'
const selectedValue = ref('vnd')
const handleDropdownChange = (value) => {
  console.log('Selected value:', value)
}

const active = ref(false)
</script>
