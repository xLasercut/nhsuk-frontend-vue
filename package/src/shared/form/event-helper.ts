import {NhsFormItemValidateOn} from './types'
import {SetupContext} from 'vue'
import {NhsVueProp} from '../interface'

function onFormEvent(name: string, validateOn: NhsFormItemValidateOn, validator: Function, context: SetupContext<any>): void {
  if (validateOn === name) {
    validator()
  }
  context.emit(name)
}

function getFormEvents(props: NhsVueProp, validator: Function, context: SetupContext<any>) {
  function onBlur(): void {
    onFormEvent('blur', props.validateOn, validator, context)
  }

  function onChange(): void {
    onFormEvent('change', props.validateOn, validator, context)
  }

  return {onBlur, onChange}
}

export {getFormEvents}
