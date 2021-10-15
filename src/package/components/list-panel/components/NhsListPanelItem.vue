<template>
  <li class="nhsuk-list-panel__item">
    <link-switcher class="nhsuk-list-panel__link" :href="href" v-bind="$attrs">
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
import LinkSwitcher from '../../../shared/LinkSwitcher.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsListPanelItem',
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
