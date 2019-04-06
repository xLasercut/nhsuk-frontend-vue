<template>
  <div :class="`nhsuk-action-link${extraClasses}`" v-bind="attributes">
    <link-switcher class="nhsuk-action-link__link" :to="to">
      <nhs-icon icon="arrow-right-circle"></nhs-icon>
      <span class="nhsuk-action-link__text">
        <slot></slot>
      </span>
    </link-switcher>
  </div>
</template>

<script>
  import LinkSwitcher from '../shared/LinkSwitcher.vue'
  import NhsIcon from '../icon/NhsIcon.vue'
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsActionLink",
    props: {
      to: {
        type: String,
        required: true
      }
    },
    components: {
      LinkSwitcher,
      NhsIcon
    },
    mixins: [SharedProps]
  }
</script>