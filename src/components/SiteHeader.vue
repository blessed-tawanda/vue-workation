<template>
  <header class="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-gray-100">
     <div class="flex justify-between items-center px-4 py-3 xl:w-72 xl:bg-gray-900 xl:py-5">
      <div>
        <img class="h-8 w-auto" src="../assets/img/work.svg" alt="">
      </div>
      <div class="flex sm:hidden">
        <button @click="toggle" type="button" class="px-2 text-gray-500 hover:text-white">
          <svg class="h-6 w-6 fill-current" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
        </button>
      </div>
     </div>
     <nav class="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between" :class="{'hidden': !isOpen, 'block': isOpen}"> 
      <div class="hidden xl:block xl:relative xl:m-w-xs xl:w-1/3">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-6 w-6 fill-current text-gray-600" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M9.516 14.016q1.875 0 3.188-1.313t1.313-3.188-1.313-3.188-3.188-1.313-3.188 1.313-1.313 3.188 1.313 3.188 3.188 1.313zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281q-1.781 1.547-4.219 1.547-2.719 0-4.617-1.875t-1.898-4.594 1.898-4.617 4.617-1.898 4.594 1.898 1.875 4.617q0 0.984-0.469 2.227t-1.078 1.992l0.281 0.281h0.797z"></path>
            </svg>
        </div>
        <input class="rounded-lg w-full block bg-gray-200 text-gray-900 px-10 py-2 focus:outline-none focus:bg-gray-300 focus:text-gray-900 pl-10 pr-4 py-2" type="text" placeholder="Search By Keywords">
      </div>
      <div class="sm:flex sm:items-center">
        <div class="px-3 pt-3 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0">
          <a href="#" class="block leading-tight font-semibold text-white hover:bg-gray-600 px-3 py-1 rounded-lg sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:py-2">List your properties</a>
          <a href="#" class="mt-1 sm:mt-0 leading-tight block font-semibold text-white hover:bg-gray-600 px-3 py-1 rounded-lg sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:py-2">Trips</a>
          <a href="#" class="mt-1 sm:mt-0 leading-tight block font-semibold text-white hover:bg-gray-600 px-3 py-1 rounded-lg sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:py-2">Messages</a>
        </div>
        <div class="relative px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
          <div class="flex items-center sm:hidden">
            <img class="h-10 w-10 object-cover rounded-full border-2 border-gray-600" src="../assets/img/girl.jpg" alt="">
            <span class="text-gray-200 font-semibold ml-4 sm:hidden">Victoria Mahuni</span>
          </div>
          <Dropdown>
            <template #trigger>
              <img class="h-8 w-8 object-cover  " src="../assets/img/girl.jpg" alt="">
            </template>
            <template #dropdown> 
                <div class="mt-5 sm:bg-white sm:rounded-lg sm:absolute sm:right-0 sm:w-48 sm:mt-3 sm:shadow-xl sm:py-2 sm:z-50 xl:border">
                  <a href="#" class="block text-gray-400 mt-3 font-semibold hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500">Account Settings</a>
                  <a href="#" class="block text-gray-400 mt-3 font-semibold hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500">Support</a>
                  <a href="#" class="block text-gray-400 mt-3 font-semibold hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:mt-0 sm:hover:bg-indigo-500">Sign out</a>
                </div>
            </template>
          </Dropdown>
        </div>
       </div>
     </nav>
   </header>
</template>

<script>
import Dropdown from '@/components/Dropdown'

export default {
  components: {
    Dropdown
  },

  data() {
    return {
      isOpen: false,
      dropDownOpen: false
    }
  },
  mounted() {
    const onEscape = (e) => {
      if(!this.dropDownOpen || e.key !== 'Escape') {
        return 
      }
      this.dropDownOpen = false
    }

    document.addEventListener('keydown', onEscape)
    this.$on('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    toggleDropDown() {
      this.dropDownOpen = !this.dropDownOpen
    } 
  }
}
</script>