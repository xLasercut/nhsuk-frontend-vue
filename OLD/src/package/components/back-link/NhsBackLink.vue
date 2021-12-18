<template>
  <div class="nhsuk-back-link" v-bind="$attrs">
    <link-switcher class="nhsuk-back-link__link" :href="href">
      <nhs-icon icon="chevron-left"></nhs-icon>
      <slot></slot>
    </link-switcher>
  </div>
</template>

<script>
import LinkSwitcher from '../../shared/LinkSwitcher.vue'
import NhsIcon from '../icon/NhsIcon.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsBackLink',
  inheritAttrs: false,
  components: { LinkSwitcher, NhsIcon },
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>
