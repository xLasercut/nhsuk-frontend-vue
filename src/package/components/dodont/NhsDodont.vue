<template>
  <div class="nhsuk-do-dont-list" v-bind="$attrs">
    <heading-switcher :heading-level="headingLevel" class="nhsuk-do-dont-list__label">{{title}}</heading-switcher>
    <ul :class="`nhsuk-list nhsuk-list--${type}`">
      <li v-for="(item, index) in items" :key="index">
        <nhs-icon :icon="type"></nhs-icon>
        <slot name="item" :props="item">{{item}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
import NhsIcon from '../icon/NhsIcon.vue'
import HeadingSwitcher from '../../shared/HeadingSwitcher.vue'
import {defineComponent} from 'vue'

const TYPES = ['tick', 'cross']

export default defineComponent({
  name: 'NhsDodont',
  inheritAttrs: false,
  components: {
    NhsIcon,
    HeadingSwitcher
  },
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'tick',
      validator(val) {
        return TYPES.includes(val)
      }
    },
    items: {
      type: Array,
      required: true
    },
    headingLevel: {
      type: Number,
      default: 3
    }
  }
})
</script>
