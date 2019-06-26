<template>
  <nhs-radios
    :items="items" v-model="model" disabled
    label="Have you changed your name?"
    hint="This includes changing your last name or spelling your name differently."
  ></nhs-radios>
</template>

<script>
  export default {
    data() {
      return {
        model: '',
        items: [
          {
            label: 'Yes',
            value: 'yes'
          },
          {
            label: 'No',
            value: 'no'
          }
        ]
      }
    }
  }
</script>