<template>
  <div>
    <nhs-textarea
      label="Why can't you provide a National Insurance number?"
      hint="Hint text"
      :rules="rules" ref="textarea" v-model="model"
    >
      <template #label="label">
        {{label}}
      </template>

      <template #hint="hint">
        {{hint}}
      </template>

      <template #error="error">
        {{error}}
      </template>
    </nhs-textarea>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button @click="$refs.textarea.focus()">Focus</nhs-button>
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
        model: '',
        rules: [
          (v) => !!v || 'You must provide an explanation'
        ]
      }
    },
    mounted() {
      this.$refs.textarea.validate()
    },
    methods: {
      validate() {
        var valid = this.$refs.textarea.validate()
        alert(`Valid value: ${valid}`)
      },
      reset() {
        this.model = ''
        this.$refs.textarea.resetError()
      }
    }
  }
</script>