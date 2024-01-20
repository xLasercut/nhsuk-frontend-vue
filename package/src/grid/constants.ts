import {NhsColSize, NhsMainType} from './types';

const NHS_COL_SPANS: Record<NhsColSize, string> = {
  100: 'full',
  75: 'three-quarters',
  66: 'two-thirds',
  50: 'one-half',
  33: 'one-third',
  25: 'one-quarter'
};

const NHS_MAIN_TYPES: Record<NhsMainType, string> = {
  fluid: 'nhsuk-width-container-fluid',
  normal: 'nhsuk-width-container'
};

export { NHS_COL_SPANS, NHS_MAIN_TYPES };
