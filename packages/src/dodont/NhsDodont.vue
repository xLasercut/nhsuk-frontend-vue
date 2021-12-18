<template>
  <div class="nhsuk-do-dont-list" v-bind="$attrs">
    <nhs-heading-switcher :heading-level="headingLevel" class="nhsuk-do-dont-list__label">{{title}}</nhs-heading-switcher>
    <ul :class="`nhsuk-list nhsuk-list--${type}`">
      <li v-for="(item, index) in items" :key="index">
        <nhs-icon :icon="type"></nhs-icon>
        <slot name="item" :props="item">{{item}}</slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import NhsIcon from '../icon/NhsIcon.vue'
import {NhsHeadingSwitcher} from '../shared/heading-switcher'
import {defineComponent, PropType} from 'vue'
import {NhsDodontType} from './types'
import {NhsHeadingType} from '../shared/heading-switcher/types'

const DO_DONT_TYPES: Array<NhsDodontType> = ['tick', 'cross']

export default defineComponent({
  name: 'nhs-dodont',
  inheritAttrs: false,
  components: {
    NhsIcon,
    NhsHeadingSwitcher
  },
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<NhsDodontType>,
      default: (): NhsDodontType => {
        return 'tick'
      },
      validator: (val: NhsDodontType): boolean => {
        return DO_DONT_TYPES.includes(val)
      }
    },
    items: {
      type: Array,
      required: true
    },
    headingLevel: {
      type: Number as PropType<NhsHeadingType>,
      default: (): NhsHeadingType => {
        return 3
      }
    }
  }
})
</script>
