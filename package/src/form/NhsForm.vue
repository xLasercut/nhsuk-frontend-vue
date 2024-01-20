<template>
  <form @submit.prevent="onSubmit()" @reset.prevent="onReset()" v-bind="$attrs">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { provide, reactive, watch } from 'vue';
import { NhsFormSate } from './interfaces';
import { NHS_FORM_INJECTS } from '../shared/form/constants';
import {
  NhsFormErrorStatus,
  NhsFormRegisterErrorStatus, NhsFormRegisterReset,
  NhsFormRegisterValidator,
  NhsFormReset, NhsFormUnregisterItem,
  NhsFormValidator
} from "../shared/form/types";

defineOptions({
  inheritAttrs: false,
  name: 'nhs-form'
});

const emit = defineEmits(['submit', 'update:model-value', 'reset']);
defineProps({
  modelValue: {
    type: Boolean,
    default: (): boolean => {
      return true;
    }
  }
});

const state = reactive<NhsFormSate>({
  validators: {},
  errorStatuses: {},
  resets: {}
});

function registerValidator(id: string, validator: NhsFormValidator): void {
  state.validators[id] = validator;
}

function registerErrorStatus(id: string, errorStatus: NhsFormErrorStatus): void {
  state.errorStatuses[id] = errorStatus;
}

function registerReset(id: string, reset: NhsFormReset): void {
  state.resets[id] = reset;
}

function unregisterItem(id: string): void {
  delete state.validators[id];
  delete state.errorStatuses[id];
  delete state.resets[id];
}

provide<NhsFormRegisterValidator>(NHS_FORM_INJECTS.REGISTER_VALIDATOR, registerValidator);
provide<NhsFormRegisterErrorStatus>(NHS_FORM_INJECTS.REGISTER_ERROR_STATUS, registerErrorStatus);
provide<NhsFormRegisterReset>(NHS_FORM_INJECTS.REGISTER_RESET, registerReset);
provide<NhsFormUnregisterItem>(NHS_FORM_INJECTS.UNREGISTER_ITEM, unregisterItem);

function isFormValid(): boolean {
  for (const errorStatus of Object.values(state.errorStatuses)) {
    if (errorStatus()) {
      return false;
    }
  }
  return true;
}

function updateValid(valid: boolean): void {
  emit('update:model-value', valid);
}

function onSubmit(): void {
  for (const validator of Object.values(state.validators)) {
    validator();
  }
  const valid = isFormValid();
  updateValid(valid);
  emit('submit');
}

function onReset(): void {
  for (const reset of Object.values(state.resets)) {
    reset();
  }
  emit('reset');
}

watch(
  () => isFormValid(),
  (val) => {
    updateValid(val);
  }
);
</script>
