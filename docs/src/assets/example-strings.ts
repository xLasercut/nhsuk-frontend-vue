import ButtonDocs from '../views/examples/button/ButtonDocs.vue?raw'
import ButtonDocsDisabled from '../views/examples/button/ButtonDocsDisabled.vue?raw'
import {ExampleStrings} from './interfaces'

const EXAMPLE_STRINGS: ExampleStrings = {
  ButtonDocs,
  ButtonDocsDisabled
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
