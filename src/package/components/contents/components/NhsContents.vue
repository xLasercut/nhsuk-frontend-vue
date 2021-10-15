<template>
  <nav class="nhsuk-contents-list" v-bind="$attrs" role="navigation" :aria-label="ariaLabel">
    <h2 class="nhsuk-u-visually-hidden">{{hiddenText}}</h2>
    <ol class="nhsuk-contents-list__list">
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsContents',
  inheritAttrs: false,
  props: {
    ariaLabel: {
      type: String,
      default: 'Pages in this guide'
    },
    hiddenText: {
      type: String,
      default: 'Contents'
    }
  }
})
</script>
