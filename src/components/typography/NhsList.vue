<template>
  <component :is="element" :class="listClass" :attributes="attributes">
    <slot></slot>
  </component>
</template>

<script>
  import ListOrdered from './list/ListOrdered.vue'
  import ListUnordered from './list/ListUnordered.vue'

  const types = {
    bullet: "nhsuk-list--bullet",
    number: "nhsuk-list--number",
    error: "nhsuk-error-summary__list"
  }

  export default {
    name: "NhsList",
    props: {
      type: {
        type: String,
        default: "bullet",
        validator(val) {
          return val in types
        }
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      element() {
        if (this.type === "number") {
          return ListOrdered
        }
        return ListUnordered
      },
      listClass() {
        return `nhsuk-list ${types[this.type]}`
      }
    }
  }
</script>