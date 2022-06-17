import Header from '../../views/examples/header/Header.vue';
import HeaderLogo from '../../views/examples/header/HeaderLogo.vue';
import HeaderTransactional from '../../views/examples/header/HeaderTransactional.vue';
import HeaderTransactionalName from '../../views/examples/header/HeaderTransactionalName.vue';
import HeaderNav from '../../views/examples/header/HeaderNav.vue';
import HeaderSearch from '../../views/examples/header/HeaderSearch.vue';
import HeaderOrg from '../../views/examples/header/HeaderOrg.vue';
import HeaderOrgWhite from '../../views/examples/header/HeaderOrgWhite.vue';
import HeaderOrgWhiteNav from '../../views/examples/header/HeaderOrgWhiteNav.vue';
import HeaderService from '../../views/examples/header/HeaderService.vue';
import HeaderServiceNav from '../../views/examples/header/HeaderServiceNav.vue';

const headerExampleRoutes = [
  {
    path: '/examples/header',
    component: Header,
    name: 'Header'
  },
  {
    path: '/examples/header-nav',
    component: HeaderNav,
    name: 'Header with navigation'
  },
  {
    path: '/examples/header-search',
    component: HeaderSearch,
    name: 'Header with search'
  },
  {
    path: '/examples/header-logo',
    component: HeaderLogo,
    name: 'Header with logo only'
  },
  {
    path: '/examples/header-service',
    component: HeaderService,
    name: 'Header with a service name'
  },
  {
    path: '/examples/header-service-nav',
    component: HeaderServiceNav,
    name: 'Header with a service name, search and navigation'
  },
  {
    path: '/examples/header-transactional',
    component: HeaderTransactional,
    name: 'Header transactional'
  },
  {
    path: '/examples/header-transactional-name',
    component: HeaderTransactionalName,
    name: 'Header transactional with service name'
  },
  {
    path: '/examples/header-org',
    component: HeaderOrg,
    name: 'Header organisational'
  },
  {
    path: '/examples/header-org-white',
    component: HeaderOrgWhite,
    name: 'Header organisational with white header'
  },
  {
    path: '/examples/header-org-white-nav',
    component: HeaderOrgWhiteNav,
    name: 'Header organisational with white header and navigation'
  }
];

export { headerExampleRoutes };
