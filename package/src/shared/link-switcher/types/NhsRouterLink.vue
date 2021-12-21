<template>
  <router-link :to="href" @click="$emit('click')" v-bind="attributes">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {disableAttributeHelper} from '../../helpers/attribute-helper'

export default defineComponent({
  inheritAttrs: false,
  emits: ['click'],
  props: {
    href: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    }
  },
  setup(props, context) {
    const {attributes} = disableAttributeHelper(props.disabled, context.attrs)
    return {attributes}
  }
})
</script>
