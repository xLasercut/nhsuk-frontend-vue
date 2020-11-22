<template>
  <ul class="nhsuk-grid-row nhsuk-card-group">
    <li :class="`nhsuk-grid-column-one-${type} nhsuk-card-group__item`" v-for="(item, index) in $slots.default" :key="index">
      <v-node :node="item"></v-node>
    </li>
  </ul>
</template>

<script>
import VNode from '../../shared/VNode.vue'

const validTypes = ['half', 'third', 'quarter']

export default {
  name: 'NhsCardGroup',
  props: {
    type: {
      type: String,
      default: 'half',
      validator(val) {
        return validTypes.includes(val)
      }
    }
  },
  components: {VNode}
}
</script>
