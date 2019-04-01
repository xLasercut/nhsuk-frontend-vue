<template>
  <div class="nhsuk-do-dont-list">
    <h3 class="nhsuk-do-dont-list__label">{{label}}</h3>
    <ul :class="doDontClass">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  

  export default {
    name: "NhsDodont",
    props: {
      label: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "tick"
      }
    },
    computed: {
      doDontClass() {
        switch (this.type) {
          case "dont":
            return "nhsuk-list nhsuk-list--cross"
          default:
            return "nhsuk-list nhsuk-list--tick"
        }
      }
    }
  }
</script>