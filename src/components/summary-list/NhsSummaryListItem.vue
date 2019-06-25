<template>
  <component :is="componentType">
    <slot></slot>
  </component>
</template>

<script>
  import Key from './item-types/Key.vue'
  import Value from './item-types/Value.vue'
  import Action from './item-types/Action.vue'

  const types = [ 'key', 'value', 'action' ]

  export default {
    name: 'NhsSummaryListItem',
    props: {
      type: {
        type: String,
        required: true,
        validator(val) {
          return types.includes(val)
        }
      }
    },
    computed: {
      componentType() {
        if (this.type === 'key') {
          return Key
        }
        else if (this.type === 'value') {
          return Value
        }
        else if (this.type === 'action') {
          return Action
        }
      }
    }
  }
</script>
