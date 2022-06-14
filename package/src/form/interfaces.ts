interface NhsFormSate {
  validators: NhsFormItemValidators
  errorStatuses: NhsFormItemErrorStatuses
  resets: NhsFormItemResets
}

interface NhsFormItemValidators {
  [key: string]: Function
}

interface NhsFormItemErrorStatuses {
  [key: string]: Function
}

interface NhsFormItemResets {
  [key: string]: Function
}

export { NhsFormSate }
