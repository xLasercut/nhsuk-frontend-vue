<template>
  <component :is="listType">
    <slot></slot>
  </component>
</template>

<script>
  import OrderedList from './list/OrderedList.vue'
  import UnorderedList from './list/UnorderedList.vue'

  export default {
    name: "NhsList",
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
          default:
            return "unordered-list"
        } 
      }
    }
  }
</script>