<template>
  <nhs-input
    ref="input"
    label="National Insurance number"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    :rules="rules"
  >
  </nhs-input>
</template>

<script>
  export default {
    data() {
      return {
        rules: [
          (v) => !!v || 'Error message goes here'
        ]
      }
    },
    mounted() {
      this.$refs.input.validate()
    }
  }

</script>