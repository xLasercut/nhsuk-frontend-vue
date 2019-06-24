<template>
  <nhs-textarea
    label="Why can't you provide a National Insurance number?"
    :rules="rules" ref="textarea" v-model="model"
  ></nhs-textarea>
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