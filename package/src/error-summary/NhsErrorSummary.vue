<template>
  <div
    ref="errorSummary"
    class="nhsuk-error-summary"
    v-bind="$attrs"
    aria-labelledby="error-summary-title"
    role="alert"
    tabindex="-1"
  >
    <h2 class="nhsuk-error-summary__title" id="error-summary-title">
      <slot name="title" :title="title">{{ title }}</slot>
    </h2>
    <div class="nhsuk-error-summary__body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'nhs-error-summary',
  inheritAttrs: false,
  emits: [],
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const errorSummary = ref(null)

    onMounted(() => {
      nextTick(() => {
        //@ts-ignore
        errorSummary.value.focus()
      })
    })

    return { errorSummary }
  }
})
</script>
