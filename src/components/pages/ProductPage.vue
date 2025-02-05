<template>
  <div class="container mx-auto">
    <div
      class="heading mt-8 mb-5 flex flex-col items-start justify-center sm:hidden lg:flex lg:flex-row lg:items-center lg:justify-around"
    >
      <div class="flex-1 flex-col flex-wrap">
        <span>Hard to choose right products for your pets?</span>
        <h1 class="text-primary-100 text-2xl leading-8 font-bold">Our Products</h1>
      </div>
      <ButtonBase :right-icon="ArrowLongRightIcon" :intent="'text'" class="mx-auto w-auto"
        >View More</ButtonBase
      >
    </div>
    <div
      class="grid h-auto w-auto grid-cols-2 place-items-center items-center gap-3 truncate px-4 pb-5 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-7"
    >
      <CompactCard
        v-for="(dog, index) in produc.slice(0, 4)"
        :key="dog.name"
        :imageSrc="images[index] || placeholderImage"
        :imageAlt="dog.name"
        :title="dog.name.length > 20 ? dog.name.substring(0, 17) + '...' : dog.name"
        :gender="dog.product"
        :age="dog.size"
        :price="`$ ${dog.price}`"
        :label="{ text: dog.label }"
      />
      <CompactCard
        v-for="(dog, index) in produc.slice(4, 8)"
        :key="dog.name"
        :imageSrc="images[index + 4] || placeholderImage"
        :imageAlt="dog.name"
        :title="dog.name.length > 20 ? dog.name.substring(0, 17) + '...' : dog.name"
        :gender="dog.product"
        :age="'2 years'"
        :price="`$${dog.price}`"
        :label="{ text: 'New' }"
      />
    </div>
    <div class="md:hidden lg:hidden">
      <ButtonBase :right-icon="ArrowLongRightIcon" :intent="'text'" class="mx-auto my-2 w-full"
        >View More</ButtonBase
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import product from '@/assets/perkapalan/product.js'
import CompactCard from '@/components/ui/CompactCard.vue'
import ButtonBase from '../base/ButtonBase.vue'
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline'

const placeholderImage = 'https://placehold.co/400'

// List of images in assets/product
import img1 from '@/assets/product/image 2-1.png'
import img2 from '@/assets/product/image 2-2.png'
import img3 from '@/assets/product/image 2-3.png'
import img4 from '@/assets/product/image 2-4.png'
import img5 from '@/assets/product/image 2-5.png'
import img6 from '@/assets/product/image 2-6.png'
import img7 from '@/assets/product/image 2-7.png'
import img8 from '@/assets/product/image 2.png'

const images = [img1, img2, img3, img4, img5, img6, img7, img8]

const produc = ref(product.products)
</script>
