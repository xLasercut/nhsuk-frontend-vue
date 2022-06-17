import Button from '../views/components/Button.vue';
import ComponentsHome from '../views/components/ComponentsHome.vue';
import { filterRoutes } from '../assets/helpers';
import Dodont from '../views/components/Dodont.vue';
import ActionLink from '../views/components/ActionLink.vue';
import BackLink from '../views/components/BackLink.vue';
import Breadrumb from '../views/components/Breadcrumb.vue';
import Card from '../views/components/Card.vue';
import CareCard from '../views/components/CareCard.vue';
import Contents from '../views/components/Contents.vue';
import Details from '../views/components/Details.vue';
import ErrorSummary from '../views/components/ErrorSummary.vue';
import Body from '../views/components/Body.vue';
import List from '../views/components/List.vue';
import ErrorText from '../views/components/ErrorText.vue';
import HintText from '../views/components/HintText.vue';
import InsetText from '../views/components/InsetText.vue';
import Heading from '../views/components/Heading.vue';
import Label from '../views/components/Label.vue';
import Expander from '../views/components/Expander.vue';
import Fieldset from '../views/components/Fieldset.vue';
import Footer from '../views/components/Footer.vue';
import Grid from '../views/components/Grid.vue';
import Header from '../views/components/Header.vue';
import Hero from '../views/components/Hero.vue';
import Image from '../views/components/Image.vue';
import ListPanel from '../views/components/ListPanel.vue';
import NavAz from '../views/components/NavAz.vue';
import Pagination from '../views/components/Pagination.vue';
import ReviewDate from '../views/components/ReviewDate.vue';
import SkipLink from '../views/components/SkipLink.vue';
import SummaryList from '../views/components/SummaryList.vue';
import Tag from '../views/components/Tag.vue';
import WarningCallout from '../views/components/WarningCallout.vue';
import Table from '../views/components/Table.vue';
import Input from '../views/components/Input.vue';
import Form from '../views/components/Form.vue';
import Select from '../views/components/Select.vue';
import Textarea from '../views/components/Textarea.vue';
import InputGroup from '../views/components/InputGroup.vue';
import Checkbox from '../views/components/Checkbox.vue';
import Radio from '../views/components/Radio.vue';

const componentRoutes = [
  {
    path: '',
    component: ComponentsHome,
    name: 'Components'
  },
  {
    path: '/components/action-link',
    component: ActionLink,
    name: 'Action Link'
  },
  {
    path: '/components/back-link',
    component: BackLink,
    name: 'Back Link'
  },
  {
    path: '/components/breadcrumb',
    component: Breadrumb,
    name: 'Breadcrumb'
  },
  {
    path: '/components/button',
    component: Button,
    name: 'Button'
  },
  {
    path: '/components/card',
    component: Card,
    name: 'Card'
  },
  {
    path: '/components/care-card',
    component: CareCard,
    name: 'Care Card'
  },
  {
    path: '/components/contents',
    component: Contents,
    name: 'Contents'
  },
  {
    path: '/components/details',
    component: Details,
    name: 'Details'
  },
  {
    path: '/components/dodont',
    component: Dodont,
    name: "Do Don't"
  },
  {
    path: '/components/error-summary',
    component: ErrorSummary,
    name: 'Error Summary'
  },
  {
    path: '/components/body',
    component: Body,
    name: 'Body'
  },
  {
    path: '/components/list',
    component: List,
    name: 'List'
  },
  {
    path: '/components/error-text',
    component: ErrorText,
    name: 'Error Text'
  },
  {
    path: '/components/hint-text',
    component: HintText,
    name: 'Hint Text'
  },
  {
    path: '/components/inset-text',
    component: InsetText,
    name: 'Inset Text'
  },
  {
    path: '/components/heading',
    component: Heading,
    name: 'Heading'
  },
  {
    path: '/components/label',
    component: Label,
    name: 'Label'
  },
  {
    path: '/components/expander',
    component: Expander,
    name: 'Expander'
  },
  {
    path: '/components/fieldset',
    component: Fieldset,
    name: 'Fieldset'
  },
  {
    path: '/components/footer',
    component: Footer,
    name: 'Footer'
  },
  {
    path: '/components/grid',
    component: Grid,
    name: 'Grid'
  },
  {
    path: '/components/header',
    component: Header,
    name: 'Header'
  },
  {
    path: '/components/hero',
    component: Hero,
    name: 'Hero'
  },
  {
    path: '/components/image',
    component: Image,
    name: 'Image'
  },
  {
    path: '/components/list-panel',
    component: ListPanel,
    name: 'List Panel'
  },
  {
    path: '/components/nav-az',
    component: NavAz,
    name: 'Nav AZ'
  },
  {
    path: '/components/pagination',
    component: Pagination,
    name: 'Pagination'
  },
  {
    path: '/components/review-date',
    component: ReviewDate,
    name: 'Review Date'
  },
  {
    path: '/components/skip-link',
    component: SkipLink,
    name: 'Skip Link'
  },
  {
    path: '/components/summary-list',
    component: SummaryList,
    name: 'Summary List'
  },
  {
    path: '/components/tag',
    component: Tag,
    name: 'Tag'
  },
  {
    path: '/components/warning-callout',
    component: WarningCallout,
    name: 'Warning Callout'
  },
  {
    path: '/components/table',
    component: Table,
    name: 'Table'
  },
  {
    path: '/components/input',
    component: Input,
    name: 'Input'
  },
  {
    path: '/components/form',
    component: Form,
    name: 'Form'
  },
  {
    path: '/components/select',
    component: Select,
    name: 'Select'
  },
  {
    path: '/components/textarea',
    component: Textarea,
    name: 'Textarea'
  },
  {
    path: '/components/input-group',
    component: InputGroup,
    name: 'Input Group'
  },
  {
    path: '/components/checkbox',
    component: Checkbox,
    name: 'Checkbox'
  },
  {
    path: '/components/radio',
    component: Radio,
    name: 'Radio'
  }
];

const filteredComponentRoutes = filterRoutes(componentRoutes, ['Components']);

export { componentRoutes, filteredComponentRoutes };
