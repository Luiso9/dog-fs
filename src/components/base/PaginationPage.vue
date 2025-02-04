<template>
  <div
    class="text-primary-100 flex flex-row items-center justify-center pt-10 pb-14 text-lg font-bold antialiased"
  >
    <ul class="inline-flex max-w-md items-center gap-1 md:gap-4 lg:gap-8">
      <ArrowLongLeftIcon class="size-5" @click="prevPage" />
      <li
        v-for="page in pages"
        :key="page"
        :class="[
          'w-fit rounded-xl px-3.5 py-1.5',
          { 'active bg-primary-100 text-neutral-0': page === currentPage },
        ]"
        @click="changePage(page)"
      >
        {{ page }}
      </li>
      <ArrowLongRightIcon class="size-5" @click="nextPage" />
    </ul>
  </div>
</template>

<script setup>
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  totalPages: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['update:currentPage'])

const pages = computed(() => {
  const pages = []
  if (props.totalPages <= 5) {
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i)
    }
  } else {
    if (props.currentPage <= 3) {
      pages.push(1, 2, 3, '...', props.totalPages)
    } else if (props.currentPage >= props.totalPages - 2) {
      pages.push(1, '...', props.totalPages - 2, props.totalPages - 1, props.totalPages)
    } else {
      pages.push(
        props.currentPage - 2,
        props.currentPage - 1,
        props.currentPage,
        '...',
        props.totalPages,
      )
    }
  }
  return pages
})

const changePage = (page) => {
  if (page !== '...') {
    emit('update:currentPage', page)
  }
}

const prevPage = () => {
  if (props.currentPage > 1) {
    changePage(props.currentPage - 1)
  }
}

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    changePage(props.currentPage + 1)
  }
}
</script>

<style scoped>
.active {
  background-color: var(--primary-100);
  color: var(--neutral-0);
}
</style>
