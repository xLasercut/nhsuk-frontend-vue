<template>
  <nhs-form-item :error="error">
    <nhs-fieldset
      :legend="label"
      :page-heading="pageHeading"
      :aria-describedby="ariaDescribedby"
      :size="headingSize"
    >
      <nhs-hint-text v-if="hint" :id="hintId(id)">
        <slot name="hint" :hint="hint">{{hint}}</slot>
      </nhs-hint-text>
      <nhs-error-text v-if="error" :id="errorId(id)">
        <slot name="error" :error="errorMsg">{{errorMsg}}</slot>
      </nhs-error-text>
      <div class="nhsuk-checkboxes">
        <nhs-checkbox
          v-for="(item, index) in items"
          :label="item.label"
          :hint="item.hint"
          :disabled="item.disabled || disabled"
          :id="`${id}-${index + 1}`" :name="item.name" :checkbox-value="item.value"
          v-model="internalModel" :key="`${id}-${index}`"
          @blur="onBlur"
          @change="onChange"
          @focus="$emit('focus', $event)"
        >
          <template #item-label>
            <slot name="item-label" :item="item"></slot>
          </template>
          <template #item-hint>
            <slot name="item-hint" :item="item"></slot>
          </template>
          <template #item-conditional>
            <slot name="item-conditional" :item="item"></slot>
          </template>
        </nhs-checkbox>
      </div>
    </nhs-fieldset>
  </nhs-form-item>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import NhsCheckbox from './component/NhsCheckbox.vue'
import NhsFormItem from '../shared/form/NhsFormItem.vue'
import {getInternalModel} from '../shared/form/v-model'
import {randomString} from '../shared/helpers/random-string'
import {NhsFieldsetSize} from '../fieldset/types'
import {handleItemRegistry} from '../shared/form/form-item-registry'
import {getFormEvents} from '../shared/form/event-helper'
import {errorId, getAriaDescribedBy, hintId} from '../shared/form/aria-helper'
import {NhsCheckboxesItemConfig} from './interfaces'
import {NhsFormItemValidateOn} from '../shared/form/types'
import NhsFieldset from '../fieldset/NhsFieldset.vue'
import NhsErrorText from '../error-text/NhsErrorText.vue'
import NhsHintText from '../hint-text/NhsHintText.vue'

export default defineComponent({
  name: 'nhs-checkboxes',
  inheritAttrs: false,
  emits: ['update:model-value', 'blur', 'change', 'focus'],
  components: { NhsCheckbox, NhsFormItem, NhsFieldset, NhsErrorText, NhsHintText },
  props: {
    id: {
      type: String,
      default: (): string => {
        return `nhs-checkbox-${randomString()}`
      }
    },
    hint: {
      type: String
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    pageHeading: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    headingSize: {
      type: String as PropType<NhsFieldsetSize>
    },
    modelValue: {
      type: Object,
      default: () => {
        return {}
      }
    },
    items: {
      type: Array as PropType<Array<NhsCheckboxesItemConfig>>,
      default: () => {
        return []
      }
    },
    rules: {
      type: Array as PropType<Array<Function>>,
      default: (): Array<Function> => {
        return []
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
    const {error, errorMsg, validator} = handleItemRegistry(props, internalModel)

    const ariaDescribedby = getAriaDescribedBy(props, error)
    const {onBlur, onChange} = getFormEvents(props, validator, context)

    return {
      internalModel,
      error,
      errorMsg,
      ariaDescribedby,
      errorId,
      hintId,
      onBlur,
      onChange
    }
  }
})
</script>
