<template>
  <dl :class="classes" v-bind="$attrs">
    <div class="nhsuk-summary-list__row" v-for="(item, index) in data" :key="index">
      <slot name="item" :props="item"></slot>
    </div>
  </dl>
</template>

<script>
  export default {
    name: 'NhsSummaryList',
    props: {
      data: {
        type: Array,
        required: true
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      classes() {
        var classes = [ 'nhsuk-summary-list' ]

        if (!this.border) {
          classes.push('nhsuk-summary-list--no-border')
        }

        return classes.join(' ')
      }
    }
  }
</script>