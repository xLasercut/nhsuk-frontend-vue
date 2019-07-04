<template>
  <nhs-radios
    :items="items" v-model="model"
    label="Have you changed your name?"
    hint="This includes changing your last name or spelling your name differently."
    :rules="rules" ref="radios"
  >
    <template #item-label="item">
      <h3>{{item.props.label}}</h3>
    </template>

    <template #item-hint="item">
      <a>{{item.props.hint}}</a>
    </template>

    <template #hint="hint">
      {{hint}}
    </template>

    <template #error="error">
      {{error}}
    </template>
  </nhs-radios>
</template>

<script>
  export default {
    data() {
      return {
        model: 'no',
        items: [
          {
            label: 'Yes',
            value: 'yes',
            hint: 'hint text'
          },
          {
            label: 'No',
            value: 'no'
          },
          {
            divider: 'or'
          },
          {
            label: 'Maybe',
            value: 'maybe'
          }
        ],
        rules: [
          (v) => v != 'no' || 'Please select an option'
        ]
      }
    },
    mounted() {
      this.$refs.radios.validate()
    }
  }
</script>