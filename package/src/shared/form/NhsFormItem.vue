<template>
  <div :class="classes" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  emits: [],
  props: {
    error: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const classes = computed((): string => {
      const classes = ['nhsuk-form-group']

      if (props.error) {
        classes.push('nhsuk-form-group--error')
      }

      return classes.join(' ')
    })

    return { classes }
  }
})
</script>
