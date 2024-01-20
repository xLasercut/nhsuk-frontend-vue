<template>
  <nav
    :class="classes"
    id="header-navigation"
    role="navigation"
    aria-label="Primary navigation"
    aria-labelledby="label-navigation"
    v-bind="$attrs"
  >
    <div class="nhsuk-width-container">
      <p class="nhsuk-header__navigation-title">
        <span id="label-navigation">Menu</span>
        <button class="nhsuk-header__navigation-close" id="close-menu" @click.prevent="toggleNav()">
          <nhs-icon icon="close"></nhs-icon>
          <span class="nhsuk-u-visually-hidden">Close menu</span>
        </button>
      </p>
      <ul class="nhsuk-header__navigation-list">
        <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile">
          <nhs-link-switcher class="nhsuk-header__navigation-link" :href="homeHref">
            {{ homeText }}
            <nhs-icon icon="chevron-right"></nhs-icon>
          </nhs-link-switcher>
        </li>
        <slot></slot>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import NhsIcon from '../../icon/NhsIcon.vue';
import { NhsLinkSwitcher } from '../../shared/link-switcher';
import { computed } from 'vue';
import { NHS_HEADER_INJECTS } from '../constants';
import { ToggleFunctionType } from '../types';
import { injectStrict } from '../../shared/helpers/inject-helper';

defineOptions({
  inheritAttrs: false
});
defineEmits([]);
const props = defineProps({
  homeHref: {
    type: String,
    required: true
  },
  homeText: {
    type: String,
    required: true
  },
  navOpen: {
    type: Boolean,
    required: true
  }
});
const classes = computed((): string => {
  const classes = ['nhsuk-header__navigation'];

  if (props.navOpen) {
    classes.push('js-show');
  }

  return classes.join(' ');
});

const toggleNav = injectStrict<ToggleFunctionType>(NHS_HEADER_INJECTS.TOGGLE_NAV);
</script>
