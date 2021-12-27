import {inject, onMounted, onUnmounted, Ref, ref} from 'vue'
import {NhsFormInject} from '../../form/types'
import {NHS_FORM_INJECTS} from '../../form/constants'
import {NhsVueProp} from '../interface'

function validate(value: any, rules: Array<Function>) {
  for (const rule of rules) {
    const result = rule(value)
    if (typeof result === 'string') {
      return {
        errorMessage: result,
        errorStatus: true
      }
    }
  }

  return {
    errorMessage: '',
    errorStatus: false
  }
}

function handleItemRegistry(props: NhsVueProp, internalModel: Ref) {
  const error = ref(false)
  const errorMsg = ref('')

  function validator(): void {
    const {errorMessage, errorStatus} = validate(internalModel.value, props.rules)
    error.value = errorStatus
    errorMsg.value = errorMessage
  }

  function errorStatus(): boolean {
    return error.value
  }

  function reset(): void {
    error.value = false
    errorMsg.value = ''
  }

  const registerValidator = inject<NhsFormInject>(NHS_FORM_INJECTS.registerValidator, null)
  const registerErrorStatus = inject<NhsFormInject>(NHS_FORM_INJECTS.registerErrorStatus, null)
  const registerReset = inject<NhsFormInject>(NHS_FORM_INJECTS.registerReset, null)
  const unregisterItem = inject<NhsFormInject>(NHS_FORM_INJECTS.unregisterItem, null)

  onMounted(() => {
    if (registerValidator) {
      registerValidator(props.id, validator)
    }

    if (registerErrorStatus) {
      registerErrorStatus(props.id, errorStatus)
    }

    if (registerReset) {
      registerReset(props.id, reset)
    }
  })

  onUnmounted(() => {
    if (unregisterItem) {
      unregisterItem(props.id)
    }
  })

  return {error, errorMsg, validator}
}

export {handleItemRegistry}
