interface NhsFormSate {
  formItemValidators: NhsFormItemValidators,
  formItemErrorStatuses: NhsFormItemErrorStatuses
}

interface NhsFormItemValidators {
  [key: string]: Function
}

interface NhsFormItemErrorStatuses {
  [key: string]: boolean
}

export {
  NhsFormSate
}
