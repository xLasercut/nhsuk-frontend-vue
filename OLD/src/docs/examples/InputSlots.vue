<template>
  <div>
    <nhs-input
      ref="input"
      label="National Insurance number"
      hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
      :rules="rules" v-model="model"
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
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button @click="$refs.input.focus()">Focus</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button @click="validate()">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button @click="reset()">Reset</nhs-button>
      </nhs-col>
    </nhs-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rules: [
          (v) => !!v || 'Error message goes here'
        ],
        model: ''
      }
    },
    mounted() {
      this.$refs.input.validate()
    },
    methods: {
      validate() {
        var valid = this.$refs.input.validate()
        alert(`Valid value: ${valid}`)
      },
      reset() {
        this.model = ''
        this.$refs.input.resetError()
      }
    }
  }

</script>