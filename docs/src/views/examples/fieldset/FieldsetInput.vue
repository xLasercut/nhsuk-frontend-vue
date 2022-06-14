<template>
  <nhs-fieldset legend="What is your address?" page-heading size="xl">
    <nhs-input label="Address line 1" v-model="addressOne"></nhs-input>
    <nhs-input label="Address line 2" v-model="addressTwo"></nhs-input>
    <nhs-input label="Town or city" v-model="city"></nhs-input>
    <nhs-input label="County" v-model="country"></nhs-input>
  </nhs-fieldset>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      addressOne: '',
      addressTwo: '',
      city: '',
      country: ''
    })

    return { ...toRefs(state) }
  }
})
</script>
