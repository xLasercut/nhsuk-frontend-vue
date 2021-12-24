import {ref, watch} from 'vue'

function getVModel(modelValue: any, context: any) {
  const internalModel = ref(modelValue)

  watch(() => internalModel.value, (val) => {
    context.emit('update:model-value', val)
  })

  watch(() => modelValue, (val) => {
    internalModel.value = val
  })

  return internalModel
}

export {getVModel}
