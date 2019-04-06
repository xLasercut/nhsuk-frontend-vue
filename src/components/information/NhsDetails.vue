<template>
  <details :class="`nhsuk-details${extraClasses}`" v-bind="attributes">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
        {{label}}
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <slot></slot>
    </div>
  </details>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: "NhsDetails",
    mixins: [SharedProps],
    props: {
      label: {
        type: String,
        default: ""
      }
    }
  }
</script>