<template>
  <nhs-form @submit="onSubmit()" @reset="onReset()" v-model="valid">
    <nhs-input-group
      label="What is your date of birth?"
      hint="For example, 31 3 1980"
      :items="items"
      v-model="model"
    >
      <template #hint="{ hint }">
        <a>{{ hint }}</a>
      </template>

      <template #error="{ error }">
        {{ error }}
      </template>

      <template #item-label="{ item }">
        {{ item }}
      </template>
    </nhs-input-group>
    <nhs-row>
      <nhs-col :span="33">
        <nhs-button type="submit">Validate</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <nhs-button type="reset">Reset</nhs-button>
      </nhs-col>
      <nhs-col :span="33">
        <p>form valid: {{ valid }}</p>
        <p>model value: {{ model }}</p>
      </nhs-col>
    </nhs-row>
  </nhs-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Day',
          width: '2',
          type: 'number',
          rules: [(v: string) => !!v || 'Error message goes here']
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
      model: {},
      valid: false
    })

    function onSubmit() {
      if (state.valid) {
        alert('submit form')
      }
    }

    function onReset() {
      state.model = {}
    }

    return { ...toRefs(state), onReset, onSubmit }
  }
})
</script>
