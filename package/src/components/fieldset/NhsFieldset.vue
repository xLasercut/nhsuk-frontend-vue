<template>
  <fieldset class="nhsuk-fieldset" v-bind="$attrs">
    <legend :class="classes" v-if="legend && pageHeading">
      <h1 class="nhsuk-fieldset__heading">
        <slot name="legend" :props="legend">{{legend}}</slot>
      </h1>
    </legend>
    <legend :class="classes" v-if="legend && !pageHeading">
      <slot name="legend" :props="legend">{{legend}}</slot>
    </legend>
    <slot></slot>
  </fieldset>
</template>

<script>
  const sizes = [ 'xl', 'l', 'm' ]

  export default {
    name: 'NhsFieldset',
    props: {
      legend: {
        type: String
      },
      pageHeading: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        validator(val) {
          if (val) {
            return sizes.includes(val)
          }
          return true
        }
      }
    },
    computed: {
      classes() {
        var classes = [ 'nhsuk-fieldset__legend' ]

        if (this.size) {
          classes.push(`nhsuk-fieldset__legend--${this.size}`)
        }

        return classes.join(' ')
      }
    }
  }
</script>