<template>
  <nhs-form-item :error="error">
    <nhs-label v-if="label" :for="id">
      <slot name="label" :label="label">{{ label }}</slot>
    </nhs-label>
    <nhs-hint-text element="div" v-if="hint" :id="hintId(id)">
      <slot name="hint" :hint="hint">{{ hint }}</slot>
    </nhs-hint-text>
    <nhs-error-text v-if="error" :id="errorId(id)">
      <slot name="error" :error="errorMsg">{{ errorMsg }}</slot>
    </nhs-error-text>
    <input
      :class="classes"
      :id="id"
      :name="name"
      :type="type"
      :aria-describedby="ariaDescribedby"
      v-bind="attributes"
      v-model="internalModel"
      :maxlength="maxlength"
      :inputmode="inputmode"
      :spellcheck="spellcheck"
      @blur="onBlur()"
      @focus="$emit('focus')"
      @change="onChange()"
      :autocomplete="autocomplete"
    />
  </nhs-form-item>
</template>

<script lang="ts">
import NhsFormItem from '../shared/form/NhsFormItem.vue'
import NhsHintText from '../hint-text/NhsHintText.vue'
import NhsLabel from '../label/NhsLabel.vue'
import NhsErrorText from '../error-text/NhsErrorText.vue'
import { computed, defineComponent, PropType } from 'vue'
import { NhsInputInputmode, NhsInputWidth } from './types'
import { getAttributes } from '../shared/helpers/attribute-helper'
import { randomString } from '../shared/helpers/random-string'
import { NhsFormItemValidateOn } from '../shared/form/types'
import { errorId, getAriaDescribedBy, hintId } from '../shared/form/aria-helper'
import { handleItemRegistry } from '../shared/form/form-item-registry'
import { getFormEvents } from '../shared/form/event-helper'
import { getInternalModel } from '../shared/form/v-model'
import { NHS_INPUT_WIDTHS } from './constants'

export default defineComponent({
  inheritAttrs: false,
  emits: ['update:model-value', 'focus', 'blur', 'change'],
  name: 'nhs-input',
  components: { NhsFormItem, NhsHintText, NhsLabel, NhsErrorText },
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
      type: String as PropType<NhsInputInputmode>
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
  setup(props, context) {
    const internalModel = getInternalModel(props, context)
    const { error, errorMsg, validator } = handleItemRegistry(props, internalModel)
    const attributes = getAttributes(['disabled'], props, context)

    const classes = computed((): string => {
      const classes = ['nhsuk-input']

      if (props.width) {
        classes.push(`nhsuk-input--width-${props.width}`)
      }

      if (error.value) {
        classes.push('nhsuk-input--error')
      }

      return classes.join(' ')
    })

    const ariaDescribedby = getAriaDescribedBy(props, error)
    const { onBlur, onChange } = getFormEvents(props, validator, context)

    return {
      classes,
      attributes,
      ariaDescribedby,
      hintId,
      errorId,
      onBlur,
      onChange,
      internalModel,
      error,
      errorMsg
    }
  }
})
</script>
