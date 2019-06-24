<template>
  <fieldset class="nhsuk-fieldset" :aria-describedby="describedBy">
    <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--xl" v-if="legend && pageHeading">
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
      }
    }
  }
</script>