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
    <select
      :class="classes"
      :id="id"
      :name="name"
      v-bind="attributes"
      :aria-describedby="ariaDescribedby"
      v-model="internalModel"
      @blur="onBlur()"
      @change="onChange()"
      @focus="$emit('focus')"
    >
      <slot></slot>
    </select>
  </nhs-form-item>
</template>

<script setup lang="ts">
import { computed, PropType, useAttrs } from 'vue';
import NhsFormItem from '../shared/form/NhsFormItem.vue';
import NhsHintText from '../hint-text/NhsHintText.vue';
import NhsLabel from '../label/NhsLabel.vue';
import NhsErrorText from '../error-text/NhsErrorText.vue';
import { addAttributes } from '../shared/helpers/attribute-helper';
import { randomString } from '../shared/helpers/random-string';
import { NhsFormItemValidateOn, NhsFormRule } from '../shared/form/types';
import { errorId, getAriaDescribedBy, hintId } from '../shared/form/aria-helper';
import { handleItemRegistry } from '../shared/form/form-item-registry';
import { getInternalModel } from '../shared/form/v-model';
import { getFormEvents } from '../shared/form/event-helper';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-select'
});
const emit = defineEmits(['update:model-value', 'blur', 'change', 'focus']);
const props = defineProps({
  modelValue: {
    required: true
  },
  disabled: {
    type: Boolean,
    default: (): boolean => {
      return false;
    }
  },
  id: {
    type: String,
    default: (): string => {
      return `nhs-select-${randomString()}`;
    }
  },
  name: {
    type: String
  },
  rules: {
    type: Array as PropType<Array<NhsFormRule>>,
    default: (): Array<NhsFormRule> => {
      return [];
    }
  },
  label: {
    type: String,
    default: (): string => {
      return '';
    }
  },
  hint: {
    type: String,
    default: (): string => {
      return '';
    }
  },
  validateOn: {
    type: String as PropType<NhsFormItemValidateOn>,
    default: (): NhsFormItemValidateOn => {
      return 'blur';
    }
  }
});
const attrs = useAttrs();
const internalModel = getInternalModel(props, emit);
const { error, errorMsg, validator } = handleItemRegistry(props, internalModel);
const attributes = addAttributes(['disabled'], props, attrs);
const ariaDescribedby = getAriaDescribedBy(props, error);
const { onBlur, onChange } = getFormEvents(props, validator, emit);

const classes = computed((): string => {
  const classes = ['nhsuk-select'];

  if (error.value) {
    classes.push('nhsuk-select--error');
  }
  return classes.join(' ');
});
</script>
