<template>
  <div class="nhsuk-grid-row nhsuk-panel-group">
    <div
      v-for="(item, index) in $slots.default"
      :class="classes"
      :key="`${id}-${index}`"
    >
      <v-node :node="item"></v-node>
    </div>
  </div>
</template>

<script>
  import VNode from '../../shared/VNode.vue'

  const columnMap = {
    '2': 'nhsuk-grid-column-one-half',
    '3': 'nhsuk-grid-column-one-third'
  }

  export default {
    name: 'NhsPanelGroup',
    components: { VNode },
    props: {
      column: {
        default: '3',
        type: String,
        validator(val) {
          return val in columnMap
        }
      },
      id: {
        type: String,
        default() {
          var random = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))
          return `${this.$options.name}-${random}`
        }
      }
    },
    computed: {
      classes() {
        var classes = [ 'nhsuk-panel-group__item' ]

        if (this.column) {
          classes.push(columnMap[this.column])
        }

        return classes.join(' ')
      }
    }
  }
</script>