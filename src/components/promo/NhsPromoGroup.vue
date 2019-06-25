<template>
  <div class="nhsuk-grid-row nhsuk-promo-group">
    <div
      :class="classes"
      v-for="(promo, index) in $slots.default"
      :key="`${id}-${index}`"
    >
      <v-node :node="promo"></v-node>
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
    name: 'NhsPromoGroup',
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
        var classes = [ 'nhsuk-promo-group__item' ]

        if (this.column) {
          classes.push(columnMap[this.column])
        }

        return classes.join(' ')
      }
    }
  }
</script>