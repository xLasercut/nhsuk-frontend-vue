import ErrorSummary from '../../views/examples/error-summary/ErrorSummary.vue';
import ErrorSummaryLinkToInput from '../../views/examples/error-summary/ErrorSummaryLinkToInput.vue';
import ErrorSummaryLinkToRadio from '../../views/examples/error-summary/ErrorSummaryLinkToRadio.vue';

const errorSummaryExampleRoutes = [
  {
    path: '/examples/error-summary',
    component: ErrorSummary,
    name: 'Error summary'
  },
  {
    path: '/examples/error-summary-link-to-input',
    component: ErrorSummaryLinkToInput,
    name: 'Error summary with link to an input field'
  },
  {
    path: '/examples/error-summary-link-to-radio',
    component: ErrorSummaryLinkToRadio,
    name: 'Error summary with link to a radio field'
  }
];

export { errorSummaryExampleRoutes };
