import NhsImage from './NhsImage.vue'
import {App, Plugin} from 'vue'

const NhsImagePlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsImage.name, NhsImage)
  }
}

export {
  NhsImage,
  NhsImagePlugin
}
