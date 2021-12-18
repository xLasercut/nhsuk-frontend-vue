<template>
  <li class="nhsuk-footer__list-item">
    <link-switcher class="nhsuk-footer__list-item-link" :href="href" v-bind="$attrs">
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
import LinkSwitcher from '../../../shared/LinkSwitcher.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsFooterItem',
  inheritAttrs: false,
  components: { LinkSwitcher },
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>
