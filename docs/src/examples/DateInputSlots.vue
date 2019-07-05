<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items" v-model="model" ref="input"
  >
    <template #hint="hint">
      {{hint}}
    </template>

    <template #error="error">
      {{error}}
    </template>

    <template #item-label="label">
      {{label}}
    </template>
  </nhs-input-group>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            label: 'Day',
            width: '2',
            type: 'number',
            rules: [
              (v) => !!v || 'Error message goes here'
            ]
          },
          {
            label: 'Month',
            width: '2',
            type: 'number'
          },
          {
            label: 'Year',
            width: '4',
            type: 'number'
          }
        ],
        model: {}
      }
    },
    mounted() {
      this.$refs.input.validate()
    }
  }
</script>