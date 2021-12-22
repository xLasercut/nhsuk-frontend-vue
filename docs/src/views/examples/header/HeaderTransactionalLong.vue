<template>
  <nhs-header
    :service="service" transactional
  ></nhs-header>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      service: {
        name: 'Find out why your NHS data matters',
        href: '/'
      }
    })

    return {...toRefs(state)}
  }
})
</script>
