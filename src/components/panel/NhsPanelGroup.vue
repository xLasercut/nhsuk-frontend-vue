<template>
  <div class="nhsuk-grid-row nhsuk-panel-group">
    <div
      v-for="item in $slots.default"
      :class="classes"
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
        default: 3,
        validator(val) {
          for (var key in columnMap) {
            if (key == val) {
              return true
            }
          }
          return false
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