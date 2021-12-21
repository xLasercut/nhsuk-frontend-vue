<template>
  <nhs-table :headers="headers" :data="data">
    <template #item.type="{item}">{{item.value.type}}</template>
    <template #item.required="{item}">{{item.required || '-'}}</template>
    <template #item.default="{item}">{{item.default || '-'}}</template>
  </nhs-table>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

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
          text: 'Type',
          value: 'type'
        },
        {
          text: 'Required',
          value: 'required'
        },
        {
          text: 'Default',
          value: 'default'
        },
        {
          text: 'Description',
          value: 'description'
        }
      ]
    })

    return {...toRefs(state)}
  }
})
</script>
