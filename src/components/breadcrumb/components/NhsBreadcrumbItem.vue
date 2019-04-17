<template>
  <li class="nhsuk-breadcrumb__item">
    <link-switcher class="nhsuk-breadcrumb__link" :href="href" :attributes="attributes" v-if="href">
      <slot></slot>
    </link-switcher>
    <span class="nhsuk-breadcrumb__link" v-if="!href" v-bind="attributes">
      <slot></slot>
    </span>
  </li>
</template>

<script>
  import LinkSwitcher from '../../shared/LinkSwitcher.vue'

  export default {
    name: "NhsBreadcrumbItem",
    components: {
      LinkSwitcher
    },
    props: {
      href: {
        type: String,
        default: ""
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>