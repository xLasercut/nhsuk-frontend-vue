<template>
  <nhs-radios
    :items="items" v-model="model"
  ></nhs-radios>
</template>

<script>
  export default {
    data() {
      return {
        model: '',
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
            value: 'blue'
          }
        ]
      }
    }
  }
</script>