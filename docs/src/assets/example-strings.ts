import {ExampleStrings} from './interfaces'
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
import CareCardNonUrgent from '../views/examples/care-card/CareCardNonUrgent.vue?raw'
import CareCardUrgent from '../views/examples/care-card/CareCardUrgent.vue?raw'
import CareCardImmediate from '../views/examples/care-card/CareCardImmediate.vue?raw'
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
import Header from '../views/examples/header/Header.vue?raw'
import HeaderServiceSearch from '../views/examples/header/HeaderServiceSearch.vue?raw'
import HeaderTransactionalName from '../views/examples/header/HeaderTransactionalName.vue?raw'
import HeaderOrg from '../views/examples/header/HeaderOrg.vue?raw'
import HeaderOrgWhiteNav from '../views/examples/header/HeaderOrgWhiteNav.vue?raw'

const EXAMPLE_STRINGS: ExampleStrings = {
  ButtonDocs, ButtonDocsDisabled,
  ActionLink,
  BackLink,
  Breadcrumb,
  CardBasic, CardClickable, CardImage, CardFeature, CardGroup,
  CareCardNonUrgent, CareCardUrgent, CareCardImmediate,
  ContentsList,
  Details,
  DoDont, DoDontSlots,
  ErrorSummary,
  Body,
  List,
  ErrorText,
  HintText,
  InsetText,
  Heading,
  Label, LabelBold, LabelHeading,
  Expander, ExpanderGroup,
  Fieldset, FieldsetHeading, FieldsetInput, FieldsetSlots,
  Footer,
  Grid,
  Header, HeaderServiceSearch, HeaderTransactionalName, HeaderOrg, HeaderOrgWhiteNav
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
  return rawTemplateCode.split('\n').map((row) => {
    return row.replace(/^ {2}/, '')
  }).join('\n')
}

function getExampleCode(name: string) {
  const exampleString = EXAMPLE_STRINGS[name]

  return {
    templateCode: parseTemplateCode(exampleString),
    scriptCode: getMatchedString(exampleString, SCRIPT_REGEX)
  }
}

export {getExampleCode}
