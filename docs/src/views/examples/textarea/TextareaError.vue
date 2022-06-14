<template>
  <nhs-textarea
    label="Why can't you provide a National Insurance number?"
    :rules="rules"
    v-model="model"
  ></nhs-textarea>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: '',
      rules: [(v: string) => !!v || 'You must provide an explanation']
    })

    let _itemId: string
    let _validator: Function

    function registerValidator(itemId: string, validator: Function): void {
      _itemId = itemId
      _validator = validator
    }

    provide('register-validator', registerValidator)

    onMounted(() => {
      _validator()
    })

    return { ...toRefs(state) }
  }
})
</script>
