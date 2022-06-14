import { ExampleStrings } from './interfaces'
import ButtonDocs from '../views/examples/button/ButtonDocs.vue?raw'
import ButtonDocsDisabled from '../views/examples/button/ButtonDocsDisabled.vue?raw'
import ActionLink from '../views/examples/action-link/ActionLink.vue?raw'
import BackLink from '../views/examples/back-link/BackLink.vue?raw'
import Breadcrumb from '../views/examples/breadcrumb/Breadcrumb.vue?raw'
import CardBasic from '../views/examples/card/CardBasic.vue?raw'
import CardClickable from '../views/examples/card/CardClickable.vue?raw'
import CardImage from '../views/examples/card/CardImage.vue?raw'
import CardFeature from '../views/examples/card/CardFeature.vue?raw'
import CardGroup from '../views/examples/card/CardGroup.vue?raw'
import ContentsList from '../views/examples/contents/ContentsList.vue?raw'
import Details from '../views/examples/details/Details.vue?raw'
import DoDont from '../views/examples/do-dont/DoDont.vue?raw'
import DoDontSlots from '../views/examples/do-dont/DoDontSlots.vue?raw'
import ErrorSummary from '../views/examples/error-summary/ErrorSummary.vue?raw'
import Body from '../views/examples/body/Body.vue?raw'
import List from '../views/examples/list/List.vue?raw'
import ErrorText from '../views/examples/error-text/ErrorText.vue?raw'
import HintText from '../views/examples/hint-text/HintText.vue?raw'
import InsetText from '../views/examples/inset-text/InsetText.vue?raw'
import Heading from '../views/examples/heading/Heading.vue?raw'
import Label from '../views/examples/label/Label.vue?raw'
import LabelBold from '../views/examples/label/LabelBold.vue?raw'
import LabelHeading from '../views/examples/label/LabelHeading.vue?raw'
import Expander from '../views/examples/expander/Expander.vue?raw'
import ExpanderGroup from '../views/examples/expander/ExpanderGroup.vue?raw'
import Fieldset from '../views/examples/fieldset/Fieldset.vue?raw'
import FieldsetHeading from '../views/examples/fieldset/FieldsetHeading.vue?raw'
import FieldsetInput from '../views/examples/fieldset/FieldsetInput.vue?raw'
import FieldsetSlots from '../views/examples/fieldset/FieldsetSlots.vue?raw'
import Footer from '../views/examples/footer/Footer.vue?raw'
import Grid from '../views/examples/grid/Grid.vue?raw'
import Hero from '../views/examples/hero/Hero.vue?raw'
import HeroImage from '../views/examples/hero/HeroImage.vue?raw'
import HeroImageText from '../views/examples/hero/HeroImageText.vue?raw'
import Image from '../views/examples/image/Image.vue?raw'
import ListPanel from '../views/examples/list-panel/ListPanel.vue?raw'
import NavAZ from '../views/examples/nav-az/NavAZ.vue?raw'
import Pagination from '../views/examples/pagination/Pagination.vue?raw'
import ReviewDate from '../views/examples/review-date/ReviewDate.vue?raw'
import SkipLink from '../views/examples/skip-link/SkipLink.vue?raw'
import SummaryList from '../views/examples/summary-list/SummaryList.vue?raw'
import SummaryListNoAction from '../views/examples/summary-list/SummaryListNoAction.vue?raw'
import SummaryListNoBorder from '../views/examples/summary-list/SummaryListNoBorder.vue?raw'
import Tag from '../views/examples/tag/Tag.vue?raw'
import WarningCallout from '../views/examples/warning-callout/WarningCallout.vue?raw'
import WarningCalloutNonImportant from '../views/examples/warning-callout/WarningCalloutNonImportant.vue?raw'
import Table from '../views/examples/table/Table.vue?raw'
import TablePanel from '../views/examples/table/TablePanel.vue?raw'
import TableResponsive from '../views/examples/table/TableResponsive.vue?raw'
import Input from '../views/examples/input/Input.vue?raw'
import InputAutocomplete from '../views/examples/input/InputAutocomplete.vue?raw'
import InputHint from '../views/examples/input/InputHint.vue?raw'
import InputError from '../views/examples/input/InputError.vue?raw'
import InputWidth from '../views/examples/input/InputWidth.vue?raw'
import InputSlots from '../views/examples/input/InputSlots.vue?raw'
import Form from '../views/examples/form/Form.vue?raw'
import Select from '../views/examples/select/Select.vue?raw'
import SelectError from '../views/examples/select/SelectError.vue?raw'
import SelectSlots from '../views/examples/select/SelectSlots.vue?raw'
import Textarea from '../views/examples/textarea/Textarea.vue?raw'
import TextareaAutocomplete from '../views/examples/textarea/TextareaAutocomplete.vue?raw'
import TextareaError from '../views/examples/textarea/TextareaError.vue?raw'
import TextareaSlots from '../views/examples/textarea/TextareaSlots.vue?raw'
import DateInput from '../views/examples/input-group/DateInput.vue?raw'
import DateInputAutocomplete from '../views/examples/input-group/DateInputAutocomplete.vue?raw'
import DateInputError from '../views/examples/input-group/DateInputError.vue?raw'
import DateInputErrorMulti from '../views/examples/input-group/DateInputErrorMulti.vue?raw'
import DateInputSlots from '../views/examples/input-group/DateInputSlots.vue?raw'
import Radio from '../views/examples/radios/Radio.vue?raw'
import RadioInline from '../views/examples/radios/RadioInline.vue?raw'
import RadioDisabled from '../views/examples/radios/RadioDisabled.vue?raw'
import RadioDivider from '../views/examples/radios/RadioDivider.vue?raw'
import RadioHint from '../views/examples/radios/RadioHint.vue?raw'
import RadioNoHeading from '../views/examples/radios/RadioNoHeading.vue?raw'
import RadioError from '../views/examples/radios/RadioError.vue?raw'
import RadioConditional from '../views/examples/radios/RadioConditional.vue?raw'
import RadioSlots from '../views/examples/radios/RadioSlots.vue?raw'
import { CARE_CARD_STRINGS } from './example-strings/care-card'
import { CHECKBOXES_STRINGS } from './example-strings/checkboxes'
import { HEADER_STRINGS } from './example-strings/header'

const EXAMPLE_STRINGS: ExampleStrings = {
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
  ...CARE_CARD_STRINGS,
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
  ...HEADER_STRINGS,
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
  ...CHECKBOXES_STRINGS,
  Radio,
  RadioInline,
  RadioDisabled,
  RadioDivider,
  RadioHint,
  RadioNoHeading,
  RadioError,
  RadioConditional,
  RadioSlots
}

const TEMPLATE_REGEX = new RegExp('(?:\\<template\\>\\n)([^]+)(?:\\<\\/template\\>)', 'i')
const SCRIPT_REGEX = new RegExp('(?:\\<script lang="ts"\\>\\n)([^]+)(?:\\<\\/script\\>)', 'i')

function getMatchedString(rawString: string, regex: RegExp): string {
  const match = regex.exec(rawString)
  if (match) {
    return match[1]
  }
  return ''
}

function parseTemplateCode(rawString: string): string {
  const rawTemplateCode = getMatchedString(rawString, TEMPLATE_REGEX)
  return rawTemplateCode
    .split('\n')
    .map((row) => {
      return row.replace(/^ {2}/, '')
    })
    .join('\n')
}

function getExampleCode(name: string) {
  const exampleString = EXAMPLE_STRINGS[name]

  return {
    templateCode: parseTemplateCode(exampleString),
    scriptCode: getMatchedString(exampleString, SCRIPT_REGEX)
  }
}

export { getExampleCode }
