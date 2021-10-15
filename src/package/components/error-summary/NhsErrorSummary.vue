<template>
  <div class="nhsuk-error-summary" v-bind="$attrs" aria-labelledby="error-summary-title" role="alert" tabindex="-1">
    <h2 class="nhsuk-error-summary__title" id="error-summary-title">
      <slot name="title" :props="title">{{title}}</slot>
    </h2>
    <div class="nhsuk-error-summary__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ErrorSummary from '../../../../node_modules/nhsuk-frontend/packages/components/error-summary/error-summary'
import {defineComponent, onMounted} from 'vue'

export default defineComponent({
  name: 'NhsErrorSummary',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    onMounted(() => {
      ErrorSummary()
    })
  }
})
</script>
