interface ExampleStrings {
  [key: string]: string
}

interface ExampleModules {
  [key: string]: any
}

interface EventsDoc {
  name: string
  description: string
  arguments?: Array<{
    name: string
    type: string
  }>
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

interface ExampleDisplayConfig {
  [key: string]: {
    container?: boolean
    containerBg?: string
    bodyBg?: string
    containerSize?: number
  }
}

export {
  ExampleStrings,
  SlotsDoc,
  PropsDoc,
  EventsDoc,
  ComponentDoc,
  SlotsDocProperties,
  ExampleModules,
  ExampleDisplayConfig
}
