<template>
  <nhs-checkboxes :items="items" v-model="model"></nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
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
    })

    return { ...toRefs(state) }
  }
})
</script>
