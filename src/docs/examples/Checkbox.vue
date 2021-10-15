<template>
  <nhs-checkboxes
    :items="items" v-model="model" heading-size="m"
    label="What is your nationality?"
    hint="If you have more than 1 nationality, select all options that are relevant to you."
  ></nhs-checkboxes>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            label: 'British',
            value: 'british'
          },
          {
            label: 'Irish',
            value: 'irish'
          },
          {
            label: 'citizen of another country',
            value: 'other'
          }
        ],
        model: []
      }
    }
  }
</script>