<template>
  <div class="nhsuk-grid-row nhsuk-promo-group">
    <div :class="classes()" v-for="promo in $slots.default">
      <v-node :node="promo"></v-node>
    </div>
  </div>
</template>

<script>
  import VNode from '../../shared/VNode.vue'

  export default {
    name: 'NhsPromoGroup',
    components: { VNode },
    props: {
      column: {
        type: Number,
        default: 3
      }
    },
    methods: {
      classes() {
        var classes = [ 'nhsuk-promo-group__item' ]

        if (this.column === 2) {
          classes.push('nhsuk-grid-column-one-half')
        }
        else if (this.column === 3) {
          classes.push('nhsuk-grid-column-one-third')
        }

        return classes.join(' ')
      }
    }
  }
</script>