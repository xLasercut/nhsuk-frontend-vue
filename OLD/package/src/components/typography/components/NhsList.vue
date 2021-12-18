<template>
  <component :is="element" :class="classes" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
  import ListOrdered from '../list-types/ListOrdered.vue'
  import ListUnordered from '../list-types/ListUnordered.vue'

  const types = {
    bullet: 'nhsuk-list--bullet',
    number: 'nhsuk-list--number',
    error: 'nhsuk-error-summary__list'
  }

  export default {
    name: 'NhsList',
    props: {
      type: {
        type: String,
        default: 'bullet',
        validator(val) {
          return val in types
        }
      }
    },
    computed: {
      element() {
        if (this.type === 'number') {
          return ListOrdered
        }
        return ListUnordered
      },
      classes() {
        return `nhsuk-list ${types[this.type]}`
      }
    }
  }
</script>