<template>
  <li class="nhsuk-contents-list__item" v-bind="attributes">
    <span class="nhsuk-contents-list__current" v-if="!href" v-bind="$attrs">
      <slot></slot>
    </span>
    <link-switcher class="nhsuk-contents-list__link" v-if="href" :href="href" v-bind="$attrs">
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
import LinkSwitcher from '../../../shared/LinkSwitcher.vue'
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsContentsItem',
  inheritAttrs: false,
  components: { LinkSwitcher },
  props: {
    href: {
      type: String
    },
    ariaCurrent: {
      type: String,
      default: 'page'
    }
  },
  setup(props) {
    const attributes = computed(() => {
      let attributes = {}
      if (!props.href) {
        attributes['aria-current'] = props.ariaCurrent
      }
      return attributes
    })

    return {attributes}
  }
})
</script>
