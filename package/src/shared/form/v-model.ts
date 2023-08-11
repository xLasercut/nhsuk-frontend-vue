import { reactive, ref, Ref, watch } from 'vue';
import { NhsVueProp } from '../interface';
import { NhsFormInternalModelProps } from './interfaces';
import { NhsFormEmitFunction } from './types';

function getInternalModel(props: NhsFormInternalModelProps, emit: NhsFormEmitFunction): Ref {
  const internalModel = ref(props.modelValue);

  watch(
    () => internalModel.value,
    (val) => {
      emit('update:model-value', val);
    }
  );

  watch(
    () => props.modelValue,
    (val) => {
      internalModel.value = val;
    }
  );

  return internalModel;
}

function getInternalModelItemGroup(props: NhsVueProp, context: any) {
  const state = reactive({
    internalModel: props.modelValue
  });

  watch(
    () => props.modelValue,
    (val) => {
      state.internalModel = val;
    }
  );

  watch(
    () => state.internalModel,
    (val) => {
      context.emit('update:model-value', val);
    }
  );

  return state;
}

export { getInternalModel, getInternalModelItemGroup };
