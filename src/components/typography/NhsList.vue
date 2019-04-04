<template>
  <component :is="listType">
    <slot></slot>
  </component>
</template>

<script>
  import OrderedList from './list/OrderedList.vue'
  import UnorderedList from './list/UnorderedList.vue'
  import ErrorList from './list/ErrorList.vue'

  export default {
    name: "NhsList",
    components: {
      OrderedList,
      UnorderedList,
      ErrorList
    },
    props: {
      type: {
        type: String,
        default: "bullet"
      }
    },
    computed: {
      listType() {
        switch (this.type) {
          case "number":
            return "ordered-list"
          case "error":
            return "error-list"
          default:
            return "unordered-list"
        } 
      }
    }
  }
</script>