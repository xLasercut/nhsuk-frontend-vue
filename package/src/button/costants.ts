import NhsNormalButton from './types/NhsNormalButton.vue';
import NhsLinkButton from './types/NhsLinkButton.vue';

const BUTTON_COLORS = {
  primary: 'nhsuk-button',
  secondary: 'nhsuk-button nhsuk-button--secondary',
  reverse: 'nhsuk-button nhsuk-button--reverse'
};

const BUTTON_TYPES = {
  button: NhsNormalButton,
  a: NhsLinkButton
};

export { BUTTON_TYPES, BUTTON_COLORS };
