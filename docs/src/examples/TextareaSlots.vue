<template>
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
    }
  }
</script>