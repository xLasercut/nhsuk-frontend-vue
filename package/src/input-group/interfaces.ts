import { NhsInputInputmode, NhsInputWidth } from '../input/types';
import { NhsFormItemValidateOn } from '../shared/form/types';

interface NhsInputGroupState {
  errorMsgs: { [key: string]: Function };
  errorStatuses: { [key: string]: Function };
  validators: { [key: string]: Function };
  resets: { [key: string]: Function };
}

interface NhsInputGroupItemConfig {
  label?: string;
  width?: NhsInputWidth;
  type?: string;
  autocomplete?: string;
  disabled?: boolean;
  name?: string;
  inputmode?: NhsInputInputmode;
  'validate-on'?: NhsFormItemValidateOn;
  rules?: Array<Function>;
}

export { NhsInputGroupState, NhsInputGroupItemConfig };
