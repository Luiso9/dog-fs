<template>
  <nav
    class="relative hidden gap-2 md:block md:w-full lg:w-full"
    :class="['navbar', { scrolled: isScrolled }]"
  >
    <div class="z-50 mx-auto flex flex-row items-center justify-around">
      <ul
        class="text-primary-80 z-50 flex cursor-pointer flex-row items-center gap-12 py-8 leading-6 font-bold"
      >
        <a href="/">
          <img src="@/assets/perikanan/Frame.svg" alt="Logo" class="h-auto w-full max-w-lg" />
        </a>
        <li><router-link to="/">Home</router-link></li>
        <li @mouseover="active = true" @mouseleave="handleMouseLeave">
          <router-link to="/product">Category</router-link>
          <transition name="fade">
            <span class="z-50" v-if="active">
              <MegaMenu />
            </span>
          </transition>
        </li>
        <router-link to="/about">Category</router-link>
        <li>Contact</li>
      </ul>
      <!-- Default -->
      <div class="default inline-flex items-center gap-2.5 md:hidden lg:flex">
        <div
          class="bg-neutral-0 inline-flex h-auto w-auto items-center gap-3 rounded-full px-4 py-2"
        >
          <MagnifyingGlassIcon class="size-5" />
          <input
            type="text"
            aria-disabled="true"
            placeholder="Search something here!"
            class="hover:border-none focus:border-none"
          />
        </div>
        <ButtonBase intent="primary" class="w-fit text-base font-bold">
          Join the community
        </ButtonBase>
        <DropDown
          v-model:selected="selectedValue"
          :options="dropdownOptions"
          @change="handleDropdownChange"
          class="w-auto border-none"
        />
      </div>
      <!-- Icon Only -->
      <div class="icon-only mx-auto h-auto w-auto items-center gap-2 p-8 lg:hidden">
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
const active = ref(false)

const dropdownOptions = [
  {
    value: 'vnd',
    label: 'VND',
    img: '../../assets/locale/vnd.png',
  },
  {
    value: 'eng',
    label: 'USD',
    img: '../../assets/locale/us.svg',
  },
  {
    value: 'id',
    label: 'IDR',
    img: '../../assets/locale/ind.png',
  },
]

const handleDropdownChange = (value) => {
  console.log('Selected value:', value)
}

const handleMouseLeave = () => {
  setTimeout(() => {
    active.value = false
  }, 500)
}
</script>

<style scoped>
@media (min-width: 768px) and (max-width: 1090px) {
  .default {
    display: none;
  }

  .icon-only {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
  }

  * {
    z-index: 999;
  }
}
</style>
