<template>
  <ul class="nhsuk-grid-row nhsuk-card-group" v-bind="$attrs">
    <li :class="`nhsuk-grid-column-one-${type} nhsuk-card-group__item`" v-for="(item, index) in $slots.default()" :key="index">
      <v-node :node="item"></v-node>
    </li>
  </ul>
</template>

<script>
import VNode from '../../shared/VNode.vue'
import {defineComponent} from 'vue'

const VALID_TYPES = ['half', 'third', 'quarter']

export default defineComponent({
  name: 'NhsCardGroup',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'half',
      validator(val) {
        return VALID_TYPES.includes(val)
      }
    }
  },
  components: {VNode}
})
</script>
