<template>
  <nhs-checkboxes
    :items="items"
    v-model="model"
    :rules="rules"
    heading-size="m"
    label="Which types of waste do you transport regularly?"
  ></nhs-checkboxes>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue'

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
      rules: [(v: Array<string>) => v.length > 0 || 'Please select an option']
    })

    let _itemId: string
    let _validator: Function

    function registerValidator(id: string, validator: Function) {
      _itemId = id
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
