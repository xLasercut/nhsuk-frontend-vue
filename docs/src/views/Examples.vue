<template>
  <component :is="component()"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '../router'
import ExampleDisplay from './examples/ExampleDisplay.vue'

export default defineComponent({
  setup() {
    function component() {
      if (router.currentRoute.value.path === '/examples') {
        return 'router-view'
      }

      return ExampleDisplay
    }

    return { component }
  }
})
</script>
