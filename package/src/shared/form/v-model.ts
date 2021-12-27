import {Ref, ref, SetupContext, watch} from 'vue'
import {NhsVueProp} from '../interface'

function getInternalModel(props: NhsVueProp, context: SetupContext<any>): Ref {
  const internalModel = ref(props.modelValue)

  watch(() => internalModel.value, (val) => {
    context.emit('update:model-value', val)
  })

  watch(() => props.modelValue, (val) => {
    internalModel.value = val
  })

  return internalModel
}

export {getInternalModel}
