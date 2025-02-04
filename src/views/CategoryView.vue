<script setup>
import NavigationBar from '../components/layout/NavigationBar.vue'
import FooterBase from '@/components/layout/FooterBase.vue'
import MobileFooter from '../components/layout/MobileFooter.vue'
import MobileNavbar from '../components/layout/MobileNavbar.vue'
import BannerDog from '@/components/sections/BannerDog.vue'
import BreadCrumbs from '@/components/ui/BreadCrumbs.vue'
import FeedsList from '@/components/sections/FeedsList.vue'
</script>

<template>
  <nav>
    <NavigationBar class="hidden md:block lg:block" />
    <MobileNavbar class="md:hidden lg:hidden" />
  </nav>
  <header>
    <BreadCrumbs />
    <div class="container mx-auto">
      <BannerDog />
    </div>
  </header>
  <main>
    <FeedsList />
  </main>
  <FooterBase class="hidden lg:flex" />
  <MobileFooter class="md:block lg:hidden" />
</template>
