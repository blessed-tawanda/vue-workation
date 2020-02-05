<template>
  <div class="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
    <SiteHeader class="xl:flex-shrink-0"/>
    <div class="xl:flex xl:flex-1 xl:overflow-y-hidden">
      <SearchFilters/>
      <main class="px-4 py-6 xl:flex-1 xl:overflow-x-hidden">
        <h3 class="text-gray-900 text-xl">Los Angeles</h3>
        <p class="text-gray-600">Live like the stars in these luxurious Southern Califonia estates.</p>
        <div class="mt-6 sm:flex sm:overflow-x-auto sm:pb-8">
          <div v-for="(property,key) in properties" :key="key" :class="{'mt-10': key>1}" class="sm:mt-0 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:mr-3">
            <PropertyCard :property="property"/>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SearchFilters from '@/components/SearchFilters'
import PropertyCard from '@/components/PropertyCard'

export default {
  components: {
    SiteHeader,
    SearchFilters,
    PropertyCard
  },
  data() {
    return {
       properties: [
        {
          imageUrl: '',
          beds: 3,
          baths: 2,
          title: 'Modern home in city center',
          price: 1400,
          reviewCount: 34,
          rating: 4,
        },
        {
          imageUrl: '../assets/img/home.jpg',
          beds: 3,
          baths: 2,
          title: 'Modern home in city center',
          price: 1400,
          reviewCount: 34,
          rating: 1,
        },
        {
          imageUrl: '../assets/img/home.jpg',
          beds: 4,
          baths: 4,
          title: 'Modern mansion in city center',
          price: 14000,
          reviewCount: 34,
          rating: 5,
        },
        {
          imageUrl: '../assets/img/home.jpg',
          beds: 3,
          baths: 2,
          title: 'Modern home in city center',
          price: 1400,
          reviewCount: 34,
          rating: 3,
        },
      ]
    }
  }
}
</script>

<style>
  /* Let's get this party started */
::-webkit-scrollbar {
    width: 5px;
}
 
/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}

</style>