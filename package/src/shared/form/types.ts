type NhsFormItemValidateOn = 'blur' | 'change' | '';
type NhsFormRule = (v: any) => boolean | string;
type NhsFormValidator = () => void;
type NhsFormErrorStatus = () => boolean;
type NhsFormReset = () => void;
type NhsFormEmitEvent = 'blur' | 'change' | 'update:model-value' | 'focus';
type NhsFormEmitFunction = (event: NhsFormEmitEvent, ...args: Array<any>) => void;
type NhsFormRegisterValidator = (id: string, validator: NhsFormValidator) => void;
type NhsFormRegisterErrorStatus = (id: string, errorStatus: NhsFormErrorStatus) => void;
type NhsFormRegisterReset = (id: string, reset: NhsFormReset) => void;
type NhsFormUnregisterItem = (id: string) => void;

export {
  NhsFormItemValidateOn,
  NhsFormRule,
  NhsFormRegisterValidator,
  NhsFormEmitFunction,
  NhsFormEmitEvent,
  NhsFormRegisterErrorStatus,
  NhsFormRegisterReset,
  NhsFormUnregisterItem,
  NhsFormValidator,
  NhsFormErrorStatus,
  NhsFormReset
};
