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
import {ExampleStrings} from './interfaces'

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
  CareCardNonUrgent,
  CareCardUrgent,
  CareCardImmediate
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
