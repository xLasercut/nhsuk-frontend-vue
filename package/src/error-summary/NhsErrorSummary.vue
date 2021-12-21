<template>
  <div class="nhsuk-error-summary" v-bind="$attrs" aria-labelledby="error-summary-title" role="alert" tabindex="-1">
    <h2 class="nhsuk-error-summary__title" id="error-summary-title">
      <slot name="title" :title="title">{{title}}</slot>
    </h2>
    <div class="nhsuk-error-summary__body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'nhs-error-summary',
  inheritAttrs: false,
  emits: [],
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>
