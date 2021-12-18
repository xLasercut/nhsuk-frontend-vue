<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items" v-model="model"
  ></nhs-input-group>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            label: 'Day',
            width: '2',
            type: 'number'
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
    }
  }
</script>