<template>
  <div @click="onClickCard()" :class="classes" v-bind="$attrs">
    <img class="nhsuk-card__img" :src="imgUrl" :alt="imgAlt" v-if="imgUrl" />
    <div :class="contentClasses">
      <slot name="heading">
        <nhs-heading-switcher :heading-level="headingLevel" :class="headingClassesComputed">
          <nhs-link-switcher v-if="isHeadingLink" class="nhsuk-card__link" :href="href"
            >{{ heading }}
          </nhs-link-switcher>
          <div v-else>{{ heading }}</div>
        </nhs-heading-switcher>
      </slot>
      <slot name="description">
        <p class="nhsuk-card__description">
          {{ description }}
        </p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NhsHeadingSwitcher } from '../shared/heading-switcher';
import { NhsLinkSwitcher } from '../shared/link-switcher';
import { computed, inject, PropType } from 'vue';
import { NhsHeadingType } from '../shared/heading-switcher/types';
import { Router } from 'vue-router';
import { isRouterLink } from '../shared/helpers/route-helper';

defineOptions({
  name: 'nhs-card',
  inheritAttrs: false
});
defineEmits([]);
const props = defineProps({
  clickable: {
    type: Boolean,
    default: (): boolean => {
      return false;
    }
  },
  feature: {
    type: Boolean,
    default: (): boolean => {
      return false;
    }
  },
  heading: {
    type: String,
    default: (): string => {
      return '';
    }
  },
  headingLevel: {
    type: Number as PropType<NhsHeadingType>,
    default: (): NhsHeadingType => {
      return 2;
    }
  },
  imgUrl: {
    type: String,
    default: (): string => {
      return '';
    }
  },
  imgAlt: {
    type: String,
    default: (): string => {
      return '';
    }
  },
  href: {
    type: String,
    default: (): string => {
      return '';
    }
  },
  description: {
    type: String,
    default: (): string => {
      return '';
    }
  },
  headingClasses: {
    type: String,
    default: (): string => {
      return '';
    }
  }
});

const router = inject<Router>('router');
const classes = computed((): string => {
  const classes = ['nhsuk-card'];

  if (props.clickable) {
    classes.push('nhsuk-card--clickable');
  }

  if (props.feature) {
    classes.push('nhsuk-card--feature');
  }

  return classes.join(' ');
});

const contentClasses = computed((): string => {
  const classes = ['nhsuk-card__content'];

  if (props.feature) {
    classes.push('nhsuk-card__content--feature');
  }

  return classes.join(' ');
});

const headingClassesComputed = computed((): string => {
  const classes = ['nhsuk-card__heading'];

  if (props.feature) {
    classes.push('nhsuk-card__heading--feature');
  }

  if (props.headingClasses) {
    classes.push(props.headingClasses);
  }

  return classes.join(' ');
});

const isHeadingLink = computed((): boolean => {
  return Boolean(props.href) && !props.feature;
});

function onClickCard(): void {
  if (props.clickable && isHeadingLink) {
    if (isRouterLink(router, props.href)) {
      //@ts-ignore
      router.push(props.href);
    } else {
      window.location.href = props.href;
    }
  }
}
</script>
