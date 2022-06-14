import { inject, onMounted, onUnmounted, provide, reactive, Ref, ref } from 'vue'
import { NhsFormInject } from '../../form/types'
import { NHS_FORM_INJECTS } from './constants'
import { NhsVueProp } from '../interface'
import { NhsInputGroupState } from '../../input-group/interfaces'

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
    const { errorMessage, errorStatus } = validate(internalModel.value, props.rules)
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

  return { error, errorMsg, validator }
}

function handleItemGroupItemRegistry(props: NhsVueProp, internalModel: Ref) {
  const error = ref(false)
  const errorMsg = ref('')

  function validator(): void {
    const { errorMessage, errorStatus } = validate(internalModel.value, props.rules)
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

  function errorMessage(): string {
    return errorMsg.value
  }

  const registerItemValidator = inject<NhsFormInject>(NHS_FORM_INJECTS.registerItemValidator, null)
  const registerItemErrorStatus = inject<NhsFormInject>(
    NHS_FORM_INJECTS.registerItemErrorStatus,
    null
  )
  const registerItemReset = inject<NhsFormInject>(NHS_FORM_INJECTS.registerItemReset, null)
  const registerItemErrorMsg = inject<NhsFormInject>(NHS_FORM_INJECTS.registerItemErrorMsg, null)
  const unregisterItemGroupItem = inject<NhsFormInject>(
    NHS_FORM_INJECTS.unregisterItemGroupItem,
    null
  )

  onMounted(() => {
    if (registerItemValidator) {
      registerItemValidator(props.id, validator)
    }

    if (registerItemErrorStatus) {
      registerItemErrorStatus(props.id, errorStatus)
    }

    if (registerItemErrorMsg) {
      registerItemErrorMsg(props.id, errorMessage)
    }

    if (registerItemReset) {
      registerItemReset(props.id, reset)
    }
  })

  onUnmounted(() => {
    if (unregisterItemGroupItem) {
      unregisterItemGroupItem(props.id)
    }
  })

  return { error, errorMsg, validator }
}

function handleItemGroupRegistry(props: NhsVueProp) {
  const state = reactive<NhsInputGroupState>({
    errorMsgs: {},
    validators: {},
    errorStatuses: {},
    resets: {}
  })

  function registerItemValidator(id: string, validator: Function): void {
    state.validators[id] = validator
  }

  function registerItemErrorStatus(id: string, errorStatus: Function): void {
    state.errorStatuses[id] = errorStatus
  }

  function registerItemReset(id: string, reset: Function): void {
    state.resets[id] = reset
  }

  function registerItemErrorMsg(id: string, errorMsg: Function): void {
    state.errorMsgs[id] = errorMsg
  }

  function unregisterItemGroupItem(id: string): void {
    delete state.validators[id]
    delete state.errorStatuses[id]
    delete state.resets[id]
    delete state.errorMsgs[id]
  }

  provide(NHS_FORM_INJECTS.registerItemValidator, registerItemValidator)
  provide(NHS_FORM_INJECTS.registerItemReset, registerItemReset)
  provide(NHS_FORM_INJECTS.registerItemErrorStatus, registerItemErrorStatus)
  provide(NHS_FORM_INJECTS.registerItemErrorMsg, registerItemErrorMsg)
  provide(NHS_FORM_INJECTS.unregisterItemGroupItem, unregisterItemGroupItem)

  function reset(): void {
    for (const itemReset of Object.values(state.resets)) {
      itemReset()
    }
  }

  function validator(): void {
    for (const validator of Object.values(state.validators)) {
      validator()
    }
  }

  function errorStatus(): boolean {
    for (const itemErrorStatus of Object.values(state.errorStatuses)) {
      if (itemErrorStatus()) {
        return true
      }
    }

    return false
  }

  function errorMsg(): string {
    for (const id in state.errorStatuses) {
      if (state.errorStatuses[id]()) {
        return state.errorMsgs[id]()
      }
    }

    return ''
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

  return { errorStatus, errorMsg, validator }
}

export { handleItemRegistry, handleItemGroupItemRegistry, handleItemGroupRegistry }
