<template>
  <nav class="nhsuk-nav-a-z" id="nhsuk-nav-a-z" role="navigation" :aria-label="ariaLabel" v-bind="$attrs">
    <ol class="nhsuk-nav-a-z__list" role="list">
      <slot></slot>
    </ol>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-nav-az',
  emits: [],
  props: {
    ariaLabel: {
      type: String,
      default: (): string => {
        return 'A to Z Navigation'
      }
    }
  }
})
</script>
