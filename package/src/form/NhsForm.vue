<template>
  <form @submit.prevent="onSubmit()" @reset.prevent="onReset()" v-bind="$attrs">
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
  emits: ['submit', 'update:model-value', 'reset'],
  props: {
    modelValue: {
      type: Boolean,
      default: (): boolean => {
        return true
      }
    }
  },
  setup(_props, context) {
    const state = reactive<NhsFormSate>({
      validators: {},
      errorStatuses: {},
      resets: {}
    })

    function registerValidator(id: string, validator: Function): void {
      state.validators[id] = validator
    }

    function registerErrorStatus(id: string, errorStatus: Function): void {
      state.errorStatuses[id] = errorStatus
    }

    function registerReset(id: string, reset: Function): void {
      state.resets[id] = reset
    }

    function unregisterItem(id: string): void {
      delete state.validators[id]
      delete state.errorStatuses[id]
      delete state.resets[id]
    }

    provide(NHS_FORM_INJECTS.registerValidator, registerValidator)
    provide(NHS_FORM_INJECTS.registerErrorStatus, registerErrorStatus)
    provide(NHS_FORM_INJECTS.registerReset, registerReset)
    provide(NHS_FORM_INJECTS.unregisterItem, unregisterItem)

    function isFormValid(): boolean {
      for (const errorStatus of Object.values(state.errorStatuses)) {
        if (errorStatus()) {
          return false
        }
      }
      return true
    }

    function updateValid(valid: boolean): void {
      context.emit('update:model-value', valid)
    }

    function onSubmit(): void {
      for (const validator of Object.values(state.validators)) {
        validator()
      }
      const valid = isFormValid()
      updateValid(valid)
      context.emit('submit')
    }

    function onReset(): void {
      for (const reset of Object.values(state.resets)) {
        reset()
      }
      context.emit('reset')
    }

    watch(() => isFormValid(), (val) => {
      updateValid(val)
    })

    return {onSubmit, onReset}
  }
})
</script>
