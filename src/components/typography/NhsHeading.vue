<template>
  <heading-switcher :heading-level="heading.level" :class="heading.class">
    <slot></slot>
  </heading-switcher>
</template>

<script>
  import HeadingSwitcher from '../shared/HeadingSwitcher.vue'
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsHeading",
    components: {
      HeadingSwitcher
    },
    props: {
      size: {
        type: String,
        default: "l"
      }
    },
    mixins: [SharedProps],
    computed: {
      heading() {
        var hClass = "l"
        var hLevel = 2
        switch (this.size.toLowerCase()) {
          case "xl":
            hClass = "nhsuk-heading-xl"
            hLevel = 1
            break
          case "l":
            hClass = "nhsuk-heading-l"
            hLevel = 2
            break
          case "m":
            hClass = "nhsuk-heading-m"
            hLevel = 3
            break
          case "s":
            hClass = "nhsuk-heading-s"
            hLevel = 4
            break
          case "xs":
            hClass = "nhsuk-heading-xs"
            hLevel = 5
            break
          default:
            hClass = "nhsuk-heading-l"
            hLevel = 2
            break
        }
        return {
          level: hLevel,
          class: hClass
        }
      }
    }
  }
</script>