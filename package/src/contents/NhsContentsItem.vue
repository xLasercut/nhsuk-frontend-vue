<template>
  <li class="nhsuk-contents-list__item" v-bind="attributes">
    <span class="nhsuk-contents-list__current" v-if="!href" v-bind="$attrs">
      <slot></slot>
    </span>
    <nhs-link-switcher
      class="nhsuk-contents-list__link"
      @click="$emit('click')"
      v-if="href"
      :href="href"
      v-bind="$attrs"
    >
      <slot></slot>
    </nhs-link-switcher>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { NhsLinkSwitcher } from '../shared/link-switcher'
import { NhsContentsItemAttribute } from './interfaces'

export default defineComponent({
  name: 'nhs-contents-item',
  inheritAttrs: false,
  components: { NhsLinkSwitcher },
  emits: ['click'],
  props: {
    href: {
      type: String
    },
    ariaCurrent: {
      type: String,
      default: (): string => {
        return 'page'
      }
    }
  },
  setup(props) {
    const attributes = computed(() => {
      const attributes: NhsContentsItemAttribute = {}
      if (!props.href) {
        attributes['aria-current'] = props.ariaCurrent
      }
      return attributes
    })

    return { attributes }
  }
})
</script>
