<script setup>
import NavigationBar from '../components/layout/NavigationBar.vue'
import MobileFooter from '../components/layout/MobileFooter.vue'
import MobileNavbar from '../components/layout/MobileNavbar.vue'
import LandingPage from '@/components/pages/LandingPage.vue'
import FeedsPage from './FeedsPage.vue'
import BannerFeeds from './BannerFeeds.vue'
import NewsPage from './NewsPage.vue'
</script>

<template>
  <header class="bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]">
    <NavigationBar class="hidden md:flex lg:block" />
    <MobileNavbar class="lg:hidde=n md:hidden" />
  </header>
  <main>
    <LandingPage />
    <FeedsPage />
    <BannerFeeds />
    <NewsPage />
  </main>
  <MobileFooter />
</template>
