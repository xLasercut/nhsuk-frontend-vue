import NhsDodont from './NhsDodont.vue'
import {App, Plugin} from 'vue'

const NhsDodontPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsDodont.name, NhsDodont)
  }
}

export {
  NhsDodont,
  NhsDodontPlugin
}
