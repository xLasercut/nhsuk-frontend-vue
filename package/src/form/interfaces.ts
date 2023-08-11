import { NhsFormErrorStatus, NhsFormReset, NhsFormValidator } from '../shared/form/types';

interface NhsFormSate {
  validators: NhsFormItemValidators;
  errorStatuses: NhsFormItemErrorStatuses;
  resets: NhsFormItemResets;
}

interface NhsFormItemValidators {
  [key: string]: NhsFormValidator;
}

interface NhsFormItemErrorStatuses {
  [key: string]: NhsFormErrorStatus;
}

interface NhsFormItemResets {
  [key: string]: NhsFormReset;
}

export { NhsFormSate };
