<template>
  <nhs-textarea
    label="Full address"
    autocomplete="street-address"
    v-model="model"
  ></nhs-textarea>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: ''
    })

    return {...toRefs(state)}
  }
})
</script>
