<template>
  <div class="relateve">
    <button @click="toggle" type="button" class="hidden sm:block border-2 border-gray-600 xl:border-gray-400 rounded-full overflow-hidden focus:outline-none focus:border-gray-100 xl:focus:border-gray-700">
      <slot name="trigger"></slot>
    </button>
    <div :class="isOpen ? 'sm:block' : 'sm:hidden'">
      <button @click="isOpen = false" class="hidden sm:z-30 sm:block sm:fixed sm:opacity-0 sm:inset-0 sm:w-full sm:h-full sm:cursor-default" type="button"></button>
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },

  mounted() {
    const onEscape = (e) => {
      if(!this.isOpen || e.key !== 'Escape') {
        return 
      }
      this.isOpen = false
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
  }
  
}
</script>