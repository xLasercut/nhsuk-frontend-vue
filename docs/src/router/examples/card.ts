import CardBasic from '../../views/examples/card/CardBasic.vue';
import CardClickable from '../../views/examples/card/CardClickable.vue';
import CardImage from '../../views/examples/card/CardImage.vue';
import CardGroup from '../../views/examples/card/CardGroup.vue';
import CardFeature from '../../views/examples/card/CardFeature.vue';

const cardExampleRoutes = [
  {
    path: '/examples/card-basic',
    component: CardBasic,
    name: 'Card - Basic card'
  },
  {
    path: '/examples/card-clickable',
    component: CardClickable,
    name: 'Card - Clickable card'
  },
  {
    path: '/examples/card-image',
    component: CardImage,
    name: 'Card - card with an image'
  },
  {
    path: '/examples/card-group',
    component: CardGroup,
    name: 'Card - Card group'
  },
  {
    path: '/examples/card-feature',
    component: CardFeature,
    name: 'Card - Feature card'
  }
];

export { cardExampleRoutes };
