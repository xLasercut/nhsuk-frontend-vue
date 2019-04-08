<template>
  <fieldset class="nhsuk-fieldset" :aria-describedby="describedBy" v-bind="attributes">
    <legend class="nhsuk-fieldset__legend" v-if="legend.text && legend.pageHeading" v-bind="legend.attributes">
      <h1 class="nhsuk-fieldset__heading">
        <slot name="legend" :props="legend">{{legend.text}}</slot>
      </h1>
    </legend>
    <legend class="nhsuk-fieldset__legend" v-if="legend.text && !legend.pageHeading" v-bind="legend.attributes">
      <slot name="legend" :props="legend">{{legend.text}}</slot>
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
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>