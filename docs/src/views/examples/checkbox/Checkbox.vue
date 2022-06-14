<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    heading-size="m"
    label="What is your nationality?"
    hint="If you have more than 1 nationality, select all options that are relevant to you."
  ></nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'British',
          value: 'british'
        },
        {
          label: 'Irish',
          value: 'irish'
        },
        {
          label: 'citizen of another country',
          value: 'other'
        }
      ],
      model: []
    })

    return { ...toRefs(state) }
  }
})
</script>
