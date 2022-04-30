<template>
  <details class="nhsuk-details" v-bind="$attrs">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
        {{text}}
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <slot></slot>
    </div>
  </details>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'nhs-details',
  inheritAttrs: false,
  emits: [],
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>
