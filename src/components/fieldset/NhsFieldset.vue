<template>
  <fieldset class="nhsuk-fieldset" :aria-describedby="describedBy">
    <legend :class="classes" v-if="legend && pageHeading">
      <h1 class="nhsuk-fieldset__heading">
        <slot name="legend" :props="legend">{{legend}}</slot>
      </h1>
    </legend>
    <legend class="nhsuk-fieldset__legend" v-if="legend && !pageHeading">
      <slot name="legend" :props="legend">{{legend}}</slot>
    </legend>
    <slot></slot>
  </fieldset>
</template>

<script>
  const sizes = [ 'xl', 'l' ]

  export default {
    name: 'NhsFieldset',
    props: {
      describedBy: {
        type: String,
        default: ''
      },
      legend: {
        type: String,
        default: ''
      },
      pageHeading: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'xl',
        validator(val) {
          return sizes.includes(val)
        }
      }
    },
    computed: {
      classes() {
        return `nhsuk-fieldset__legend nhsuk-fieldset__legend--${this.size}`
      }
    }
  }
</script>