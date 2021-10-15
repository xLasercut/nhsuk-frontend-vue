<template>
  <li class="nhsuk-nav-a-z__item">
    <span class="nhsuk-nav-a-z__link--disabled" v-if="disabled" v-bind="$attrs">
      <slot></slot>
    </span>
    <link-switcher
      class="nhsuk-nav-a-z__link" href=""
      v-if="!disabled" @click="$emit('click')" v-bind="$attrs"
    >
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
import LinkSwitcher from '../../../shared/LinkSwitcher.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsNavAzItem',
  inheritAttrs: false,
  components: { LinkSwitcher },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
