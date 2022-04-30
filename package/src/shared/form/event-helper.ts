import {NhsFormItemValidateOn} from './types'
import {SetupContext} from 'vue'
import {NhsVueProp} from '../interface'

function onFormEvent(name: string, validateOn: NhsFormItemValidateOn, validator: Function, context: SetupContext<any>, event: any): void {
  if (validateOn === name) {
    validator()
  }
  context.emit(name, event)
}

function getFormEvents(props: NhsVueProp, validator: Function, context: SetupContext<any>) {
  function onBlur(event: any = null): void {
    onFormEvent('blur', props.validateOn, validator, context, event)
  }

  function onChange(event: any = null): void {
    onFormEvent('change', props.validateOn, validator, context, event)
  }

  return {onBlur, onChange}
}

export {getFormEvents}
