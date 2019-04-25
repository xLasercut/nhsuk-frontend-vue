<template>
  <li class="nhsuk-nav-a-z__item">
    <span class="nhsuk-nav-a-z__link--disabled" v-if="disabled" v-bind="attributes">
      <slot></slot>
    </span>
    <link-switcher class="nhsuk-nav-a-z__link" href="" v-if="!disabled" @click.native="$emit('click')" :attributes="attributes">
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
  import LinkSwitcher from '../../../shared/LinkSwitcher.vue'

  export default {
    name: 'NhsNavAzItem',
    components: {
      LinkSwitcher
    },
    props: {
      disabled: {
        type: Boolean,
        deafault: false
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