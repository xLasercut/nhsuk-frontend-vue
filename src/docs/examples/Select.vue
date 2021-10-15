<template>
  <nhs-select
    label="Label text goes here"
    v-model="model"
  >
    <option>NHS.UK frontend option 1</option>
    <option>NHS.UK frontend option 2</option>
    <option disabled>NHS.UK frontend option 3</option>
  </nhs-select>
</template>

<script>
  export default {
    data() {
      return {
        model: 'NHS.UK frontend option 2'
      }
    }
  }
</script>