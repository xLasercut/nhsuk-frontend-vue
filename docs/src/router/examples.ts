import { filterRoutes } from '../assets/helpers';
import ExamplesHome from '../views/examples/ExamplesHome.vue';
import BackLink from '../views/examples/back-link/BackLink.vue';
import Breadcrumb from '../views/examples/breadcrumb/Breadcrumb.vue';
import Button from '../views/examples/button/Button.vue';
import ButtonLink from '../views/examples/button/ButtonLink.vue';
import ButtonDisabled from '../views/examples/button/ButtonDisabled.vue';
import ButtonSecondary from '../views/examples/button/ButtonSecondary.vue';
import ButtonReversed from '../views/examples/button/ButtonReversed.vue';
import ContentsList from '../views/examples/contents/ContentsList.vue';
import Details from '../views/examples/details/Details.vue';
import DoDont from '../views/examples/do-dont/DoDont.vue';
import ErrorText from '../views/examples/error-text/ErrorText.vue';
import HintText from '../views/examples/hint-text/HintText.vue';
import InsetText from '../views/examples/inset-text/InsetText.vue';
import Label from '../views/examples/label/Label.vue';
import LabelBold from '../views/examples/label/LabelBold.vue';
import LabelHeading from '../views/examples/label/LabelHeading.vue';
import Expander from '../views/examples/expander/Expander.vue';
import ExpanderGroup from '../views/examples/expander/ExpanderGroup.vue';
import Fieldset from '../views/examples/fieldset/Fieldset.vue';
import FieldsetHeading from '../views/examples/fieldset/FieldsetHeading.vue';
import FieldsetInput from '../views/examples/fieldset/FieldsetInput.vue';
import Footer from '../views/examples/footer/Footer.vue';
import Hero from '../views/examples/hero/Hero.vue';
import HeroImage from '../views/examples/hero/HeroImage.vue';
import HeroImageText from '../views/examples/hero/HeroImageText.vue';
import Image from '../views/examples/image/Image.vue';
import ListPanel from '../views/examples/list-panel/ListPanel.vue';
import NavAZ from '../views/examples/nav-az/NavAZ.vue';
import Pagination from '../views/examples/pagination/Pagination.vue';
import ReviewDate from '../views/examples/review-date/ReviewDate.vue';
import SkipLink from '../views/examples/skip-link/SkipLink.vue';
import SummaryList from '../views/examples/summary-list/SummaryList.vue';
import SummaryListNoAction from '../views/examples/summary-list/SummaryListNoAction.vue';
import SummaryListNoBorder from '../views/examples/summary-list/SummaryListNoBorder.vue';
import Tag from '../views/examples/tag/Tag.vue';
import WarningCallout from '../views/examples/warning-callout/WarningCallout.vue';
import WarningCalloutNonImportant from '../views/examples/warning-callout/WarningCalloutNonImportant.vue';
import Table from '../views/examples/table/Table.vue';
import TablePanel from '../views/examples/table/TablePanel.vue';
import TableResponsive from '../views/examples/table/TableResponsive.vue';
import Input from 'nhsuk-frontend-vue-docs/src/views/examples/input/Input.vue';
import InputAutocomplete from 'nhsuk-frontend-vue-docs/src/views/examples/input/InputAutocomplete.vue';
import InputHint from 'nhsuk-frontend-vue-docs/src/views/examples/input/InputHint.vue';
import InputError from 'nhsuk-frontend-vue-docs/src/views/examples/input/InputError.vue';
import InputWidth from 'nhsuk-frontend-vue-docs/src/views/examples/input/InputWidth.vue';
import Select from '../views/examples/select/Select.vue';
import SelectError from '../views/examples/select/SelectError.vue';
import Textarea from '../views/examples/textarea/Textarea.vue';
import TextareaAutocomplete from '../views/examples/textarea/TextareaAutocomplete.vue';
import TextareaError from '../views/examples/textarea/TextareaError.vue';
import DateInput from '../views/examples/input-group/DateInput.vue';
import DateInputAutocomplete from '../views/examples/input-group/DateInputAutocomplete.vue';
import DateInputError from '../views/examples/input-group/DateInputError.vue';
import DateInputErrorMulti from '../views/examples/input-group/DateInputErrorMulti.vue';
import Radio from '../views/examples/radios/Radio.vue';
import RadioInline from '../views/examples/radios/RadioInline.vue';
import RadioDisabled from '../views/examples/radios/RadioDisabled.vue';
import RadioDivider from '../views/examples/radios/RadioDivider.vue';
import RadioHint from '../views/examples/radios/RadioHint.vue';
import RadioNoHeading from '../views/examples/radios/RadioNoHeading.vue';
import RadioError from '../views/examples/radios/RadioError.vue';
import RadioConditional from '../views/examples/radios/RadioConditional.vue';
import { cardExampleRoutes } from './examples/card';
import { careCardExampleRoutes } from './examples/care-card';
import { actionLinkExampleRoutes } from './examples/action-link';
import { checkboxesExampleRoutes } from './examples/checkboxes';
import { headerExampleRoutes } from './examples/header';
import { errorSummaryExampleRoutes } from './examples/error-summary';

const examplesRoutes = [
  {
    path: '',
    component: ExamplesHome,
    name: 'Examples'
  },
  ...actionLinkExampleRoutes,
  {
    path: '/examples/back-link',
    component: BackLink,
    name: 'Back link'
  },
  {
    path: '/examples/breadcrumb',
    component: Breadcrumb,
    name: 'Breadcrumb'
  },
  {
    path: '/examples/button',
    component: Button,
    name: 'Button'
  },
  {
    path: '/examples/button-link',
    component: ButtonLink,
    name: 'Button as a link'
  },
  {
    path: '/examples/button-disabled',
    component: ButtonDisabled,
    name: 'Button disabled'
  },
  {
    path: '/examples/button-secondary',
    component: ButtonSecondary,
    name: 'Button secondary'
  },
  {
    path: '/examples/button-reversed',
    component: ButtonReversed,
    name: 'Button reverse'
  },
  ...cardExampleRoutes,
  ...careCardExampleRoutes,
  {
    path: '/examples/contents-list',
    component: ContentsList,
    name: 'Contents list'
  },
  {
    path: '/examples/details',
    component: Details,
    name: 'Details'
  },
  {
    path: '/examples/do-dont',
    component: DoDont,
    name: "Do and Don't list"
  },
  ...errorSummaryExampleRoutes,
  {
    path: '/examples/error-text',
    component: ErrorText,
    name: 'Error message'
  },
  {
    path: '/examples/hint-text',
    component: HintText,
    name: 'Hint'
  },
  {
    path: '/examples/inset-text',
    component: InsetText,
    name: 'Inset text'
  },
  {
    path: '/examples/label',
    component: Label,
    name: 'Label'
  },
  {
    path: '/examples/label-bold',
    component: LabelBold,
    name: 'Label with bold text'
  },
  {
    path: '/examples/label-heading',
    component: LabelHeading,
    name: 'Label as page heading'
  },
  {
    path: '/examples/expander',
    component: Expander,
    name: 'Expander'
  },
  {
    path: '/examples/expander-group',
    component: ExpanderGroup,
    name: 'Expander group'
  },
  {
    path: '/examples/fieldset',
    component: Fieldset,
    name: 'Fieldset'
  },
  {
    path: '/examples/fieldset-heading',
    component: FieldsetHeading,
    name: 'Fieldset as page heading'
  },
  {
    path: '/examples/fieldset-input',
    component: FieldsetInput,
    name: 'Fieldset with inputs'
  },
  {
    path: '/examples/footer',
    component: Footer,
    name: 'Footer'
  },
  ...headerExampleRoutes,
  {
    path: '/examples/hero',
    component: Hero,
    name: 'Hero'
  },
  {
    path: '/examples/hero-image',
    component: HeroImage,
    name: 'Hero with image'
  },
  {
    path: '/examples/hero-image-text',
    component: HeroImageText,
    name: 'Hero with image with content'
  },
  {
    path: '/examples/image',
    component: Image,
    name: 'Images'
  },
  {
    path: '/examples/list-panel',
    component: ListPanel,
    name: 'List Panel'
  },
  {
    path: '/examples/nav-az',
    component: NavAZ,
    name: 'Nav AZ'
  },
  {
    path: '/examples/pagination',
    component: Pagination,
    name: 'Pagination'
  },
  {
    path: '/examples/review-date',
    component: ReviewDate,
    name: 'Review date'
  },
  {
    path: '/examples/skip-link',
    component: SkipLink,
    name: 'Skip link'
  },
  {
    path: '/examples/summary-list',
    component: SummaryList,
    name: 'Summary list'
  },
  {
    path: '/examples/summary-list-no-action',
    component: SummaryListNoAction,
    name: 'Summary list without actions'
  },
  {
    path: '/examples/summary-list-no-border',
    component: SummaryListNoBorder,
    name: 'Summary list without border'
  },
  {
    path: '/examples/tag',
    component: Tag,
    name: 'Tag'
  },
  {
    path: '/examples/warning-callout',
    component: WarningCallout,
    name: 'Warning callout'
  },
  {
    path: '/examples/warning-callout-non-important',
    component: WarningCalloutNonImportant,
    name: 'Warning callout with custom heading'
  },
  {
    path: '/examples/table',
    component: Table,
    name: 'Table'
  },
  {
    path: '/examples/table-panel',
    component: TablePanel,
    name: 'Table as a panel'
  },
  {
    path: '/examples/table-responsive',
    component: TableResponsive,
    name: 'Responsive table'
  },
  {
    path: '/examples/input',
    component: Input,
    name: 'Input'
  },
  {
    path: '/examples/input-autocomplete',
    component: InputAutocomplete,
    name: 'Input with autocomplete attribute'
  },
  {
    path: '/examples/input-hint',
    component: InputHint,
    name: 'Input with hint text'
  },
  {
    path: '/examples/input-error',
    component: InputError,
    name: 'Input with error message'
  },
  {
    path: '/examples/input-width',
    component: InputWidth,
    name: 'Input with width modifier'
  },
  {
    path: '/examples/select',
    component: Select,
    name: 'Select'
  },
  {
    path: '/examples/select-error',
    component: SelectError,
    name: 'Select with hint text and error message'
  },
  {
    path: '/examples/textarea',
    component: Textarea,
    name: 'Textarea'
  },
  {
    path: '/examples/textarea-autocomplete',
    component: TextareaAutocomplete,
    name: 'Textarea with autocomplete attribute'
  },
  {
    path: '/examples/textarea-error',
    component: TextareaError,
    name: 'Textarea with error message'
  },
  {
    path: '/examples/date-input',
    component: DateInput,
    name: 'Date input'
  },
  {
    path: '/examples/date-input-autocomplete',
    component: DateInputAutocomplete,
    name: 'Date input with autocomplete attribute'
  },
  {
    path: '/examples/date-input-error',
    component: DateInputError,
    name: 'Date input with error'
  },
  {
    path: '/examples/date-input-error-multi',
    component: DateInputErrorMulti,
    name: 'Date input with multiple errors'
  },
  ...checkboxesExampleRoutes,
  {
    path: '/examples/radio',
    component: Radio,
    name: 'Radios'
  },
  {
    path: '/examples/radio-inline',
    component: RadioInline,
    name: 'Radios inline'
  },
  {
    path: '/examples/radio-disabled',
    component: RadioDisabled,
    name: 'Radios disabled'
  },
  {
    path: '/examples/radio-divider',
    component: RadioDivider,
    name: 'Radios with a divider'
  },
  {
    path: '/examples/radio-hint',
    component: RadioHint,
    name: 'Radios with hint text'
  },
  {
    path: '/examples/radio-no-heading',
    component: RadioNoHeading,
    name: 'Radios without fieldset'
  },
  {
    path: '/examples/radio-error',
    component: RadioError,
    name: 'Radios with hint text and error message'
  },
  {
    path: '/examples/radio-conditional',
    component: RadioConditional,
    name: 'Radios with conditional content'
  }
].map((item) => {
  const { name, ...rest } = item;
  return {
    ...rest,
    name: `examples-${name}`
  };
});

const filteredExamplesRoutes = filterRoutes(examplesRoutes, ['examples-Examples']);

export { examplesRoutes, filteredExamplesRoutes };
