//@ts-ignore
import WebTypes from '../../../package/dist/web-types.json'
import {ComponentDoc, EventsDoc, PropsDoc, SlotsDoc} from './interfaces'

const COMPONENT_DOCS_RAW: Array<ComponentDoc> = WebTypes.contributions.html.tags

const COMPONENT_NAMES = COMPONENT_DOCS_RAW.map((component) => {
  return component.name
})

const COMPONENT_DOCS = COMPONENT_DOCS_RAW.map((component) => {
  const props: Array<PropsDoc> = component.attributes || []
  const slots: Array<SlotsDoc> = component.slots || []
  const events: Array<EventsDoc> = component.events || []
  return {
    propsDocs: props,
    slotsDocs: slots,
    eventsDocs: events
  }
})

function getComponentDoc(name: string) {
  const index = COMPONENT_NAMES.indexOf(name)
  return COMPONENT_DOCS[index]
}

export {getComponentDoc}
