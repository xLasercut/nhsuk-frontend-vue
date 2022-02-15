<template>
  <nhs-checkboxes
    :items="items" v-model="model" :rules="rules" heading-size="m"
    label="Which types of waste do you transport regularly?"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: [],
      items: [
        {
          label: 'Waste from animal carcasses',
          value: 'animal'
        },
        {
          label: 'Waste from mines or quarries',
          value: 'mines'
        },
        {
          label: 'Farm or agricultural waste',
          value: 'farm'
        }
      ],
      rules: [
        (v) => v.length > 0 || 'Please select an option'
      ]
    })

    return {...toRefs(state)}
  }
})
</script>
