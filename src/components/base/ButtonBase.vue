<template>
  <button
    v-if="!btnProps.hidden"
    class="group inline-flex max-h-[48px] max-w-auto items-center justify-center rounded-full text-base transition-transform duration-300 ease-in-out cursor-pointer"
    :class="[
      btnProps.iconOnly ? 'h-12 w-12' : 'px-7 py-3.5',
      {
        'bg-primary-100 text-neutral-0 group-hover:bg-primary-60': btnProps.intent === 'primary',
        'bg-neutral-0 text-neutral-100': btnProps.intent === 'secondary',
        'bg-neutral-20 text-neutral-60 cursor-not-allowed': btnProps.intent === 'disabled',
        'border-primary-100 text-primary-100 border bg-none group-hover:bg-[var(--primary-60)] group-hover:text-[var(--neutral-10)]':
          btnProps.intent === 'text',
        'bg-black':
          btnProps.intent !== 'primary' &&
          btnProps.intent !== 'secondary' &&
          btnProps.intent !== 'disabled' &&
          btnProps.intent !== 'text',
      },
    ]"
    :disabled="btnProps.intent === 'disabled'"
  >
    <svg
      v-if="btnProps.loading"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute"
    >
      <path
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        class="spinner_P7sC"
        fill="white"
      />
    </svg>
    <component
      :is="btnProps.leftIcon"
      :class="[
        'h-6 w-6',
        btnProps.iconOnly ? '' : 'mr-2',
        btnProps.loading ? 'invisible' : 'opacity-100',
      ]"
      v-if="!btnProps.loading"
    />
    <span :class="['transition-opacity', btnProps.loading ? 'invisible' : 'opacity-100']">
      <slot />
    </span>
    <component
      :is="btnProps.rightIcon"
      :class="[
        'h-6 w-6',
        btnProps.iconOnly ? '' : 'ml-2',
        btnProps.loading ? 'invisible' : 'opacity-100',
      ]"
      v-if="!btnProps.loading"
    />
  </button>
</template>

<script setup>
const btnProps = defineProps({
  leftIcon: Object,
  rightIcon: Object,
  loading: Boolean,
  intent: {
    type: String,
    validator: (val) => ['primary', 'secondary', 'disabled', 'text'].includes(val),
    default: 'primary',
  },
  iconOnly: Boolean,
  hidden: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.spinner_P7sC {
  transform-origin: center;
  animation: spinner_svv2 0.75s infinite linear;
}

@keyframes spinner_svv2 {
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 1024px) {
  .hidden-on-small-screen {
    display: none;
  }
}
</style>
