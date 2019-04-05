<template>
  <code-block>
    <nhs-date-input v-model="date"></nhs-date-input>
    {{date}}
  </code-block>
</template>

<script>
  export default {
    data() {
      return {
        date: {}
      }
    }
  }
</script>