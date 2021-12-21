import ButtonDocs from '../views/examples/button/ButtonDocs.vue'
import ButtonDocsDisabled from '../views/examples/button/ButtonDocsDisabled.vue'
import {ExampleModules} from './interfaces'

const EXAMPLE_MODULES: ExampleModules = {
  ButtonDocs,
  ButtonDocsDisabled
}

function getExampleModule(name: string) {
  return EXAMPLE_MODULES[name]
}

export {getExampleModule}
