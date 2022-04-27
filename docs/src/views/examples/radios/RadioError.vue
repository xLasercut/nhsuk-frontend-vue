<template>
  <nhs-radios
    :items="items" v-model="model"
    label="Have you changed your name?" heading-size="m"
    hint="This includes changing your last name or spelling your name differently."
    :rules="rules" ref="radios"
  ></nhs-radios>
</template>

<script lang="ts">
import {defineComponent, onMounted, provide, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      model: 'no',
      items: [
        {
          label: 'Yes',
          value: 'yes'
        },
        {
          label: 'No',
          value: 'no'
        }
      ],
      rules: [
        (v: string) => v != 'no' || 'Please select an option'
      ]
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

    return {...toRefs(state)}
  }
})
</script>
