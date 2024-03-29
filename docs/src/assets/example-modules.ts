import { ExampleModules } from './interfaces';
import ButtonDocs from '../views/examples/button/ButtonDocs.vue';
import ButtonDocsDisabled from '../views/examples/button/ButtonDocsDisabled.vue';
import ActionLink from '../views/examples/action-link/ActionLink.vue';
import BackLink from '../views/examples/back-link/BackLink.vue';
import Breadcrumb from '../views/examples/breadcrumb/Breadcrumb.vue';
import CardBasic from '../views/examples/card/CardBasic.vue';
import CardClickable from '../views/examples/card/CardClickable.vue';
import CardImage from '../views/examples/card/CardImage.vue';
import CardFeature from '../views/examples/card/CardFeature.vue';
import CardGroup from '../views/examples/card/CardGroup.vue';
import ContentsList from '../views/examples/contents/ContentsList.vue';
import Details from '../views/examples/details/Details.vue';
import DoDont from '../views/examples/do-dont/DoDont.vue';
import DoDontSlots from '../views/examples/do-dont/DoDontSlots.vue';
import ErrorSummary from '../views/examples/error-summary/ErrorSummary.vue';
import Body from '../views/examples/body/Body.vue';
import List from '../views/examples/list/List.vue';
import ErrorText from '../views/examples/error-text/ErrorText.vue';
import HintText from '../views/examples/hint-text/HintText.vue';
import InsetText from '../views/examples/inset-text/InsetText.vue';
import Heading from '../views/examples/heading/Heading.vue';
import Label from '../views/examples/label/Label.vue';
import LabelBold from '../views/examples/label/LabelBold.vue';
import LabelHeading from '../views/examples/label/LabelHeading.vue';
import Expander from '../views/examples/expander/Expander.vue';
import ExpanderGroup from '../views/examples/expander/ExpanderGroup.vue';
import Fieldset from '../views/examples/fieldset/Fieldset.vue';
import FieldsetHeading from '../views/examples/fieldset/FieldsetHeading.vue';
import FieldsetInput from '../views/examples/fieldset/FieldsetInput.vue';
import FieldsetSlots from '../views/examples/fieldset/FieldsetSlots.vue';
import Footer from '../views/examples/footer/Footer.vue';
import Grid from '../views/examples/grid/Grid.vue';
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
import Input from '../views/examples/input/Input.vue';
import InputAutocomplete from '../views/examples/input/InputAutocomplete.vue';
import InputHint from '../views/examples/input/InputHint.vue';
import InputError from '../views/examples/input/InputError.vue';
import InputWidth from '../views/examples/input/InputWidth.vue';
import InputSlots from '../views/examples/input/InputSlots.vue';
import Form from '../views/examples/form/Form.vue';
import Select from '../views/examples/select/Select.vue';
import SelectError from '../views/examples/select/SelectError.vue';
import SelectSlots from '../views/examples/select/SelectSlots.vue';
import Textarea from '../views/examples/textarea/Textarea.vue';
import TextareaAutocomplete from '../views/examples/textarea/TextareaAutocomplete.vue';
import TextareaError from '../views/examples/textarea/TextareaError.vue';
import TextareaSlots from '../views/examples/textarea/TextareaSlots.vue';
import DateInput from '../views/examples/input-group/DateInput.vue';
import DateInputAutocomplete from '../views/examples/input-group/DateInputAutocomplete.vue';
import DateInputError from '../views/examples/input-group/DateInputError.vue';
import DateInputErrorMulti from '../views/examples/input-group/DateInputErrorMulti.vue';
import DateInputSlots from '../views/examples/input-group/DateInputSlots.vue';
import Radio from '../views/examples/radios/Radio.vue';
import RadioInline from '../views/examples/radios/RadioInline.vue';
import RadioDisabled from '../views/examples/radios/RadioDisabled.vue';
import RadioDivider from '../views/examples/radios/RadioDivider.vue';
import RadioHint from '../views/examples/radios/RadioHint.vue';
import RadioNoHeading from '../views/examples/radios/RadioNoHeading.vue';
import RadioError from '../views/examples/radios/RadioError.vue';
import RadioConditional from '../views/examples/radios/RadioConditional.vue';
import RadioSlots from '../views/examples/radios/RadioSlots.vue';
import { CARE_CARD_MODULES } from './example-modules/care-card';
import { CHECKBOXES_MODULES } from './example-modules/checkboxes';
import { HEADER_MODULES } from './example-modules/header';

const EXAMPLE_MODULES: ExampleModules = {
  ButtonDocs,
  ButtonDocsDisabled,
  ActionLink,
  BackLink,
  Breadcrumb,
  CardBasic,
  CardClickable,
  CardImage,
  CardFeature,
  CardGroup,
  ...CARE_CARD_MODULES,
  ContentsList,
  Details,
  DoDont,
  DoDontSlots,
  ErrorSummary,
  Body,
  List,
  ErrorText,
  HintText,
  InsetText,
  Heading,
  Label,
  LabelBold,
  LabelHeading,
  Expander,
  ExpanderGroup,
  Fieldset,
  FieldsetHeading,
  FieldsetInput,
  FieldsetSlots,
  Footer,
  Grid,
  ...HEADER_MODULES,
  Hero,
  HeroImage,
  HeroImageText,
  Image,
  ListPanel,
  NavAZ,
  Pagination,
  ReviewDate,
  SkipLink,
  SummaryList,
  SummaryListNoAction,
  SummaryListNoBorder,
  Tag,
  WarningCallout,
  WarningCalloutNonImportant,
  Table,
  TablePanel,
  TableResponsive,
  Input,
  InputAutocomplete,
  InputHint,
  InputError,
  InputWidth,
  InputSlots,
  Form,
  Select,
  SelectError,
  SelectSlots,
  Textarea,
  TextareaAutocomplete,
  TextareaError,
  TextareaSlots,
  DateInput,
  DateInputAutocomplete,
  DateInputError,
  DateInputErrorMulti,
  DateInputSlots,
  ...CHECKBOXES_MODULES,
  Radio,
  RadioInline,
  RadioDisabled,
  RadioDivider,
  RadioHint,
  RadioNoHeading,
  RadioError,
  RadioConditional,
  RadioSlots
};

function getExampleModule(name: string) {
  return EXAMPLE_MODULES[name];
}

export { getExampleModule };
