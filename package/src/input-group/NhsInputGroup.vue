<template>
  <nhs-form-item :error="errorStatus()">
    <nhs-fieldset
      :legend="label"
      :page-heading="pageHeading"
      :aria-describedby="ariaDescribedby"
      :size="headingSize"
    >
      <nhs-hint-text element="div" v-if="hint" :id="hintId(id)">
        <slot name="hint" :hint="hint">{{ hint }}</slot>
      </nhs-hint-text>
      <nhs-error-text v-if="errorStatus()" :id="errorId(id)">
        <slot name="error" :error="errorMsg()">{{ errorMsg() }}</slot>
      </nhs-error-text>
      <div class="nhsuk-date-input" :id="id">
        <nhs-input-group-item
          v-for="(item, index) in items"
          :label="item.label"
          :width="item.width"
          :type="item.type"
          :autocomplete="item.autocomplete"
          :inputmode="item.inputmode"
          :disabled="item.disabled || disabled"
          :id="itemGroupItemId(id, index)"
          :name="item.name"
          :rules="item.rules"
          :validate-on="item['validate-on']"
          v-model="internalModel[itemGroupItemId(id, index)]"
          :key="itemGroupItemId(id, index)"
          @change="onChange(id, index)"
          @blur="onBlur(id, index)"
          @focus="onFocus(id, index)"
        >
          <template #item-label>
            <slot name="item-label" :item="item"></slot>
          </template>
        </nhs-input-group-item>
      </div>
    </nhs-fieldset>
  </nhs-form-item>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, toRefs } from 'vue';
import NhsInputGroupItem from './components/NhsInputGroupItem.vue';
import NhsHintText from '../hint-text/NhsHintText.vue';
import NhsErrorText from '../error-text/NhsErrorText.vue';
import NhsFieldset from '../fieldset/NhsFieldset.vue';
import NhsFormItem from '../shared/form/NhsFormItem.vue';
import { randomString } from '../shared/helpers/random-string';
import { handleItemGroupRegistry } from '../shared/form/form-item-registry';
import { errorId, getItemGroupAriaDescribedBy, hintId } from '../shared/form/aria-helper';
import { getItemGroupFormEvents, itemGroupItemId } from '../shared/form/form-item-group';
import { NhsFieldsetSize } from '../fieldset/types';
import { NhsInputGroupItemConfig } from './interfaces';
import { getInternalModelItemGroup } from '../shared/form/v-model';

export default defineComponent({
  name: 'nhs-input-group',
  inheritAttrs: false,
  emits: ['blur', 'focus', 'change', 'update:model-value'],
  components: { NhsInputGroupItem, NhsHintText, NhsErrorText, NhsFieldset, NhsFormItem },
  props: {
    id: {
      type: String,
      default: (): string => {
        return `nhs-input-group-${randomString()}`;
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
        return false;
      }
    },
    pageHeading: {
      type: Boolean,
      default: (): boolean => {
        return false;
      }
    },
    items: {
      type: Array as PropType<Array<NhsInputGroupItemConfig>>,
      default: (): Array<NhsInputGroupItemConfig> => {
        return [];
      }
    },
    headingSize: {
      type: String as PropType<NhsFieldsetSize>
    },
    modelValue: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(props, context) {
    const state = getInternalModelItemGroup(props, context);
    const { errorStatus, errorMsg } = handleItemGroupRegistry(props);
    const ariaDescribedby = getItemGroupAriaDescribedBy(props, errorStatus);
    const { onBlur, onChange, onFocus } = getItemGroupFormEvents(context);

    return {
      errorStatus,
      errorMsg,
      hintId,
      errorId,
      ariaDescribedby,
      onChange,
      onBlur,
      onFocus,
      itemGroupItemId,
      ...toRefs(state)
    };
  }
});
</script>
