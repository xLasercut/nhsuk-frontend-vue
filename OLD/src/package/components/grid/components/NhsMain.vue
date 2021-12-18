<template>
  <div :class="classes" v-bind="$attrs">
    <main class="nhsuk-main-wrapper" id="maincontent">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import {computed, defineComponent} from 'vue'

const types = {
  fluid: 'nhsuk-width-container-fluid',
  normal: 'nhsuk-width-container'
}

export default defineComponent({
  name: 'NhsMain',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'normal',
      validator(val) {
        return val in types
      }
    }
  },
  setup(props) {
    const classes = computed(() => {
      return types[props.type]
    })
    return {classes}
  }
})
</script>
