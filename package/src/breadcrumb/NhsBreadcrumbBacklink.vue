<template>
  <p class="nhsuk-breadcrumb__back">
    <nhs-link-switcher class="nhsuk-breadcrumb__backlink" @click="$emit('click')" :href="href" v-bind="$attrs">
      <slot></slot>
    </nhs-link-switcher>
  </p>
</template>

<script lang="ts">
import {NhsLinkSwitcher} from '../shared/link-switcher'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'nhs-breadcrumb-backlink',
  inheritAttrs: false,
  emits: ['click'],
  components: {NhsLinkSwitcher},
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>
