<template>
  <component :is="element" class="nhsuk-hint" v-bind="$attrs" :id="id">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {NhsHintTextElement} from './types'

export default defineComponent({
  inheritAttrs: false,
  emits: [],
  name: 'nhs-hint-text',
  props: {
    id: {
      type: String
    },
    element: {
      type: String as PropType<NhsHintTextElement>,
      default: (): NhsHintTextElement => {
        return 'span'
      }
    }
  }
})
</script>
