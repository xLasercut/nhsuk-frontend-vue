<template>
  <nhs-radios
    :items="items" v-model="model"
    label="Have you changed your name?" heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
    :rules="rules" ref="radios"
  ></nhs-radios>
</template>

<script>
  export default {
    data() {
      return {
        model: 'no',
        items: [
          {
            label: 'Yes',
            value: 'yes'
          },
          {
            label: 'No',
            value: 'no'
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