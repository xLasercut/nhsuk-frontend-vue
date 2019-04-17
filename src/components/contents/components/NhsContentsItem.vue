<template>
  <li class="nhsuk-contents-list__item" v-bind="addAriaCurrent">
    <span class="nhsuk-contents-list__current" v-if="!href" v-bind="attributes">
      <slot></slot>
    </span>
    <link-switcher class="nhsuk-contents-list__link" v-if="href" :href="href" :attributes="attributes">
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
  import LinkSwitcher from '../../shared/LinkSwitcher.vue'

  export default {
    name: "NhsContentsItem",
    components: {
      LinkSwitcher
    },
    props: {
      href: {
        type: String,
        default: ""
      },
      ariaCurrent: {
        type: String,
        default: "page"
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      addAriaCurrent() {
        if (!this.href) {
          return {
            "aria-current": this.ariaCurrent
          }
        }
        return {}

      }
    }
  }
</script>