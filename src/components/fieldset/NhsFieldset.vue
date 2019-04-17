<template>
  <fieldset class="nhsuk-fieldset" :aria-describedby="describedBy" v-bind="attributes">
    <legend class="nhsuk-fieldset__legend" v-if="legend && pageHeading" v-bind="legendAttributes">
      <h1 class="nhsuk-fieldset__heading">
        <slot name="legend" :props="legend">{{legend}}</slot>
      </h1>
    </legend>
    <legend class="nhsuk-fieldset__legend" v-if="legend && !pageHeading" v-bind="legendAttributes">
      <slot name="legend" :props="legend">{{legend}}</slot>
    </legend>
    <slot></slot>
  </fieldset>
</template>

<script>
  export default {
    name: "NhsFieldset",
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      describedBy: {
        type: String,
        default: ""
      },
      legend: {
        type: String,
        default: ""
      },
      pageHeading: {
        type: Boolean,
        default: false
      },
      legendAttributes: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>