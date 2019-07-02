<template>
  <nhs-input
    ref="input"
    label="National Insurance number"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    :rules="rules"
  >
    <template #label="label">
      <h1>{{label.props}}</h1>
    </template>

    <template #hint="hint">
      <a>{{hint.props}}</a>
    </template>

    <template #error="error">
      <h2>{{error.props}}</h2>
    </template>
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