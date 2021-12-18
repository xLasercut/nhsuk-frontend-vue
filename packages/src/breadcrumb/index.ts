import NhsBreadcrumb from './NhsBreadcrumb.vue'
import NhsBreadcrumbItem from './NhsBreadcrumbItem.vue'
import NhsBreadcrumbBacklink from './NhsBreadcrumbBacklink.vue'
import {App, Plugin} from 'vue'

const NhsBreadcrumbPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsBreadcrumb.name, NhsBreadcrumb)
  }
}

const NhsBreadcrumbItemPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsBreadcrumbItem.name, NhsBreadcrumbItem)
  }
}

const NhsBreadcrumbBacklinkPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsBreadcrumbBacklink.name, NhsBreadcrumbBacklink)
  }
}

export {
  NhsBreadcrumb,
  NhsBreadcrumbItem,
  NhsBreadcrumbBacklink,
  NhsBreadcrumbPlugin,
  NhsBreadcrumbItemPlugin,
  NhsBreadcrumbBacklinkPlugin
}
