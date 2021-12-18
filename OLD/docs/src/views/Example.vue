<template>
  <div :style="containerStyle">
    <component :is="component()" :color="bgColor" />
  </div>
</template>

<script>
import ExampleWithContainer from './example/ExampleWithContainer.vue'
import ExampleWithColorBg from './example/ExampleWithColorBg.vue'
import {defineComponent} from 'vue'

const NO_CONTAINERS = [
  '/example/breadcrumb',
  '/example/footer',
  '/example/footer-column',
  '/example/header',
  '/example/header-logo',
  '/example/header-service-search',
  '/example/header-transactional',
  '/example/header-transactional-name',
  '/example/header-transactional-long',
  '/example/header-nav',
  '/example/header-search',
  '/example/hero',
  '/example/hero-image',
  '/example/hero-image-text',
  '/example/feedback',
  '/example/skip-link',
  '/example/header-org',
  '/example/header-org-white',
  '/example/header-org-white-nav'
]

const BLUE_CONTAINERS = [ '/example/button-reversed' ]

const GRAY_CONTAINERS = ['/example/panel-grey']

export default defineComponent({
  methods: {
    component() {
      if (NO_CONTAINERS.includes(this.$route.path)) {
        return 'router-view'
      }

      if (BLUE_CONTAINERS.includes(this.$route.path)) {
        return ExampleWithColorBg
      }

      if (GRAY_CONTAINERS.includes(this.$route.path)) {
        return ExampleWithColorBg
      }

      return ExampleWithContainer
    }
  },
  computed: {
    containerStyle() {
      var bg = '#f0f4f5'

      if (GRAY_CONTAINERS.includes(this.$route.path)) {
        bg = 'white'
      }

      return {
        'background-color': bg,
        height: '100vh'
      }
    },
    bgColor() {
      if (BLUE_CONTAINERS.includes(this.$route.path)) {
        return '#005eb8'
      }

      if (GRAY_CONTAINERS.includes(this.$route.path)) {
        return '#f0f4f5'
      }

      return null
    }
  }
})
</script>
