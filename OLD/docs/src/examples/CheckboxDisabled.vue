<template>
  <nhs-checkboxes
    :items="items" v-model="model"
  ></nhs-checkboxes>
</template>

<script>
  export default {
    data() {
      return {
        model: [],
        items: [
          {
            label: 'Red',
            value: 'red'
          },
          {
            label: 'Green',
            value: 'green'
          },
          {
            label: 'Blue',
            value: 'blue',
            disabled: true
          }
        ]
      }
    }
  }
</script>