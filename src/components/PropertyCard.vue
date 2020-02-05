<template>
<div>
  <div class="relative pb-5/6">
    <img class="absolute inset-0 h-full shadow-md rounded-lg object-cover" src="../assets/img/home.jpg" alt="">
  </div>
  <div class="relative px-4 -mt-16">
    <div class="bg-gray-100 rounded-lg px-4 py-4 shadow-lg">
      <div class="flex">
        <span class="inline-block bg-teal-200 text-teal-800 rounded-full px-2 py-1 leading-none font-semibold text-xs tracking-wide uppercase">Plus</span>
        <div class="ml-1 text-xs text-gray-600 font-semibold tracking-wide text-gray-600 uppercase">
          {{property.beds}} beds &bull; {{property.baths}} baths
        </div>
      </div>
      <h4 class="mt-1 text-gray-900 font-semibold text-lg">{{property.title}}</h4>
      <div class="mt-1">
        <span class="text-gray-900">${{property.price}}</span>
        <span class="text-gray-600 ml-1">/wk</span>
      </div>
      <div class="text-sm text-gray-600 flex mt-2">
        <svg v-for="(i, key) in 5" :key="key" :class="property.rating >= i ? 'text-teal-500' : 'text-gray-400'" class="fill-current h-4 w-4" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 17.25l-6.188 3.75 1.641-7.031-5.438-4.734 7.172-0.609 2.813-6.609 2.813 6.609 7.172 0.609-5.438 4.734 1.641 7.031z"></path>
        </svg>
        <span class="ml-2">
          34 reviews
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'property'
  ],

}
</script>