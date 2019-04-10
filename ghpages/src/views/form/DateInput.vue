<template>
  <nhs-main>
    <code-block>
      <nhs-date-input v-model="date"></nhs-date-input>
      {{date}}
    </code-block>
  </nhs-main>
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