<template>
  <p>
    <link-switcher :to="to">
      <slot></slot>
    </link-switcher>
  </p>
</template>

<script>
  import LinkSwitcher from '../shared/LinkSwitcher.vue'

  export default {
    name: "NhsLink",
    components: {
      LinkSwitcher
    },
    props: {
      to: {
        type: String,
        required: true
      }
    }
  }
</script>