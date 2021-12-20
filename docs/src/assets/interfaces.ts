interface ExampleStrings {
  [key: string]: string
}

interface EventsDoc {
  name: string
  description: string
}

interface PropsDoc {
  name: string
  value: {
    kind: string
    type: string
  }
  required: boolean
  default?: string
  description: string
}

interface SlotsDocProperties {
  name: string
  type?: string
}

interface SlotsDoc {
  name: string
  description: string
  'vue-properties'?: Array<SlotsDocProperties>
}

interface ComponentDoc {
  name: string
  attributes?: Array<PropsDoc>
  slots?: Array<SlotsDoc>
  events?: Array<EventsDoc>
}

export {
  ExampleStrings,
  SlotsDoc,
  PropsDoc,
  EventsDoc,
  ComponentDoc,
  SlotsDocProperties
}
