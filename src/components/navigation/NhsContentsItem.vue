<template>
  <li class="nhsuk-contents-list__item" v-bind="ariaCurrent">
    <span class="nhsuk-contents-list__current" v-if="current">
      <slot></slot>
    </span>
    <link-switcher class="nhsuk-contents-list__link" v-if="!current" :to="to">
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
  import LinkSwitcher from '../shared/LinkSwitcher.vue'

  export default {
    name: "NhsContentsItem",
    props: {
      to: {
        type: String,
        required: true
      },
      current: {
        type: Boolean,
        default: false
      }
    },
    components: {
      LinkSwitcher
    },
    computed: {
      ariaCurrent() {
        if (this.current) {
          return {
            "aria-current": "page"
          }
        }
        return {}
      }
    }
  }
</script>