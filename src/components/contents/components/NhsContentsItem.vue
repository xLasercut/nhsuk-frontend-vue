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

  export default {
    name: 'NhsContentsItem',
    components: { LinkSwitcher },
    props: {
      href: {
        type: String,
        default: ''
      },
      ariaCurrent: {
        type: String,
        default: 'page'
      }
    },
    computed: {
      attributes() {
        var attributes = {}
        if (!this.href) {
          attributes['aria-current'] = this.ariaCurrent
        }
        return attributes
      }
    }
  }
</script>