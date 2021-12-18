<template>
  <div class="nhsuk-table__panel-with-heading-tab">
    <heading-switcher :heading-level="headingLevel" class="nhsuk-table__heading-tab">{{heading}}</heading-switcher>
    <table role="table" :class="classes">
      <slot></slot>
    </table>
  </div>
</template>

<script>
  import HeadingSwitcher from '../../../shared/HeadingSwitcher.vue'

  export default {
    props: {
      heading: {
        type: String
      },
      headingLevel: {
        type: Number,
        default: 3
      },
      responsive: {
        type: Boolean,
        default: true
      }
    },
    components: {
      HeadingSwitcher
    },
    computed: {
      classes() {
        if (this.responsive) {
          return 'nhsuk-table-responsive'
        }
        return 'nhsuk-table'
      }
    }
  }
</script>
