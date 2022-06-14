<template>
  <nhs-input-group
    label="What is your date of birth?"
    hint="For example, 31 3 1980"
    :items="items"
    v-model="model"
  ></nhs-input-group>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      items: [
        {
          label: 'Day',
          width: '2',
          type: 'number',
          rules: [(v: string) => !!v || 'Error message goes here']
        },
        {
          label: 'Month',
          width: '2',
          type: 'number',
          rules: [(v: string) => !!v || 'Error message goes here']
        },
        {
          label: 'Year',
          width: '4',
          type: 'number',
          rules: [(v: string) => !!v || 'Error message goes here']
        }
      ],
      model: {}
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
