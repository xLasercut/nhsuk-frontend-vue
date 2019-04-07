<template>
  <p>
    <link-switcher :href="href">
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
      href: {
        type: String,
        required: true
      }
    }
  }
</script>