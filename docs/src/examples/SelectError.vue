<template>
  <nhs-select
    label="Label text goes here"
    hint="Hint text goes here"
    v-model="model" ref="select"
    :rules="rules"
  >
    <option>NHS.UK frontend option 1</option>
    <option>NHS.UK frontend option 2</option>
    <option>NHS.UK frontend option 3</option>
  </nhs-select>
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
    }
  }
</script>