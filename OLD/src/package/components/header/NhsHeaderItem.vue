<template>
  <li class="nhsuk-header__navigation-item">
    <link-switcher class="nhsuk-header__navigation-link" :href="href" v-bind="$attrs">
      <slot></slot>
      <nhs-icon icon="chevron-right"></nhs-icon>
    </link-switcher>
  </li>
</template>

<script>
import LinkSwitcher from '../../shared/LinkSwitcher.vue'
import NhsIcon from '../icon/NhsIcon.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsHeaderItem',
  components: { LinkSwitcher, NhsIcon },
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>
