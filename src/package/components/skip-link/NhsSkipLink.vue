<template>
  <a class="nhsuk-skip-link" href="#maincontent" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script>
import SkipLink from '../../../../node_modules/nhsuk-frontend/packages/components/skip-link/skip-link'
import {defineComponent, onMounted} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsSkipLink',
  setup() {
    onMounted(() => {
      SkipLink()
    })
  }
})
</script>
