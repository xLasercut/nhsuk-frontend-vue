<template>
  <component :is="component()" />
</template>

<script>
  import ExampleWithContainer from './example/ExampleWithContainer.vue'
  import ExampleWithBlueBg from './example/ExampleWithBlueBg.vue'
  const noContainers = [ '/example/breadcrumb' ]
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