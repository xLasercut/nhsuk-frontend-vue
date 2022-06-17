<template>
  <div class="nhsuk-date-input__item">
    <nhs-form-item :error="false">
      <nhs-label class="nhsuk-date-input__label" :for="id" v-if="label">
        <slot name="item-label">{{ label }}</slot>
      </nhs-label>
      <input
        :class="classes"
        :id="id"
        :name="name"
        :type="type"
        :autocomplete="autocomplete"
        :inputmode="inputmode"
        v-model="internalModel"
        v-bind="attributes"
        @change="onChange()"
        @blur="onBlur()"
        @focus="$emit('focus')"
      />
    </nhs-form-item>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import NhsFormItem from '../../shared/form/NhsFormItem.vue';
import NhsLabel from '../../label/NhsLabel.vue';
import { getInternalModel } from '../../shared/form/v-model';
import { getAttributes } from '../../shared/helpers/attribute-helper';
import { NhsInputInputmode, NhsInputWidth } from '../../input/types';
import { NHS_INPUT_WIDTHS } from '../../input/constants';
import { handleItemGroupItemRegistry } from '../../shared/form/form-item-registry';
import { getFormEvents } from '../../shared/form/event-helper';
import { NhsFormItemValidateOn } from '../../shared/form/types';

export default defineComponent({
  components: { NhsLabel, NhsFormItem },
  inheritAttrs: false,
  emits: ['update:model-value', 'blur', 'change', 'focus'],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    type: {
      type: String,
      default: (): string => {
        return 'text';
      }
    },
    width: {
      type: String as PropType<NhsInputWidth>,
      validator: (val: NhsInputWidth): boolean => {
        return NHS_INPUT_WIDTHS.includes(val);
      }
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false;
      }
    },
    label: {
      type: String
    },
    autocomplete: {
      type: String
    },
    rules: {
      type: Array as PropType<Array<Function>>,
      default: (): Array<Function> => {
        return [];
      }
    },
    inputmode: {
      type: String as PropType<NhsInputInputmode>
    },
    modelValue: {
      required: true
    },
    validateOn: {
      type: String as PropType<NhsFormItemValidateOn>,
      default: (): NhsFormItemValidateOn => {
        return 'blur';
      }
    }
  },
  setup(props, context) {
    const internalModel = getInternalModel(props, context);
    const { error, validator } = handleItemGroupItemRegistry(props, internalModel);
    const { onChange, onBlur } = getFormEvents(props, validator, context);

    const classes = computed((): string => {
      const classes = ['nhsuk-input nhsuk-date-input__input'];

      if (props.width) {
        classes.push(`nhsuk-input--width-${props.width}`);
      }

      if (error.value) {
        classes.push('nhsuk-input--error');
      }

      return classes.join(' ');
    });

    const attributes = getAttributes(['disabled'], props, context);

    return {
      classes,
      internalModel,
      attributes,
      onChange,
      onBlur
    };
  }
});
</script>
