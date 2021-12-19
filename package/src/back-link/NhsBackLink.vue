<template>
  <div class="nhsuk-back-link" v-bind="$attrs">
    <nhs-link-switcher class="nhsuk-back-link__link" :href="href">
      <nhs-icon icon="chevron-left"></nhs-icon>
      <slot></slot>
    </nhs-link-switcher>
  </div>
</template>

<script lang="ts">
import {NhsLinkSwitcher} from '../shared/link-switcher'
import NhsIcon from '../icon/NhsIcon.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'nhs-back-link',
  inheritAttrs: false,
  components: { NhsLinkSwitcher, NhsIcon },
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>
