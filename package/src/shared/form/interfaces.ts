import { NhsFormItemValidateOn, NhsFormRule } from './types';

interface NhsFormInternalModelProps {
  modelValue: any;
}

interface NhsFormProps extends NhsFormInternalModelProps {
  rules: Array<NhsFormRule>;
  id: string;
  hint?: string;
  validateOn: NhsFormItemValidateOn;
}



export { NhsFormProps, NhsFormInternalModelProps };
