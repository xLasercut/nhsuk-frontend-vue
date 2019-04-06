<template>
  <div :class="`nhsuk-do-dont-list${extraClasses}`" v-bind="attributes">
    <h3 class="nhsuk-do-dont-list__label">{{label}}</h3>
    <ul :class="doDontClass">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsDodont",
    mixins: [SharedProps],
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