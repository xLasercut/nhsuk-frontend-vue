<template>
  <div>
    <nhs-select
      label="Label text goes here"
      hint="Hint text goes here"
      v-model="model" ref="select"
      :rules="rules"
    >
      <option>NHS.UK frontend option 1</option>
      <option>NHS.UK frontend option 2</option>
      <option>NHS.UK frontend option 3</option>

      <template #label="label">
        <h1>{{label.props}}</h1>
      </template>

      <template #hint="hint">
        <a>{{hint.props}}</a>
      </template>

      <template #error="error">
        <h2>{{error.props}}</h2>
      </template>
    </nhs-select>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button @click="$refs.select.focus()">Focus</nhs-button>
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
        model: 'NHS.UK frontend option 1',
        rules: [
          (v) => v != 'NHS.UK frontend option 1' || 'Error message goes here'
        ]
      }
    },
    mounted() {
      this.$refs.select.validate()
    },
    methods: {
      validate() {
        var valid = this.$refs.select.validate()
        alert(`Valid value: ${valid}`)
      },
      reset() {
        this.model = 'NHS.UK frontend option 2'
        this.$refs.select.resetError()
      }
    }
  }
</script>