<template>
  <component :is="heading">
    <slot></slot>
  </component>
</template>

<script>
  import HeadingXl from './heading/HeadingXl.vue'
  import HeadingL from './heading/HeadingL.vue'
  import HeadingM from './heading/HeadingM.vue'
  import HeadingS from './heading/HeadingS.vue'
  import HeadingXs from './heading/HeadingXs.vue'

  export default {
    name: "NhsHeading",
    components: {
      HeadingXl,
      HeadingL,
      HeadingM,
      HeadingS,
      HeadingXs
    },
    props: {
      size: {
        type: String,
        default: "l"
      }
    },
    computed: {
      heading() {
        switch (this.size.toLowerCase()) {
          case "xl":
            return "heading-xl"
          case "l":
            return "heading-l"
          case "m":
            return "heading-m"
          case "s":
            return "heading-s"
          case "xs":
            return "heading-xs"
          default:
            return "heading-l"
        }
      }
    }
  }
</script>