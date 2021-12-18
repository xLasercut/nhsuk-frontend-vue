<template>
  <li class="nhsuk-breadcrumb__item">
    <link-switcher
      class="nhsuk-breadcrumb__link" :href="href"
      v-if="href" v-bind="$attrs"
    >
      <slot></slot>
    </link-switcher>
    <span
      class="nhsuk-breadcrumb__link"
      v-if="!href" v-bind="$attrs"
    >
      <slot></slot>
    </span>
  </li>
</template>

<script>
import LinkSwitcher from '../../../shared/LinkSwitcher.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsBreadcrumbItem',
  inheritAttrs: false,
  components: {
    LinkSwitcher
  },
  props: {
    href: {
      type: String
    }
  }
})
</script>
