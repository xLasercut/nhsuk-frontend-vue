<template>
  <div :class="classes" v-if="showNav" v-bind="$attrs">
    <button
      :class="menuButtonClasses"
      id="toggle-menu"
      aria-controls="header-navigation"
      aria-label="Open menu"
      :aria-expanded="navOpen"
      @click="toggleNav()"
    >
      Menu
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, inject } from 'vue';
import { NHS_HEADER_INJECTS } from '../constants';

defineOptions({
  inheritAttrs: false
});
defineEmits([]);
const props = defineProps({
  showNav: {
    type: Boolean,
    required: true
  },
  showSearch: {
    type: Boolean,
    required: true
  },
  navOpen: {
    type: Boolean,
    required: true
  }
});

const classes = computed((): string => {
  const classes = ['nhsuk-header__menu'];

  if (!props.showSearch) {
    classes.push('nhsuk-header__menu--only');
  }

  return classes.join(' ');
});

const menuButtonClasses = computed((): string => {
  const classes = ['nhsuk-header__menu-toggle'];

  if (props.navOpen) {
    classes.push('is-active');
  }

  return classes.join(' ');
});

const toggleNav: Function = inject<any>(NHS_HEADER_INJECTS.toggleNav);
</script>
