<template>
  <div class="nhsuk-table-responsive">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      heading: {
        type: String
      },
      headingLevel: {
        type: Number
      },
      attributes: {
        type: Object
      }
    }
  }
</script>