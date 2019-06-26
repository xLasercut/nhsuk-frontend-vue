<template>
  <nhs-checkboxes
    :items="items" v-model="model" page-heading
    label="Which types of waste do you transport regularly?"
    hint="Select all that apply" heading-size="l"
  ></nhs-checkboxes>
</template>

<script>
  export default {
    data() {
      return {
        model: [],
        items: [
          {
            label: 'Waste from animal carcasses',
            value: 'animal'
          },
          {
            label: 'Waste from mines or quarries',
            value: 'mines'
          },
          {
            label: 'Farm or agricultural waste',
            value: 'farm'
          }
        ]
      }
    }
  }
</script>