import { reactive, Ref, ref, SetupContext, watch } from 'vue'
import { NhsVueProp } from '../interface'

function getInternalModel(props: NhsVueProp, context: SetupContext<any>): Ref {
  const internalModel = ref(props.modelValue)

  watch(
    () => internalModel.value,
    (val) => {
      context.emit('update:model-value', val)
    }
  )

  watch(
    () => props.modelValue,
    (val) => {
      internalModel.value = val
    }
  )

  return internalModel
}

function getInternalModelItemGroup(props: NhsVueProp, context: SetupContext<any>) {
  const state = reactive({
    internalModel: props.modelValue
  })

  watch(
    () => props.modelValue,
    (val) => {
      state.internalModel = val
    }
  )

  watch(
    () => state.internalModel,
    (val) => {
      context.emit('update:model-value', val)
    }
  )

  return state
}

export { getInternalModel, getInternalModelItemGroup }
