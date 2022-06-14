<template>
  <nhs-table :headers="headers" :data="data">
    <template #item.input="item">{{ item.props.input || '-' }}</template>
  </nhs-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  setup() {
    const state = reactive({
      headers: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Input',
          value: 'input'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ]
    })

    return { ...toRefs(state) }
  }
})
</script>
