<template>
  <div class="main-container">
    <component :is="component()" />
  </div>
</template>

<script>
  import ExampleWithContainer from './example/ExampleWithContainer.vue'
  import ExampleWithBlueBg from './example/ExampleWithBlueBg.vue'
  const noContainers = [
    '/example/breadcrumb',
    '/example/emergency-alert',
    '/example/footer',
    '/example/footer-column',
    '/example/header',
    '/example/header-logo'
  ]
  const blueContainers = [ '/example/button-reversed' ]

  export default {
    methods: {
      component() {
        if (noContainers.includes(this.$route.path)) {
          return 'router-view'
        }

        if (blueContainers.includes(this.$route.path)) {
          return ExampleWithBlueBg
        }
        return ExampleWithContainer
      }
    }
  }
</script>

<style scoped>
  .main-container {
    background-color: #f0f4f5;
    height: 100vh;
  }
</style>