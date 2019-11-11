<template>
  <details class="nhsuk-details" v-bind="$attrs">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
        {{text}}
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <slot></slot>
    </div>
  </details>
</template>

<script>
  import Details from '../../../node_modules/nhsuk-frontend/packages/components/details/details'

  export default {
    name: 'NhsDetails',
    props: {
      text: {
        type: String,
        required: true
      }
    },
    mounted() {
      Details()
    }
  }
</script>