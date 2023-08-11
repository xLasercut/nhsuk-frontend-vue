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

<script setup lang="ts">
import NhsFormItem from '../shared/form/NhsFormItem.vue';
import NhsHintText from '../hint-text/NhsHintText.vue';
import NhsLabel from '../label/NhsLabel.vue';
import NhsErrorText from '../error-text/NhsErrorText.vue';
import { computed, PropType, useAttrs } from 'vue';
import { NhsInputInputmode, NhsInputWidth } from './types';
import { addAttributes } from '../shared/helpers/attribute-helper';
import { randomString } from '../shared/helpers/random-string';
import { NhsFormItemValidateOn, NhsFormRule } from '../shared/form/types';
import { errorId, getAriaDescribedBy, hintId } from '../shared/form/aria-helper';
import { handleItemRegistry } from '../shared/form/form-item-registry';
import { getFormEvents } from '../shared/form/event-helper';
import { getInternalModel } from '../shared/form/v-model';
import { NHS_INPUT_WIDTHS } from './constants';

defineOptions({
  name: 'nhs-input',
  inheritAttrs: false
});

const emit = defineEmits(['update:model-value', 'focus', 'blur', 'change']);
const props = defineProps({
  validateOn: {
    type: String as PropType<NhsFormItemValidateOn>,
    default: (): NhsFormItemValidateOn => {
      return 'blur';
    }
  },
  modelValue: {
    required: true
  },
  id: {
    type: String,
    default: (): string => {
      return `nhs-input-${randomString()}`;
    }
  },
  rules: {
    type: Array as PropType<Array<NhsFormRule>>,
    default: (): Array<NhsFormRule> => {
      return [];
    }
  },
  width: {
    type: String as PropType<NhsInputWidth>,
    validator: (val: NhsInputWidth): boolean => {
      if (!val) {
        return true;
      }

      return NHS_INPUT_WIDTHS.includes(val);
    }
  },
  type: {
    type: String,
    default: (): string => {
      return 'text';
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
      return false;
    }
  },
  name: {
    type: String
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
  }
});
const attrs = useAttrs();

const internalModel = getInternalModel(props, emit);
const { error, errorMsg, validator } = handleItemRegistry(props, internalModel);
const attributes = addAttributes(['disabled'], props, attrs);

const classes = computed((): string => {
  const classes = ['nhsuk-input'];

  if (props.width) {
    classes.push(`nhsuk-input--width-${props.width}`);
  }

  if (error.value) {
    classes.push('nhsuk-input--error');
  }

  return classes.join(' ');
});

const ariaDescribedby = getAriaDescribedBy(props, error);
const { onBlur, onChange } = getFormEvents(props, validator, emit);
</script>
