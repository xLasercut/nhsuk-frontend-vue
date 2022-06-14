<template>
  <nhs-table
    :headers="headers"
    :data="data"
    caption="Skin symptoms and possible causes"
    :responsive="false"
  >
  </nhs-table>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      data: [
        {
          symptoms: 'Blisters on lips or around the mouth',
          cause: 'cold sores'
        },
        {
          symptoms: 'Itchy, dry, cracked, sore',
          cause: 'eczema'
        },
        {
          symptoms: 'Itchy blisters',
          cause: 'shingles, chickenpox'
        }
      ],
      headers: [
        {
          text: 'Skin symptoms',
          value: 'symptoms'
        },
        {
          text: 'Possible cause',
          value: 'cause'
        }
      ]
    })

    return { ...toRefs(state) }
  }
})
</script>
