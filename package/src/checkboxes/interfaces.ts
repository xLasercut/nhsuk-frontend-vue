import {NhsFormItemValidateOn} from '../shared/form/types'

interface NhsCheckboxesItemConfig {
  label: string
  value: string
  disabled?: boolean
  name?: string
  hint?: string
  conditional?: string
  'validate-on'?: NhsFormItemValidateOn
}

export {NhsCheckboxesItemConfig}
