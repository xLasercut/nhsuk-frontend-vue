<template>
  <nav class="nhsuk-breadcrumb" v-bind="$attrs" :aria-label="ariaLabel">
    <div class="nhsuk-width-container">
      <ol class="nhsuk-breadcrumb__list">
        <slot></slot>
      </ol>
      <slot name="backlink"></slot>
    </div>
  </nav>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsBreadcrumb',
  inheritAttrs: false,
  props: {
    ariaLabel: {
      type: String,
      default: 'Breadcrumb'
    }
  }
})
</script>
