<template>
  <form @submit.prevent="onSubmit()" v-bind="$attrs">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import {defineComponent, provide, reactive, watch} from 'vue'
import {NhsFormSate} from './interfaces'
import {NHS_FORM_INJECTS} from './constants'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-form',
  emits: ['submit', 'update:valid'],
  props: {
    valid: {
      type: Boolean,
      default: (): boolean => {
        return true
      }
    }
  },
  setup(_props, context) {
    const state = reactive<NhsFormSate>({
      formItemValidators: {},
      formItemErrorStatuses: {}
    })

    function registerFormItemValidator(itemId: string, validator: Function): void {
      state.formItemValidators[itemId] = validator
    }

    function registerFormItemErrorStatus(itemId: string, status: boolean): void {
      state.formItemErrorStatuses[itemId] = status
      const valid = isFormValid()
      context.emit('update:valid', valid)
    }

    function unregisterFormItem(itemId: string): void {
      delete state.formItemErrorStatuses[itemId]
      delete state.formItemValidators[itemId]
    }

    provide(NHS_FORM_INJECTS.registerFormItemValidator, registerFormItemValidator)
    provide(NHS_FORM_INJECTS.registerFormItemErrorStatus, registerFormItemErrorStatus)
    provide(NHS_FORM_INJECTS.unregisterFormItem, unregisterFormItem)

    function isFormValid(): boolean {
      for (const error of Object.values(state.formItemErrorStatuses)) {
        if (error) {
          return false
        }
      }
      return true
    }

    function onSubmit(): void {
      for (const validator of Object.values(state.formItemValidators)) {
        validator()
      }
      context.emit('submit')
    }

    return {onSubmit}
  }
})
</script>
