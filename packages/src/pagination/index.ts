import NhsPagination from './NhsPagination.vue'
import {App, Plugin} from 'vue'

const NhsPaginationPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsPagination.name, NhsPagination)
  }
}


export {
  NhsPagination,
  NhsPaginationPlugin
}
