<template>
  <li>
    <nhs-icon :icon="dodontIcon"></nhs-icon>
    <slot></slot>
  </li>
</template>

<script>
  import NhsIcon from '@/components/icon/NhsIcon.vue'

  export default {
    name: "NhsDodontItem",
    components: {
      NhsIcon
    },
    props: {
      type: {
        type: String,
        default: "tick"
      }
    },
    computed: {
      dodontIcon() {
        switch (this.type) {
          case "dont":
            return "cross"
          default:
            return "tick"
        }
      }
    }
  }
</script>