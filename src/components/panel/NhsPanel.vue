<template>
<div :class="classes">
  <heading-switcher
    class="nhsuk-panel-with-label__label" v-if="label"
    :heading-level="headingLevel"
  >
    {{label}}
  </heading-switcher>
  <slot></slot>
</div>
</template>

<script>
  import HeadingSwitcher from '../../shared/HeadingSwitcher.vue'

  const colors = ['grey']

  export default {
    name: 'NhsPanel',
    components: { HeadingSwitcher },
    props: {
      label: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        validator(val) {
          if (val) {
            return colors.includes(val)
          }
          return true
        }
      },
      headingLevel: {
        type: Number,
        default: 3
      }
    },
    computed: {
      classes() {
        var classes = [ 'nhsuk-panel' ]

        if (this.label) {
          classes = [ 'nhsuk-panel-with-label' ]
        }

        if (this.color) {
          classes.push(`nhsuk-panel--${this.color}`)
        }

        return classes.join(' ')
      }
    }
  }
</script>