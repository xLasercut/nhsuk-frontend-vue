<template>
  <div :class="groupType">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NhsRadioGroup",
    props: {
      type: {
        type: String,
        default: "normal"
      }
    },
    computed: {
      groupType() {
        switch (this.type) {
          case "inline":
            return "nhsuk-radios nhsuk-radios--inline"
          default:
            return "nhsuk-radios"
        }
      }
    }
  }
</script>