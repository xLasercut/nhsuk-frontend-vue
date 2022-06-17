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
    <textarea
      :class="classes"
      :id="id"
      :rows="rows"
      :name="name"
      v-model="internalModel"
      v-bind="attributes"
      :aria-describedby="ariaDescribedby"
      @blur="onBlur()"
      @change="onChange()"
      @focus="$emit('focus')"
      :autocomplete="autocomplete"
    ></textarea>
  </nhs-form-item>
</template>

<script lang="ts">
import NhsFormItem from '../shared/form/NhsFormItem.vue';
import NhsHintText from '../hint-text/NhsHintText.vue';
import NhsLabel from '../label/NhsLabel.vue';
import NhsErrorText from '../error-text/NhsErrorText.vue';
import { computed, defineComponent, PropType } from 'vue';
import { randomString } from '../shared/helpers/random-string';
import { NhsFormItemValidateOn } from '../shared/form/types';
import { getInternalModel } from '../shared/form/v-model';
import { handleItemRegistry } from '../shared/form/form-item-registry';
import { getAttributes } from '../shared/helpers/attribute-helper';
import { errorId, getAriaDescribedBy, hintId } from '../shared/form/aria-helper';
import { getFormEvents } from '../shared/form/event-helper';

export default defineComponent({
  name: 'nhs-textarea',
  inheritAttrs: false,
  emits: ['update:model-value', 'blur', 'change', 'focus'],
  components: { NhsFormItem, NhsHintText, NhsErrorText, NhsLabel },
  props: {
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
      type: Array as PropType<Array<Function>>,
      default: (): Array<Function> => {
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
    },
    rows: {
      type: Number,
      default: (): number => {
        return 5;
      }
    },
    autocomplete: {
      type: String
    }
  },
  setup(props, context) {
    const internalModel = getInternalModel(props, context);
    const { error, errorMsg, validator } = handleItemRegistry(props, internalModel);
    const attributes = getAttributes(['disabled'], props, context);
    const ariaDescribedby = getAriaDescribedBy(props, error);
    const { onBlur, onChange } = getFormEvents(props, validator, context);

    const classes = computed((): string => {
      const classes = ['nhsuk-textarea'];

      if (error.value) {
        classes.push('nhsuk-textarea--error');
      }

      return classes.join(' ');
    });

    return {
      classes,
      internalModel,
      error,
      errorMsg,
      attributes,
      ariaDescribedby,
      onBlur,
      onChange,
      hintId,
      errorId
    };
  }
});
</script>
