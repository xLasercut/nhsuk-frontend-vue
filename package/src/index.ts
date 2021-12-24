import {App, Plugin} from 'vue'
import {NhsukFrontendVueOptions} from './interfaces'
import {Router} from 'vue-router'
import '../../node_modules/nhsuk-frontend/dist/nhsuk.css'
import '../../node_modules/nhsuk-frontend/packages/polyfills'

import {NhsActionLink} from './action-link'
import {NhsBackLink} from './back-link'
import {NhsBreadcrumb, NhsBreadcrumbBacklink, NhsBreadcrumbItem} from './breadcrumb'
import {NhsButton} from './button'
import {NhsCard, NhsCardGroup} from './card'
import {NhsCareCard} from './care-card'
import {NhsContents, NhsContentsItem} from './contents'
import {NhsDetails} from './details'
import {NhsDodont} from './dodont'
import {NhsErrorSummary} from './error-summary'
import {NhsExpander, NhsExpanderGroup} from './expander'
import {NhsFieldset} from './fieldset'
import {NhsFooter, NhsFooterItem} from './footer'
import {NhsCol, NhsMain, NhsRow} from './grid'
import {NhsHeader, NhsHeaderItem} from './header'
import {NhsHero} from './hero'
import {NhsIcon} from './icon'
import {NhsImage} from './image'
import {NhsListPanel, NhsListPanelItem} from './list-panel'
import {NhsNavAz, NhsNavAzItem} from './nav-az'
import {NhsPagination} from './pagination'
import {NhsReviewDate} from './review-date'
import {NhsSkipLink} from './skip-link'
import {NhsSummaryList, NhsSummaryListItem} from './summary-list'
import {NhsTable} from './table'
import {NhsTag} from './tag'
import {NhsWarningCallout} from './warning-callout'
import {NhsBody} from './body'
import {NhsList} from './list'
import {NhsErrorText} from './error-text'
import {NhsHintText} from './hint-text'
import {NhsInsetText} from './inset-text'
import {NhsHeading} from './heading'
import {NhsLabel} from './label'
import {NhsForm} from './form'
import {NhsInput} from './input'

const components = [
  NhsActionLink,
  NhsBackLink,
  NhsBreadcrumb,
  NhsBreadcrumbItem,
  NhsBreadcrumbBacklink,
  NhsButton,
  NhsCard,
  NhsCardGroup,
  NhsCareCard,
  NhsContents,
  NhsContentsItem,
  NhsDetails,
  NhsDodont,
  NhsErrorSummary,
  NhsExpander,
  NhsExpanderGroup,
  NhsFieldset,
  NhsFooter,
  NhsFooterItem,
  NhsRow,
  NhsCol,
  NhsMain,
  NhsHeader,
  NhsHeaderItem,
  NhsHero,
  NhsIcon,
  NhsImage,
  NhsListPanel,
  NhsListPanelItem,
  NhsNavAz,
  NhsNavAzItem,
  NhsPagination,
  NhsReviewDate,
  NhsSkipLink,
  NhsSummaryList,
  NhsSummaryListItem,
  NhsTable,
  NhsTag,
  NhsWarningCallout,
  NhsBody,
  NhsList,
  NhsErrorText,
  NhsHintText,
  NhsInsetText,
  NhsHeading,
  NhsLabel,
  NhsForm,
  NhsInput
]

const NhsukFrontendVue: Plugin = {
  install: (app: App, options: NhsukFrontendVueOptions = {}) => {
    for (const component of components) {
      app.component(component.name, component)
    }

    app.provide<Router | undefined>('router', options.router)
  }
}

export default NhsukFrontendVue

export {
  NhsActionLink,
  NhsBackLink,
  NhsBreadcrumb,
  NhsBreadcrumbItem,
  NhsBreadcrumbBacklink,
  NhsButton,
  NhsCard,
  NhsCardGroup,
  NhsCareCard,
  NhsContents,
  NhsContentsItem,
  NhsDetails,
  NhsDodont,
  NhsErrorSummary,
  NhsExpander,
  NhsExpanderGroup,
  NhsFieldset,
  NhsFooter,
  NhsFooterItem,
  NhsRow,
  NhsCol,
  NhsMain,
  NhsHeader,
  NhsHeaderItem,
  NhsHero,
  NhsIcon,
  NhsImage,
  NhsListPanel,
  NhsListPanelItem,
  NhsNavAz,
  NhsNavAzItem,
  NhsPagination,
  NhsReviewDate,
  NhsSkipLink,
  NhsSummaryList,
  NhsSummaryListItem,
  NhsTable,
  NhsTag,
  NhsWarningCallout,
  NhsBody,
  NhsList,
  NhsErrorText,
  NhsHintText,
  NhsInsetText,
  NhsHeading,
  NhsLabel,
  NhsForm,
  NhsInput
}
