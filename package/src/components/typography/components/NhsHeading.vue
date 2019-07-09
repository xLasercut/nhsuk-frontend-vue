<template>
  <heading-switcher :heading-level="headingLevel" :class="`nhsuk-heading-${size}`" v-bind="$attrs">
    <slot></slot>
  </heading-switcher>
</template>

<script>
  import HeadingSwitcher from '../../../shared/HeadingSwitcher.vue'

  const sizes = {
    xl: 1,
    l: 2,
    m: 3,
    s: 4,
    xs: 5
  }

  export default {
    name: 'NhsHeading',
    components: { HeadingSwitcher },
    props: {
      size: {
        type: String,
        default: 'l',
        validators(val) {
          return (val in sizes)
        }
      }
    },
    computed: {
      headingLevel() {
        return sizes[this.size]
      }
    }
  }
</script>