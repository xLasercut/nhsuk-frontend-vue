<template>
  <span class="nhsuk-hint" v-bind="attrs()" :id="id">
    <slot></slot>
  </span>
</template>

<script>
  import ClassSetter from '../../../mixins/class-setter.js'

  export default {
    name: 'NhsHintText',
    props: {
      id: {
        type: String,
        default: ''
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    mixins: [ClassSetter]
  }
</script>