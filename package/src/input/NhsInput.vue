<template>
  <nhs-form-item :error="error">
    <nhs-label v-if="label" :for="id">
      <slot name="label" :label="label">{{label}}</slot>
    </nhs-label>
    <nhs-hint-text v-if="hint" :id="hintId()">
      <slot name="hint" :hint="hint">{{hint}}</slot>
    </nhs-hint-text>
    <nhs-error-text v-if="error" :id="errorId()">
      <slot name="error" :error="errorMsg">{{errorMsg}}</slot>
    </nhs-error-text>
    <input
      :class="classes" :id="id" :name="name" :type="type"
      :aria-describedby="ariaDescribedby"
      v-bind="attributes" v-model="internalModel"
      :maxlength="maxlength"
      :inputmode="inputmode" :spellcheck="spellcheck"
      @blur="onBlur()" @focus="$emit('focus')" @change="onChange()"
      :autocomplete="autocomplete"
      ref="form-item"
    >
  </nhs-form-item>
</template>

<script lang="ts">
import NhsFormItem from '../shared/form/NhsFormItem.vue'
import {computed, defineComponent, inject, onMounted, onUnmounted, PropType, reactive, toRefs, watch} from 'vue'
import {NhsInputWidth} from './types'
import {getAttributes} from '../shared/helpers/attribute-helper'
import {randomString} from '../shared/helpers/random-string'
import {NHS_FORM_INJECTS} from '../form/constants'
import {NhsFormInject} from '../form/types'
import {validate} from '../shared/form/validate-helper'
import {NhsFormItemValidateOn} from '../shared/form/types'

const NHS_INPUT_WIDTHS: Array<NhsInputWidth> = ['2', '3', '4', '5', '10', '20']

export default defineComponent({
  inheritAttrs: false,
  emits: ['update:model-value', 'focus', 'blur', 'change'],
  name: 'nhs-input',
  components: {NhsFormItem},
  props: {
    width: {
      type: String as PropType<NhsInputWidth>,
      validator: (val: NhsInputWidth): boolean => {
        return NHS_INPUT_WIDTHS.includes(val)
      }
    },
    type: {
      type: String,
      default: (): string => {
        return 'text'
      }
    },
    maxlength: {
      type: Number
    },
    autocomplete: {
      type: String
    },
    inputmode: {
      type: String
    },
    spellcheck: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    modelValue: {
      required: true
    },
    id: {
      type: String,
      default: (): string => {
        return `nhs-input-${randomString()}`
      }
    },
    name: {
      type: String
    },
    rules: {
      type: Array as PropType<Array<Function>>,
      default: (): Array<Function> => {
        return []
      }
    },
    label: {
      type: String,
      default: (): string => {
        return ''
      }
    },
    hint: {
      type: String,
      default: (): string => {
        return ''
      }
    },
    validateOn: {
      type: String as PropType<NhsFormItemValidateOn>,
      default: (): NhsFormItemValidateOn => {
        return 'blur'
      }
    }
  },
  setup: function (props, context) {
    const state = reactive({
      internalModel: props.modelValue,
      error: false,
      errorMsg: ''
    })

    function validator(): void {
      const {errorMsg, error} = validate(state.internalModel, props.rules)
      state.error = error
      state.errorMsg = errorMsg
    }

    function errorStatus(): boolean {
      return state.error
    }

    function reset(): void {
      state.error = false
      state.errorMsg = ''
    }

    const registerValidator = inject<NhsFormInject>(NHS_FORM_INJECTS.registerValidator, null)
    const registerErrorStatus = inject<NhsFormInject>(NHS_FORM_INJECTS.registerErrorStatus, null)
    const registerReset = inject<NhsFormInject>(NHS_FORM_INJECTS.registerReset, null)
    const unregisterItem = inject<NhsFormInject>(NHS_FORM_INJECTS.unregisterItem, null)

    watch(() => props.modelValue, (val) => {
      state.internalModel = val
    })

    watch(() => state.internalModel, (val) => {
      context.emit('update:model-value', val)
    })

    onMounted(() => {
      if (registerValidator) {
        registerValidator(props.id, validator)
      }

      if (registerErrorStatus) {
        registerErrorStatus(props.id, errorStatus)
      }

      if (registerReset) {
        registerReset(props.id, reset)
      }
    })

    onUnmounted(() => {
      if (unregisterItem) {
        unregisterItem(props.id)
      }
    })

    const attributes = computed(() => {
      return getAttributes(props.disabled, context.attrs)
    })

    function hintId(): string {
      return `${props.id}-hint`
    }

    function errorId(): string {
      return `${props.id}-error`
    }

    const classes = computed((): string => {
      const classes = ['nhsuk-input']

      if (props.width) {
        classes.push(`nhsuk-input--width-${props.width}`)
      }

      if (state.error) {
        classes.push('nhsuk-input--error')
      }

      return classes.join(' ')
    })

    const ariaDescribedby = computed((): string => {
      const describedby = []

      if (props.hint) {
        describedby.push(hintId())
      }

      if (state.error) {
        describedby.push(errorId())
      }

      return describedby.join(' ')
    })

    function onBlur(): void {
      if (props.validateOn === 'blur') {
        validator()
      }
      context.emit('blur')
    }

    function onChange(): void {
      if (props.validateOn === 'change') {
        validator()
      }
      context.emit('change')
    }

    return {
      classes,
      ...toRefs(state),
      attributes,
      ariaDescribedby,
      hintId,
      errorId,
      onBlur,
      onChange
    }
  }
})
</script>
