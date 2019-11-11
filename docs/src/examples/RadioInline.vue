<template>
  <nhs-radios
    :items="items" v-model="model" inline
    label="Have you changed your name?" heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
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
        ]
      }
    }
  }
</script>