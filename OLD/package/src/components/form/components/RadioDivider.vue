<template>
  <div class="nhsuk-radios__divider">
    {{divider}}
  </div>
</template>

<script>
  export default {
    props: {
      divider: {
        type: String,
        required: true
      },
      id: {},
      value: {}
    }
  }
</script>