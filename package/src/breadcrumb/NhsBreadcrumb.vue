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

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'nhs-breadcrumb',
  inheritAttrs: false,
  emits: [],
  props: {
    ariaLabel: {
      type: String,
      default: (): string => {
        return 'Breadcrumb'
      }
    }
  }
})
</script>
