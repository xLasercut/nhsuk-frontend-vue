import { NhsFormEmitEvent, NhsFormEmitFunction, NhsFormItemValidateOn } from './types';
import { NhsFormProps } from './interfaces';

function onFormEvent(
  name: NhsFormEmitEvent,
  validateOn: NhsFormItemValidateOn,
  validator: Function,
  emit: NhsFormEmitFunction,
  event: any
): void {
  if (validateOn === name) {
    validator();
  }
  emit(name, event);
}

function getFormEvents(props: NhsFormProps, validator: Function, emit: NhsFormEmitFunction) {
  function onBlur(event: any = null): void {
    onFormEvent('blur', props.validateOn, validator, emit, event);
  }

  function onChange(event: any = null): void {
    onFormEvent('change', props.validateOn, validator, emit, event);
  }

  return { onBlur, onChange };
}

export { getFormEvents };
