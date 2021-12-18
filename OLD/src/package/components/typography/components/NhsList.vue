<template>
  <component :is="element" :class="classes" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
import ListOrdered from '../list-types/ListOrdered.vue'
import ListUnordered from '../list-types/ListUnordered.vue'
import {computed, defineComponent} from 'vue'

const TYPES = {
  bullet: 'nhsuk-list--bullet',
  number: 'nhsuk-list--number',
  error: 'nhsuk-error-summary__list'
}

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsList',
  props: {
    type: {
      type: String,
      default: 'bullet',
      validator(val) {
        return val in TYPES
      }
    }
  },
  setup(props) {
    const element = computed(() => {
      if (this.type === 'number') {
        return ListOrdered
      }
      return ListUnordered
    })

    const classes = computed(() => {
      return `nhsuk-list ${TYPES[props.type]}`
    })

    return {element, classes}
  }
})
</script>
