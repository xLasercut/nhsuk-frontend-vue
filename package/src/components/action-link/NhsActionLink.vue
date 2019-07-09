<template>
  <div class="nhsuk-action-link" v-bind="$attrs">
    <link-switcher class="nhsuk-action-link__link" :href="href">
      <nhs-icon icon="arrow-right-circle"></nhs-icon>
      <span class="nhsuk-action-link__text">
        <slot></slot>
      </span>
    </link-switcher>
  </div>
</template>

<script>
  import LinkSwitcher from '../../shared/LinkSwitcher.vue'
  import NhsIcon from '../icon/NhsIcon.vue'

  export default {
    name: 'NhsActionLink',
    props: {
      href: {
        type: String,
        required: true
      }
    },
    components: { LinkSwitcher, NhsIcon }
  }
</script>