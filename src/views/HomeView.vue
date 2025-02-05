<script setup>
import NavigationBar from '../components/layout/NavigationBar.vue'
import MobileFooter from '../components/layout/MobileFooter.vue'
import MobileNavbar from '../components/layout/MobileNavbar.vue'
import LandingPage from '@/components/pages/LandingPage.vue'
import FeedsPage from '@/components/pages/FeedsPage.vue'
import BannerFeeds from '@/components/pages/BannerFeeds.vue'
import NewsPage from '@/components/pages/NewsPage.vue'
import FooterBase from '@/components/layout/FooterBase.vue'
import BannerAd from '@/components/pages/BannerAd.vue'
import ProductPage from '@/components/pages/ProductPage.vue'
</script>

<template>
  <header class="bg-gradient-to-l from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]">
    <NavigationBar class="hidden md:flex lg:block" />
    <MobileNavbar class="md:hidden lg:hidden" />
  </header>
  <main>
    <LandingPage />
    <FeedsPage class="bg-neutral-10 z-20" />
  </main>
  <article>
    <BannerFeeds />
    <ProductPage class="hidden md:hidden lg:block " />
    <BannerAd class="hidden md:hidden lg:block" />
    <NewsPage />
  </article>
  <FooterBase class="hidden lg:flex" />
  <MobileFooter class="md:block lg:hidden" />
</template>


