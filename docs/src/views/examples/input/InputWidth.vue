<template>
  <nhs-input
    label="National insurance number"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
    width="10"
    v-model="model"
  >
  </nhs-input>
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
