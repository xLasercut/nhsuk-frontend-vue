import { NhsCareCardType } from './types';

const CARE_CARD_TYPES: Record<NhsCareCardType, string> = {
  'non-urgent': 'Non-urgent advice: ',
  urgent: 'Urgent advice: ',
  emergency: 'Immediate action required: '
};
export { CARE_CARD_TYPES };
