import ArrowLeft from './arrow-left.vue';
import ArrowRightCircle from './arrow-right-circle.vue';
import ArrowRight from './arrow-right.vue';
import ChevronLeft from './chevron-left.vue';
import ChevronRight from './chevron-right.vue';
import Close from './close.vue';
import Cross from './cross.vue';
import EmdashSmall from './emdash-small.vue';
import Emdash from './emdash.vue';
import Minus from './minus.vue';
import Plus from './plus.vue';
import Search from './search.vue';
import Tick from './tick.vue';
import { NhsIconType } from '../types';
import { Component } from 'vue';

const ICON_MAP: Record<NhsIconType, Component> = {
  'arrow-left': ArrowLeft,
  'arrow-right-circle': ArrowRightCircle,
  'arrow-right': ArrowRight,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  close: Close,
  cross: Cross,
  'emdash-small': EmdashSmall,
  dmdash: Emdash,
  minus: Minus,
  plus: Plus,
  search: Search,
  tick: Tick
};

export { ICON_MAP };
