<template>
  <nhs-select label="Label text goes here" v-model="model">
    <option>NHS.UK frontend option 1</option>
    <option>NHS.UK frontend option 2</option>
    <option disabled>NHS.UK frontend option 3</option>
  </nhs-select>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'NHS.UK frontend option 2'
    })

    return { ...toRefs(state) }
  }
})
</script>
